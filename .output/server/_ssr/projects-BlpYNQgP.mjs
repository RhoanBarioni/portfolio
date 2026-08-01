import { a as projects } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { i as Tag, n as PageHeader, r as PageShell, t as Label } from "./page-DiMtyLZ1.mjs";
import { l as Github, m as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BlpYNQgP.js
var import_jsx_runtime = require_jsx_runtime();
var CASE_FIELDS = [
	{
		key: "problem",
		label: "Problem"
	},
	{
		key: "solution",
		label: "Solution"
	},
	{
		key: "results",
		label: "Results"
	}
];
function ProjectSection({ project, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		"aria-labelledby": `${project.id}-title`,
		className: "border-t border-border py-20 first:border-t-0 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-primary",
						children: String(index + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: project.year })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `${project.id}-title`,
					className: "mt-4 text-4xl font-semibold tracking-[-0.02em] sm:text-6xl",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: project.summary
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 overflow-hidden rounded-xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 border-b border-border px-4 py-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-2.5 w-2.5 rounded-full bg-muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-2.5 w-2.5 rounded-full bg-muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "h-2.5 w-2.5 rounded-full bg-muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 font-mono text-[0.7rem] text-muted-foreground",
								children: project.demo ?? project.repo
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.cover,
						alt: `${project.name} interface`,
						loading: index === 0 ? "eager" : "lazy",
						width: 1280,
						height: 800,
						className: "aspect-[16/10] w-full object-cover"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "space-y-7",
						children: CASE_FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l border-border pl-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: field.label }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base",
								children: project[field.key]
							})]
						}, field.key))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "tech stack" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: tech }) }, tech))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-2 border-t border-border pt-5",
								children: [project.repo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.repo,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm transition-colors hover:border-border-strong hover:bg-surface",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
										"aria-hidden": true,
										className: "h-4 w-4"
									}), "Source"]
								}), project.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.demo,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "group inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
									children: [project.demoLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										"aria-hidden": true,
										className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									})]
								})]
							})
						]
					})
				})]
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		command: "ls -la ./projects",
		title: "Things I designed, built and shipped.",
		description: "Three projects, each documented the way I'd document them for a team: the problem, the decision, the outcome."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-16",
		children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectSection, {
			project,
			index
		}, project.id))
	})] });
}
//#endregion
export { Projects as component };
