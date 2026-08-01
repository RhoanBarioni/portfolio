import { a as __toESM } from "../_runtime.mjs";
import { a as projects, i as profile, s as timeline, t as mainTechnologies } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime, i as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { h as ArrowRight, l as Github, o as Mail, s as Linkedin } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cdc1V7K3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Terminal-style typing effect. Renders nothing typed on the server so
* hydration always matches; the animation starts after mount and runs once.
*/
function TypingLine({ text, speed = 65 }) {
	const [typed, setTyped] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setTyped(text);
			return;
		}
		let i = 0;
		const id = window.setInterval(() => {
			i += 1;
			setTyped(text.slice(0, i));
			if (i >= text.length) window.clearInterval(id);
		}, speed);
		return () => window.clearInterval(id);
	}, [text, speed]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center font-mono text-lg text-foreground sm:text-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "mr-3 text-primary",
				children: ">"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				children: typed
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "animate-caret ml-1 inline-block h-[1.1em] w-[0.55ch] translate-y-[0.12em] bg-primary"
			})
		]
	});
}
var stats = [
	{
		label: "years learning",
		value: `${(/* @__PURE__ */ new Date()).getFullYear() - timeline[0].year}+`
	},
	{
		label: "shipped projects",
		value: String(projects.length)
	},
	{
		label: "technologies",
		value: String(mainTechnologies)
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 grid-field"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 ambient-blue"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-primary align-middle" }),
							"available for opportunities · ",
							profile.location
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-8 text-5xl font-semibold tracking-[-0.03em] sm:text-7xl",
							children: profile.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingLine, { text: "Full Stack Developer_" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
							children: "Computer Science student building web applications end to end — interfaces with React and TypeScript, services with Go and Java."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/projects",
									className: "group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
									children: ["View projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										"aria-hidden": true,
										className: "h-4 w-4 transition-transform group-hover:translate-x-0.5"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm transition-colors hover:border-border-strong hover:bg-surface",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										"aria-hidden": true,
										className: "h-4 w-4"
									}), "Get in touch"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.github,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "GitHub profile",
									className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
										"aria-hidden": true,
										className: "h-4 w-4"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.linkedin,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "LinkedIn profile",
									className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
										"aria-hidden": true,
										className: "h-4 w-4"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									"aria-label": "Contact",
									className: "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										"aria-hidden": true,
										className: "h-4 w-4"
									})
								})
							]
						})
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "At a glance",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mx-auto grid w-full max-w-5xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-0",
			children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-0 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase",
					children: stat.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-2 text-3xl font-semibold tracking-tight",
					children: stat.value
				})]
			}, stat.label))
		})
	})] });
}
//#endregion
export { Home as component };
