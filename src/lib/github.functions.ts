export interface GithubRepo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  pushedAt: string;
  createdAt: string;
  topics: string[];
  pinned: boolean;
}

export interface GithubActivity {
  id: string;
  type: string;
  repo: string;
  repoUrl: string;
  createdAt: string;
  detail: string;
}

export interface GithubCommit {
  id: string;
  message: string;
  repo: string;
  url: string;
  createdAt: string;
}

export interface GithubLanguage {
  name: string;
  count: number;
  percent: number;
}

export interface GithubDay {
  date: string;
  count: number;
}

export interface GithubStats {
  available: boolean;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  pinned: GithubRepo[];
  latest: GithubRepo[];
  repos: GithubRepo[];
  languages: GithubLanguage[];
  activity: GithubActivity[];
  commits: GithubCommit[];
  days: GithubDay[];
}

const EMPTY: GithubStats = {
  available: false,
  publicRepos: 0,
  totalStars: 0,
  totalForks: 0,
  pinned: [],
  latest: [],
  repos: [],
  languages: [],
  activity: [],
  commits: [],
  days: [],
};

interface RawRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  created_at: string;
  topics?: string[];
  fork: boolean;
  archived: boolean;
}

interface RawEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: {
    commits?: { sha: string; message: string }[];
    ref_type?: string;
    action?: string;
  };
}

interface RawCommitSearch {
  items?: {
    sha: string;
    html_url: string;
    repository: { name: string };
    commit: {
      message: string;
      author?: { date?: string };
      committer?: { date?: string };
    };
  }[];
}

function describeEvent(event: RawEvent): string {
  switch (event.type) {
    case "PushEvent": {
      const count = event.payload?.commits?.length ?? 0;
      return `Pushed ${count} commit${count === 1 ? "" : "s"}`;
    }
    case "CreateEvent":
      return `Created ${event.payload?.ref_type ?? "resource"}`;
    case "PullRequestEvent":
      return `${event.payload?.action === "closed" ? "Closed" : "Opened"} a pull request`;
    case "IssuesEvent":
      return `${event.payload?.action === "closed" ? "Closed" : "Opened"} an issue`;
    case "WatchEvent":
      return "Starred a repository";
    case "ForkEvent":
      return "Forked a repository";
    case "ReleaseEvent":
      return "Published a release";
    default:
      return event.type.replace(/Event$/, "");
  }
}

const DAYS = 118; // 119 days: exactly 17 complete weeks

function buildDays(events: RawEvent[]): GithubDay[] {
  const counts = new Map<string, number>();
  for (const event of events) {
    const day = event.created_at.slice(0, 10);
    const weight =
      event.type === "PushEvent" ? (event.payload?.commits?.length ?? 1) : 1;
    counts.set(day, (counts.get(day) ?? 0) + weight);
  }

  const today = new Date();
  const days: GithubDay[] = [];
  for (let i = DAYS; i >= 0; i -= 1) {
    const d = new Date(
      Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
    );
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, count: counts.get(key) ?? 0 });
  }
  return days;
}

export async function getGithubStats({
  data,
}: {
  data: { user: string; pinned?: string[] };
}): Promise<GithubStats> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-site",
  };

  try {
    const [reposRes, eventsRes, commitsRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${encodeURIComponent(data.user)}/repos?per_page=100&sort=pushed`,
        { headers },
      ),
      fetch(
        `https://api.github.com/users/${encodeURIComponent(data.user)}/events/public?per_page=100`,
        { headers },
      ),
      fetch(
        `https://api.github.com/search/commits?q=author:${encodeURIComponent(data.user)}&sort=committer-date&order=desc&per_page=8`,
        { headers },
      ),
    ]);

    if (!reposRes.ok) {
      console.error(`GitHub repos request failed [${reposRes.status}]`);
      return EMPTY;
    }

    const rawRepos = (await reposRes.json()) as RawRepo[];
    const owned = rawRepos.filter((r) => !r.fork && !r.archived);
    const pinnedNames = (data.pinned ?? []).map((n) => n.toLowerCase());

    const repos: GithubRepo[] = owned.map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      pushedAt: r.pushed_at,
      createdAt: r.created_at,
      topics: r.topics ?? [],
      pinned: pinnedNames.includes(r.name.toLowerCase()),
    }));

    const pinned = repos
      .filter((r) => r.pinned)
      .sort(
        (a, b) =>
          pinnedNames.indexOf(a.name.toLowerCase()) -
          pinnedNames.indexOf(b.name.toLowerCase()),
      );

    const latest = [...repos]
      .sort((a, b) => Date.parse(b.pushedAt) - Date.parse(a.pushedAt))
      .slice(0, 6);

    const counts = new Map<string, number>();
    for (const repo of repos) {
      if (!repo.language) continue;
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    const total = [...counts.values()].reduce((sum, n) => sum + n, 0);
    const languages: GithubLanguage[] = [...counts.entries()]
      .map(([name, count]) => ({
        name,
        count,
        percent: total ? Math.round((count / total) * 1000) / 10 : 0,
      }))
      .sort((a, b) => b.count - a.count);

    let activity: GithubActivity[] = [];
    let commits: GithubCommit[] = [];
    let days: GithubDay[] = [];

    if (eventsRes.ok) {
      const rawEvents = (await eventsRes.json()) as RawEvent[];
      days = buildDays(rawEvents);

      activity = rawEvents.slice(0, 8).map((event) => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name.split("/").slice(-1)[0],
        repoUrl: `https://github.com/${event.repo.name}`,
        createdAt: event.created_at,
        detail: describeEvent(event),
      }));

      commits = rawEvents
        .filter((event) => event.type === "PushEvent")
        .flatMap((event) =>
          (event.payload?.commits ?? []).map((commit) => ({
            id: `${event.id}-${commit.sha}`,
            message: commit.message.split("\n")[0],
            repo: event.repo.name.split("/").slice(-1)[0],
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
            createdAt: event.created_at,
          })),
        )
        .slice(0, 8);
    } else {
      days = buildDays([]);
    }

    if (commitsRes.ok) {
      const commitSearch = (await commitsRes.json()) as RawCommitSearch;
      commits = (commitSearch.items ?? []).map((item) => ({
        id: item.sha,
        message: item.commit.message.split("\n")[0],
        repo: item.repository.name,
        url: item.html_url,
        createdAt:
          item.commit.author?.date ??
          item.commit.committer?.date ??
          new Date().toISOString(),
      }));
    }

    return {
      available: true,
      publicRepos: repos.length,
      totalStars: repos.reduce((sum, r) => sum + r.stars, 0),
      totalForks: repos.reduce((sum, r) => sum + r.forks, 0),
      pinned,
      latest,
      repos: [...repos].sort((a, b) => a.name.localeCompare(b.name)),
      languages,
      activity,
      commits,
      days,
    };
  } catch (error) {
    console.error("GitHub request failed", error);
    return EMPTY;
  }
}
