import { i as profile, o as skillGroups, s as timeline } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { n as PageHeader, r as PageShell, t as Label } from "./page-DiMtyLZ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DyBRU7NR.js
var import_jsx_runtime = require_jsx_runtime();
var facts = [
	{
		key: "location",
		value: profile.location
	},
	{
		key: "role",
		value: `${profile.role} · ${profile.tagline}`
	},
	{
		key: "focus",
		value: "Backend engineering, API design, architecture"
	},
	{
		key: "since",
		value: String(timeline[0].year)
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		command: "cat about.md",
		title: "Engineer first, portfolio second.",
		description: "A short, honest summary of how I work and what I'm building toward."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-10",
			children: [
				{
					heading: "Who I am",
					body: profile.about[0]
				},
				{
					heading: "What I build",
					body: profile.about[1]
				},
				{
					heading: "What I'm learning",
					body: profile.about[2]
				},
				{
					heading: "Where I'm going",
					body: profile.about[3]
				}
			].map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05 * i,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-l border-border pl-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: block.heading }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: block.body
					})]
				})
			}, block.heading))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-lg border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "profile" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-4 space-y-3 font-mono text-xs",
						children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: fact.key
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-foreground",
							children: fact.value
						})] }, fact.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "daily tools" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: skillGroups.flatMap((g) => g.items.slice(0, 2)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded border border-border px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground",
								children: item.name
							}, item.name))
						})]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { About as component };
