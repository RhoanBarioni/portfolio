import { t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-DYl8WIbc.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 16, className, as = "div" }) {
	const reduced = useReducedMotion();
	const MotionTag = motion[as];
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
//#endregion
export { Reveal as t };
