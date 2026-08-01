import { o as skillGroups } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { n as PageHeader, r as PageShell } from "./page-DiMtyLZ1.mjs";
import { c as LayoutGrid, f as Database, i as Server, n as Wrench, p as Container } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stack-D5fURtiR.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	layout: LayoutGrid,
	server: Server,
	database: Database,
	container: Container,
	wrench: Wrench
};
function Stack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		command: "cat stack.json",
		title: "The tools I reach for.",
		description: "Not a badge wall — just what I actually use, grouped by where it sits in the system."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-16 divide-y divide-border border-y border-border",
		children: skillGroups.map((group, index) => {
			const Icon = ICONS[group.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .04 * index,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": `${group.id}-title`,
					className: "grid gap-8 py-12 lg:grid-cols-[16rem_minmax(0,1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							"aria-hidden": true,
							className: "h-4 w-4 text-muted-foreground"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: `${group.id}-title`,
							className: "text-lg font-medium tracking-tight",
							children: group.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: group.description
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "group flex items-baseline justify-between gap-4 bg-background px-4 py-3 transition-colors hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm transition-colors group-hover:text-primary",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.7rem] text-muted-foreground",
								children: item.note
							})]
						}, item.name))
					})]
				})
			}, group.id);
		})
	})] });
}
//#endregion
export { Stack as component };
