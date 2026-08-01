import { a as __toESM } from "../_runtime.mjs";
import { i as profile } from "./portfolio-Cjcd-U_u.mjs";
import { a as require_jsx_runtime, i as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./reveal-DYl8WIbc.mjs";
import { n as PageHeader, r as PageShell, t as Label } from "./page-DiMtyLZ1.mjs";
import { l as Github, o as Mail, s as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-QWrrTs_d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var channels = [
	{
		id: "email",
		label: "Email",
		value: profile.email,
		href: `mailto:${profile.email}`,
		icon: Mail
	},
	{
		id: "linkedin",
		label: "LinkedIn",
		value: "in/rhoanbarioni",
		href: profile.linkedin,
		icon: Linkedin
	},
	{
		id: "github",
		label: "GitHub",
		value: `@${profile.githubUser}`,
		icon: Github,
		href: profile.github
	}
];
function Contact() {
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		const email = String(form.get("email") ?? "").trim();
		const message = String(form.get("message") ?? "").trim();
		const next = {};
		if (!name) next.name = "Please tell me your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
		if (message.length < 10) next.message = "A little more detail, please (10+ characters).";
		setErrors(next);
		if (Object.keys(next).length > 0) return;
		const subject = encodeURIComponent(`Portfolio contact — ${name}`);
		const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
	}
	const field = "mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		command: "ping rhoan --message",
		title: "Let's talk.",
		description: "Open to internships, junior full stack roles and freelance projects. I reply to every serious message."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border border-y border-border",
			children: channels.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: channel.href,
				...channel.id === "email" ? {} : {
					target: "_blank",
					rel: "noreferrer noopener"
				},
				className: "group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(channel.icon, {
						"aria-hidden": true,
						className: "h-4 w-4 text-muted-foreground"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: channel.label
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: channel.value
				})]
			}) }, channel.id))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .06,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "rounded-lg border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "compose message" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "text-sm text-muted-foreground",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								name: "name",
								type: "text",
								autoComplete: "name",
								className: field
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 font-mono text-xs text-destructive",
								children: errors.name
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "text-sm text-muted-foreground",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								className: field
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 font-mono text-xs text-destructive",
								children: errors.email
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "text-sm text-muted-foreground",
								children: "Message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 5,
								className: field
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 font-mono text-xs text-destructive",
								children: errors.message
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							"aria-hidden": true,
							className: "h-4 w-4"
						}), "Open in mail client"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-[0.7rem] text-muted-foreground",
						children: "no backend · opens your default mail app"
					})
				]
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
