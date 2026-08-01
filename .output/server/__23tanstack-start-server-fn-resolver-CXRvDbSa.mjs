//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CXRvDbSa.js
var manifest = { "f5ddb5f2df9ced8daed0f40b243f2db2e93dab13b2afcba43ad3b69cb0005943": {
	functionName: "getGithubStats_createServerFn_handler",
	importer: () => import("./_ssr/github.functions-kGV8_u0b.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
