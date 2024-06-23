"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_arth_code100x_algorithmic_arena_apps_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/arth/code100x/algorithmic-arena/apps/web/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_arth_code100x_algorithmic_arena_apps_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGaG9tZSUyRmFydGglMkZjb2RlMTAweCUyRmFsZ29yaXRobWljLWFyZW5hJTJGYXBwcyUyRndlYiUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmFydGglMkZjb2RlMTAweCUyRmFsZ29yaXRobWljLWFyZW5hJTJGYXBwcyUyRndlYiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvPzlmY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvYXJ0aC9jb2RlMTAweC9hbGdvcml0aG1pYy1hcmVuYS9hcHBzL3dlYi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9hcnRoL2NvZGUxMDB4L2FsZ29yaXRobWljLWFyZW5hL2FwcHMvd2ViL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./app/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNlO0FBRWhELE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9hdXRoXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/db/index.ts":
/*!*************************!*\
  !*** ./app/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\n// eslint-disable-next-line\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? prismaClientSingleton();\nconst db = prisma;\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQUlBLDJCQUEyQjtBQUMzQixNQUFNRSxrQkFBa0JDO0FBSXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJSDtBQUVsQyxNQUFNSSxLQUFLRCxPQUFPO0FBRXpCLElBQUlFLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2FwcC9kYi9pbmRleC50cz81NTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XG59O1xuXG50eXBlIFByaXNtYUNsaWVudFNpbmdsZXRvbiA9IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj47XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnRTaW5nbGV0b24gfCB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xuXG5leHBvcnQgY29uc3QgZGIgPSBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImRiIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/db/index.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ \"(rsc)/./app/db/index.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/../../node_modules/jose/dist/node/esm/index.js\");\n\n\n\n\nconst generateJWT = async (payload)=>{\n    const secret = process.env.JWT_SECRET || \"secret\";\n    const jwk = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.importJWK)({\n        k: secret,\n        alg: \"HS256\",\n        kty: \"oct\"\n    });\n    const jwt = await new jose__WEBPACK_IMPORTED_MODULE_3__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"365d\").sign(jwk);\n    return jwt;\n};\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"email\",\n                    type: \"text\",\n                    placeholder: \"\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\",\n                    placeholder: \"\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials.username || !credentials.password) {\n                    return null;\n                }\n                const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(credentials.password, 10);\n                const userDb = await _db__WEBPACK_IMPORTED_MODULE_0__.db.user.findFirst({\n                    where: {\n                        email: credentials.username\n                    },\n                    select: {\n                        password: true,\n                        id: true,\n                        name: true\n                    }\n                });\n                if (userDb) {\n                    if (await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, userDb.password)) {\n                        const jwt = await generateJWT({\n                            id: userDb.id\n                        });\n                        return {\n                            id: userDb.id,\n                            name: userDb.name,\n                            email: credentials.username,\n                            token: jwt\n                        };\n                    } else {\n                        return null;\n                    }\n                }\n                try {\n                    // sign up\n                    if (credentials.username.length < 3) {\n                        return null;\n                    }\n                    if (credentials.username.password < 3) {\n                        return null;\n                    }\n                    const user = await _db__WEBPACK_IMPORTED_MODULE_0__.db.user.create({\n                        data: {\n                            email: credentials.username,\n                            name: credentials.username,\n                            password: hashedPassword\n                        }\n                    });\n                    const jwt = await generateJWT({\n                        id: user.id\n                    });\n                    return {\n                        id: user.id,\n                        name: credentials.username,\n                        email: credentials.username,\n                        token: jwt\n                    };\n                } catch (e) {\n                    return null;\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET || \"secr3t\",\n    callbacks: {\n        session: async ({ session, token })=>{\n            const newSession = session;\n            if (newSession.user && token.uid) {\n                newSession.user.id = token.uid;\n                newSession.user.jwtToken = token.jwtToken;\n            }\n            return newSession;\n        },\n        jwt: async ({ token, user })=>{\n            const newToken = token;\n            if (user) {\n                newToken.uid = user.id;\n                newToken.jwtToken = user.token;\n            }\n            return newToken;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQyxXQUFXZixJQUFJLElBQUlPLE1BQU1TLEdBQUcsRUFBRTtnQkFDaENELFdBQVdmLElBQUksQ0FBQ0ssRUFBRSxHQUFHRSxNQUFNUyxHQUFHO2dCQUM5QkQsV0FBV2YsSUFBSSxDQUFDaUIsUUFBUSxHQUFHVixNQUFNVSxRQUFRO1lBQzNDO1lBQ0EsT0FBT0Y7UUFDVDtRQUNBakMsS0FBSyxPQUFPLEVBQUV5QixLQUFLLEVBQUVQLElBQUksRUFBRTtZQUN6QixNQUFNa0IsV0FBV1g7WUFFakIsSUFBSVAsTUFBTTtnQkFDUmtCLFNBQVNGLEdBQUcsR0FBR2hCLEtBQUtLLEVBQUU7Z0JBQ3RCYSxTQUFTRCxRQUFRLEdBQUcsS0FBZVYsS0FBSztZQUMxQztZQUNBLE9BQU9XO1FBQ1Q7SUFDRjtBQUNGLEVBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZGJcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IEpXVCB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5pbXBvcnQgeyBKV1RQYXlsb2FkLCBTaWduSldULCBpbXBvcnRKV0sgfSBmcm9tIFwiam9zZVwiO1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcblxuaW50ZXJmYWNlIHRva2VuIGV4dGVuZHMgSldUIHtcbiAgdWlkOiBzdHJpbmc7XG4gIGp3dFRva2VuOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2Ugc2Vzc2lvbiBleHRlbmRzIFNlc3Npb24ge1xuICB1c2VyOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBqd3RUb2tlbjogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICB9O1xufVxuaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG59XG5cbmNvbnN0IGdlbmVyYXRlSldUID0gYXN5bmMgKHBheWxvYWQ6IEpXVFBheWxvYWQpID0+IHtcbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCBcInNlY3JldFwiO1xuXG4gIGNvbnN0IGp3ayA9IGF3YWl0IGltcG9ydEpXSyh7IGs6IHNlY3JldCwgYWxnOiBcIkhTMjU2XCIsIGt0eTogXCJvY3RcIiB9KTtcblxuICBjb25zdCBqd3QgPSBhd2FpdCBuZXcgU2lnbkpXVChwYXlsb2FkKVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6IFwiSFMyNTZcIiB9KVxuICAgIC5zZXRJc3N1ZWRBdCgpXG4gICAgLnNldEV4cGlyYXRpb25UaW1lKFwiMzY1ZFwiKVxuICAgIC5zaWduKGp3ayk7XG5cbiAgcmV0dXJuIGp3dDtcbn07XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJlbWFpbFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwicGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJcIiB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XG5cbiAgICAgICAgaWYgKCFjcmVkZW50aWFscy51c2VybmFtZSB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goY3JlZGVudGlhbHMucGFzc3dvcmQsIDEwKTtcblxuICAgICAgICBjb25zdCB1c2VyRGIgPSBhd2FpdCBkYi51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgcGFzc3dvcmQ6IHRydWUsXG4gICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVzZXJEYikge1xuICAgICAgICAgIGlmIChhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlckRiLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgY29uc3Qgand0ID0gYXdhaXQgZ2VuZXJhdGVKV1Qoe1xuICAgICAgICAgICAgICBpZDogdXNlckRiLmlkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGlkOiB1c2VyRGIuaWQsXG4gICAgICAgICAgICAgIG5hbWU6IHVzZXJEYi5uYW1lLFxuICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICAgIHRva2VuOiBqd3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBzaWduIHVwXG4gICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnVzZXJuYW1lLnBhc3N3b3JkIDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICAgIG5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLFxuICAgICAgICAgICAgICBwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3Qgand0ID0gYXdhaXQgZ2VuZXJhdGVKV1Qoe1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgIHRva2VuOiBqd3QsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCB8fCBcInNlY3IzdFwiLFxuICBjYWxsYmFja3M6IHtcbiAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICBjb25zdCBuZXdTZXNzaW9uOiBzZXNzaW9uID0gc2Vzc2lvbiBhcyBzZXNzaW9uO1xuICAgICAgaWYgKG5ld1Nlc3Npb24udXNlciAmJiB0b2tlbi51aWQpIHtcbiAgICAgICAgbmV3U2Vzc2lvbi51c2VyLmlkID0gdG9rZW4udWlkIGFzIHN0cmluZztcbiAgICAgICAgbmV3U2Vzc2lvbi51c2VyLmp3dFRva2VuID0gdG9rZW4uand0VG9rZW4gYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1Nlc3Npb24hO1xuICAgIH0sXG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KTogUHJvbWlzZTxKV1Q+ID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rva2VuID0gdG9rZW47XG5cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIG5ld1Rva2VuLnVpZCA9IHVzZXIuaWQ7XG4gICAgICAgIG5ld1Rva2VuLmp3dFRva2VuID0gKHVzZXIgYXMgVXNlcikudG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3VG9rZW47XG4gICAgfSxcbiAgfSxcbn0gc2F0aXNmaWVzIE5leHRBdXRoT3B0aW9ucztcbiJdLCJuYW1lcyI6WyJkYiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJTaWduSldUIiwiaW1wb3J0SldLIiwiZ2VuZXJhdGVKV1QiLCJwYXlsb2FkIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJqd2siLCJrIiwiYWxnIiwia3R5Iiwiand0Iiwic2V0UHJvdGVjdGVkSGVhZGVyIiwic2V0SXNzdWVkQXQiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInVzZXJEYiIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImVtYWlsIiwic2VsZWN0IiwiaWQiLCJjb21wYXJlIiwidG9rZW4iLCJsZW5ndGgiLCJjcmVhdGUiLCJkYXRhIiwiZSIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJuZXdTZXNzaW9uIiwidWlkIiwiand0VG9rZW4iLCJuZXdUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farth%2Fcode100x%2Falgorithmic-arena%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();