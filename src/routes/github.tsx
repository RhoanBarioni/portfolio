import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { GitBranch, GitCommitHorizontal, Star } from "lucide-react";
import { PageHeader, PageShell, Label, Tag } from "@/components/ui-kit/page";
import { Reveal } from "@/components/ui-kit/reveal";
import {
  getGithubStats,
  type GithubRepo,
  type GithubDay,
} from "@/lib/github.functions";
import { pinnedRepos, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const githubQuery = queryOptions({
  queryKey: ["github", profile.githubUser],
  queryFn: () =>
    getGithubStats({ data: { user: profile.githubUser, pinned: pinnedRepos } }),
  staleTime: 5 * 60_000,
});

const TITLE = "Rhoan Barioni - Software Developer";
const DESCRIPTION =
  "Acompanhe meus repositórios, linguagens, commits recentes e atividades públicas no GitHub.";

const LANGUAGE_COLORS: Record<string, string> = {
  Astro: "#ff5a03",
  C: "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  CSS: "#663399",
  Dart: "#00b4ab",
  Dockerfile: "#384d54",
  Go: "#00add8",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  "Jupyter Notebook": "#da5b0b",
  Kotlin: "#a97bff",
  Lua: "#000080",
  Makefile: "#427819",
  MDX: "#fcb32c",
  PHP: "#4f5d95",
  Python: "#3572a5",
  Ruby: "#701516",
  Rust: "#dea584",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Svelte: "#ff3e00",
  Swift: "#f05138",
  TypeScript: "#3178c6",
  Vue: "#41b883",
};

const languageColor = (language: string) =>
  LANGUAGE_COLORS[language] ?? "#8b949e";

export const Route = createFileRoute("/github")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(githubQuery);
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GithubPage,
});

function relative(iso: string) {
  const diff = Date.now() - Date.parse(iso);
  const day = 86_400_000;
  if (diff < 3_600_000)
    return `há ${Math.max(1, Math.round(diff / 60_000))} min`;
  if (diff < day) return `há ${Math.round(diff / 3_600_000)} h`;
  if (diff < 30 * day) return `há ${Math.round(diff / day)} d`;
  return `há ${Math.round(diff / (30 * day))} meses`;
}

function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-sm text-foreground transition-colors group-hover:text-primary">
          {repo.name}
        </span>
        {repo.pinned && <Label>fixado</Label>}
      </div>
      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {repo.description ?? "Repositório sem descrição."}
      </p>
      <div className="mt-4 flex items-center gap-4 font-mono text-[0.7rem] text-muted-foreground">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: languageColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star aria-hidden className="h-3 w-3" /> {repo.stars}
        </span>
        <span className="flex items-center gap-1">
          <GitBranch aria-hidden className="h-3 w-3" /> {repo.forks}
        </span>
        <span className="ml-auto">{relative(repo.pushedAt)}</span>
      </div>
    </a>
  );
}

function ContributionGrid({ days }: { days: GithubDay[] }) {
  const weeks: GithubDay[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  const max = Math.max(1, ...days.map((d) => d.count));

  const level = (count: number) => {
    if (count === 0) return "bg-surface-strong";
    const ratio = count / max;
    if (ratio > 0.66) return "bg-primary";
    if (ratio > 0.33) return "bg-primary/70";
    return "bg-primary/40";
  };

  return (
    <div className="overflow-x-auto">
      <div
        className="mx-auto flex w-max gap-1"
        role="img"
        aria-label="Atividade pública de contribuições nas últimas 17 semanas"
      >
        {weeks.map((week) => (
          <div key={week[0].date} className="flex flex-col gap-1">
            {week.map((day) => (
              <span
                key={day.date}
                title={`${day.date}: ${day.count} evento${day.count === 1 ? "" : "s"} público${day.count === 1 ? "" : "s"}`}
                className={cn(
                  "h-3.5 w-3.5 rounded-[3px] sm:h-4 sm:w-4 lg:h-5 lg:w-5",
                  level(day.count),
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function GithubPage() {
  const { data } = useSuspenseQuery(githubQuery);

  if (!data.available) {
    return (
      <PageShell>
        <PageHeader
          command={`gh api users/${profile.githubUser}`}
          title="Os dados do GitHub estão indisponíveis no momento."
          description="A API pública do GitHub atingiu o limite de requisições ou não respondeu. Tente novamente em alguns minutos."
        />
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-flex rounded-md border border-border px-4 py-2.5 text-sm hover:bg-surface"
        >
          Abrir perfil no GitHub
        </a>
      </PageShell>
    );
  }

  const summary = [
    { label: "repositórios públicos", value: data.publicRepos },
    { label: "estrelas", value: data.totalStars },
    { label: "forks", value: data.totalForks },
    { label: "linguagens", value: data.languages.length },
  ];

  return (
    <PageShell>
      <PageHeader
        command={`gh api users/${profile.githubUser}`}
        title="Direto do meu GitHub."
        description="Os dados abaixo vêm da API pública do GitHub e são exibidos por componentes que desenvolvi para esta página."
      />

      <Reveal>
        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {summary.map((item) => (
            <div key={item.label} className="bg-background px-5 py-6">
              <dt>
                <Label>{item.label}</Label>
              </dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.05}>
        <section aria-labelledby="contrib-title" className="mt-16">
          <h2 id="contrib-title" className="text-lg font-medium tracking-tight">
            Atividade pública
          </h2>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            últimas 17 semanas
          </p>
          <div className="mt-5 rounded-lg border border-border p-5">
            <ContributionGrid days={data.days} />
          </div>
        </section>
      </Reveal>

      {data.pinned.length > 0 && (
        <Reveal delay={0.05}>
          <section aria-labelledby="pinned-title" className="mt-16">
            <h2
              id="pinned-title"
              className="text-lg font-medium tracking-tight"
            >
              Repositórios fixados
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.pinned.map((repo) => (
                <li key={repo.name}>
                  <RepoCard repo={repo} />
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <section aria-labelledby="latest-title" className="mt-16">
          <h2 id="latest-title" className="text-lg font-medium tracking-tight">
            Repositórios recentes
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.latest.map((repo) => (
              <li key={repo.name}>
                <RepoCard repo={repo} />
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <section aria-labelledby="lang-title">
            <h2 id="lang-title" className="text-lg font-medium tracking-tight">
              Distribuição de linguagens
            </h2>
            <div
              aria-hidden
              className="mt-5 flex h-2 w-full overflow-hidden rounded-full bg-surface-strong"
            >
              {data.languages.map((lang) => (
                <span
                  key={lang.name}
                  style={{
                    width: `${lang.percent}%`,
                    backgroundColor: languageColor(lang.name),
                  }}
                  className="h-full"
                />
              ))}
            </div>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {data.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: languageColor(lang.name) }}
                    />
                    {lang.name}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {lang.percent}% · {lang.count} repositório
                    {lang.count === 1 ? "" : "s"}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.05}>
          <section aria-labelledby="commits-title">
            <h2
              id="commits-title"
              className="text-lg font-medium tracking-tight"
            >
              Commits recentes
            </h2>
            {data.commits.length > 0 ? (
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {data.commits.map((commit) => (
                  <li key={commit.id}>
                    <a
                      href={commit.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-start gap-3 py-3 hover:text-primary"
                    >
                      <GitCommitHorizontal
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-mono text-xs">
                          {commit.message}
                        </span>
                        <span className="mt-1 block font-mono text-[0.7rem] text-muted-foreground">
                          {commit.repo} · {relative(commit.createdAt)}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm text-muted-foreground">
                Nenhum commit público recente.
              </p>
            )}
          </section>
        </Reveal>
      </div>

      {data.activity.length > 0 && (
        <Reveal delay={0.05}>
          <section aria-labelledby="activity-title" className="mt-16">
            <h2
              id="activity-title"
              className="text-lg font-medium tracking-tight"
            >
              Atividade recente
            </h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {data.activity.map((event) => (
                <li
                  key={event.id}
                  className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"
                >
                  <span className="text-muted-foreground">
                    {event.detail} em{" "}
                    <a
                      href={event.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-xs text-foreground hover:text-primary"
                    >
                      {event.repo}
                    </a>
                  </span>
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {relative(event.createdAt)}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      )}

      <Reveal>
        <div className="mt-16 flex flex-wrap gap-2">
          <Tag>REST API</Tag>
          <Tag>sem widgets</Tag>
          <Tag>cache de 5 min</Tag>
        </div>
      </Reveal>
    </PageShell>
  );
}
