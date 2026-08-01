import { i as profile } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime, n as useSuspenseQuery } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as Tag, n as PageHeader, r as PageShell, t as Label } from "./page-DiMtyLZ1.mjs";
import { d as GitBranch, r as Star, u as GitCommitHorizontal } from "../_libs/lucide-react.mjs";
import { t as githubQuery } from "./github-DIAIuK-o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/github-DCsv_W3r.js
var import_jsx_runtime = require_jsx_runtime();
function relative(iso) {
	const diff = Date.now() - Date.parse(iso);
	const day = 864e5;
	if (diff < 36e5) return `${Math.max(1, Math.round(diff / 6e4))}m ago`;
	if (diff < day) return `${Math.round(diff / 36e5)}h ago`;
	if (diff < 30 * day) return `${Math.round(diff / day)}d ago`;
	return `${Math.round(diff / (30 * day))}mo ago`;
}
function RepoCard({ repo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: repo.url,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "group flex h-full flex-col rounded-lg border border-border p-5 transition-colors hover:border-border-strong hover:bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm text-foreground transition-colors group-hover:text-primary",
					children: repo.name
				}), repo.pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "pinned" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground",
				children: repo.description ?? "No description provided."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-4 font-mono text-[0.7rem] text-muted-foreground",
				children: [
					repo.language && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-2 w-2 rounded-full bg-primary"
						}), repo.language]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								"aria-hidden": true,
								className: "h-3 w-3"
							}),
							" ",
							repo.stars
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, {
								"aria-hidden": true,
								className: "h-3 w-3"
							}),
							" ",
							repo.forks
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto",
						children: relative(repo.pushedAt)
					})
				]
			})
		]
	});
}
function ContributionGrid({ days }) {
	const weeks = [];
	for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
	const max = Math.max(1, ...days.map((d) => d.count));
	const level = (count) => {
		if (count === 0) return "bg-surface-strong";
		const ratio = count / max;
		if (ratio > .66) return "bg-primary";
		if (ratio > .33) return "bg-primary/70";
		return "bg-primary/40";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-[3px]",
			role: "img",
			"aria-label": "Public contribution activity, last 17 weeks",
			children: weeks.map((week) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-[3px]",
				children: week.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: `${day.date}: ${day.count} public event${day.count === 1 ? "" : "s"}`,
					className: cn("h-3 w-3 rounded-[2px]", level(day.count))
				}, day.date))
			}, week[0].date))
		})
	});
}
function GithubPage() {
	const { data } = useSuspenseQuery(githubQuery);
	if (!data.available) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		command: `gh api users/${profile.githubUser}`,
		title: "GitHub data is unavailable right now.",
		description: "The public GitHub API is rate limited or unreachable. Try again in a few minutes."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: profile.github,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "mt-8 inline-flex rounded-md border border-border px-4 py-2.5 text-sm hover:bg-surface",
		children: "Open GitHub profile"
	})] });
	const summary = [
		{
			label: "public repos",
			value: data.publicRepos
		},
		{
			label: "total stars",
			value: data.totalStars
		},
		{
			label: "forks",
			value: data.totalForks
		},
		{
			label: "languages",
			value: data.languages.length
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			command: `gh api users/${profile.githubUser}`,
			title: "Live from GitHub.",
			description: "Everything below is fetched from the public GitHub REST API and rendered with custom components — no widgets."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4",
			children: summary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background px-5 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: item.label }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-2 text-2xl font-semibold tracking-tight",
					children: item.value
				})]
			}, item.label))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "contrib-title",
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "contrib-title",
						className: "text-lg font-medium tracking-tight",
						children: "Public activity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-xs text-muted-foreground",
						children: "last 17 weeks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-lg border border-border p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContributionGrid, { days: data.days })
					})
				]
			})
		}),
		data.pinned.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "pinned-title",
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "pinned-title",
					className: "text-lg font-medium tracking-tight",
					children: "Pinned repositories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: data.pinned.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoCard, { repo }) }, repo.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "latest-title",
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "latest-title",
					className: "text-lg font-medium tracking-tight",
					children: "Latest repositories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: data.latest.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoCard, { repo }) }, repo.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "lang-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "lang-title",
						className: "text-lg font-medium tracking-tight",
						children: "Language distribution"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "mt-5 flex h-2 w-full overflow-hidden rounded-full bg-surface-strong",
						children: data.languages.map((lang, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { width: `${lang.percent}%` },
							className: cn("h-full", i === 0 ? "bg-primary" : i === 1 ? "bg-primary/60" : i === 2 ? "bg-violet/70" : "bg-muted-foreground/40")
						}, lang.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-border border-y border-border",
						children: data.languages.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: [
									lang.percent,
									"% · ",
									lang.count,
									" repo",
									lang.count === 1 ? "" : "s"
								]
							})]
						}, lang.name))
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": "commits-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "commits-title",
						className: "text-lg font-medium tracking-tight",
						children: "Latest commits"
					}), data.commits.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y divide-border border-y border-border",
						children: data.commits.map((commit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: commit.url,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "group flex items-start gap-3 py-3 hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCommitHorizontal, {
								"aria-hidden": true,
								className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-mono text-xs",
									children: commit.message
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block font-mono text-[0.7rem] text-muted-foreground",
									children: [
										commit.repo,
										" · ",
										relative(commit.createdAt)
									]
								})]
							})]
						}) }, commit.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-muted-foreground",
						children: "No recent public commits."
					})]
				})
			})]
		}),
		data.activity.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "activity-title",
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "activity-title",
					className: "text-lg font-medium tracking-tight",
					children: "Recent activity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 divide-y divide-border border-y border-border",
					children: data.activity.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-2 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								event.detail,
								" in",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: event.repoUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "font-mono text-xs text-foreground hover:text-primary",
									children: event.repo
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.7rem] text-muted-foreground",
							children: relative(event.createdAt)
						})]
					}, event.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "REST API" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "no widgets" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "cached 5 min" })
			]
		}) })
	] });
}
//#endregion
export { GithubPage as component };
