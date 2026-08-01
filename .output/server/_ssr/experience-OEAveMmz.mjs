import { s as timeline } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { i as Tag, n as PageHeader, r as PageShell, t as Label } from "./page-DiMtyLZ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-OEAveMmz.js
var import_jsx_runtime = require_jsx_runtime();
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			command: "git log --reverse --oneline",
			title: "A deliberate path, year by year.",
			description: "No shortcuts — a steady progression from markup to systems."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-16 border-l border-border",
			children: timeline.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "li",
				delay: .06 * index,
				className: "relative pb-14 pl-8 last:pb-0 sm:pl-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute top-1.5 -left-[4.5px] h-2 w-2 rounded-full bg-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-x-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-primary",
							children: entry.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-medium tracking-tight sm:text-2xl",
							children: entry.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
						children: entry.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-1.5",
						children: entry.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: tag }) }, tag))
					})
				]
			}, entry.year))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 border-l border-border pl-8 font-mono text-xs text-muted-foreground sm:pl-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "HEAD -> main" })
		}) })
	] });
}
//#endregion
export { Experience as component };
