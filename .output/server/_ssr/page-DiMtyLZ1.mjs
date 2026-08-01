import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-DiMtyLZ1.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-5xl px-6 py-16 sm:py-24", className),
		children
	});
}
function PageHeader({ command, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "$"
					}),
					" ",
					command
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: description
			}) : null
		]
	});
}
function Label({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase", className),
		children
	});
}
function Tag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
		children
	});
}
//#endregion
export { Tag as i, PageHeader as n, PageShell as r, Label as t };
