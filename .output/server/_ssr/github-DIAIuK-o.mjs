import { i as profile, r as pinnedRepos } from "./portfolio-Cjcd-U_u.mjs";
import { t as queryOptions } from "../_libs/react+tanstack__react-query.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CXRvDbSa.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/github-DIAIuK-o.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getGithubStats = createServerFn({ method: "GET" }).inputValidator((data) => data).handler(createSsrRpc("f5ddb5f2df9ced8daed0f40b243f2db2e93dab13b2afcba43ad3b69cb0005943"));
var githubQuery = queryOptions({
	queryKey: ["github", profile.githubUser],
	queryFn: () => getGithubStats({ data: {
		user: profile.githubUser,
		pinned: pinnedRepos
	} }),
	staleTime: 3e5
});
//#endregion
export { githubQuery as t };
