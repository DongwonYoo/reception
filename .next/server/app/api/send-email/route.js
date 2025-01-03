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
exports.id = "app/api/send-email/route";
exports.ids = ["app/api/send-email/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.tsx&appDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.tsx&appDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_rkske_Documents_nextjs_app_api_send_email_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/send-email/route.tsx */ \"(rsc)/./app/api/send-email/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send-email/route\",\n        pathname: \"/api/send-email\",\n        filename: \"route\",\n        bundlePath: \"app/api/send-email/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\api\\\\send-email\\\\route.tsx\",\n    nextConfigOutput,\n    userland: C_Users_rkske_Documents_nextjs_app_api_send_email_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kLWVtYWlsJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZC1lbWFpbCUyRnJvdXRlLnRzeCZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDcmtza2UlNUNEb2N1bWVudHMlNUNuZXh0anMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3Jrc2tlJTVDRG9jdW1lbnRzJTVDbmV4dGpzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmtza2VcXFxcRG9jdW1lbnRzXFxcXG5leHRqc1xcXFxhcHBcXFxcYXBpXFxcXHNlbmQtZW1haWxcXFxccm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZW5kLWVtYWlsL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2VuZC1lbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZC1lbWFpbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHJrc2tlXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcYXBwXFxcXGFwaVxcXFxzZW5kLWVtYWlsXFxcXHJvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.tsx&appDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/send-email/route.tsx":
/*!**************************************!*\
  !*** ./app/api/send-email/route.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(request) {\n    try {\n        // 클라이언트 요청 데이터 추출\n        const { staffId, name } = await request.json();\n        if (!staffId || !name) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: \"Missing required fields: staffId or name\"\n            }, {\n                status: 400\n            });\n        }\n        // Google Apps Script로 데이터 전달\n        const response = await fetch(\"https://script.google.com/macros/s/AKfycbyTxmJMaM-7hUMbwLfX1pLCxqSvpWdwfEtBN9s-z_hQFvlAZXp4zumPHz2Mayjns_g/exec\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                staffId,\n                name\n            })\n        });\n        if (!response.ok) {\n            const errorText = await response.text();\n            throw new Error(`Google Apps Script error: ${errorText}`);\n        }\n        const data = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(data); // 클라이언트로 응답 전달\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NlbmQtZW1haWwvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3ZDLElBQUk7UUFDQSxrQkFBa0I7UUFDbEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFNUMsSUFBSSxDQUFDRixXQUFXLENBQUNDLE1BQU07WUFDbkIsT0FBT0oscURBQVlBLENBQUNLLElBQUksQ0FDcEI7Z0JBQUVDLFNBQVM7Z0JBQU9DLFNBQVM7WUFBMkMsR0FDdEU7Z0JBQUVDLFFBQVE7WUFBSTtRQUV0QjtRQUVBLDZCQUE2QjtRQUM3QixNQUFNQyxXQUFXLE1BQU1DLE1BQ25CLG1IQUNBO1lBQ0lDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWjtnQkFBU0M7WUFBSztRQUN6QztRQUdKLElBQUksQ0FBQ0ssU0FBU08sRUFBRSxFQUFFO1lBQ2QsTUFBTUMsWUFBWSxNQUFNUixTQUFTUyxJQUFJO1lBQ3JDLE1BQU0sSUFBSUMsTUFBTSxDQUFDLDBCQUEwQixFQUFFRixXQUFXO1FBQzVEO1FBRUEsTUFBTUcsT0FBTyxNQUFNWCxTQUFTSixJQUFJO1FBQ2hDLE9BQU9MLHFEQUFZQSxDQUFDSyxJQUFJLENBQUNlLE9BQU8sZUFBZTtJQUNuRCxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFPckIscURBQVlBLENBQUNLLElBQUksQ0FDcEI7WUFBRUMsU0FBUztZQUFPQyxTQUFTYyxNQUFNZCxPQUFPO1FBQUMsR0FDekM7WUFBRUMsUUFBUTtRQUFJO0lBRXRCO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmtza2VcXERvY3VtZW50c1xcbmV4dGpzXFxhcHBcXGFwaVxcc2VuZC1lbWFpbFxccm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyDtgbTrnbzsnbTslrjtirgg7JqU7LKtIOuNsOydtO2EsCDstpTstpxcclxuICAgICAgICBjb25zdCB7IHN0YWZmSWQsIG5hbWUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YWZmSWQgfHwgIW5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJNaXNzaW5nIHJlcXVpcmVkIGZpZWxkczogc3RhZmZJZCBvciBuYW1lXCIgfSxcclxuICAgICAgICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR29vZ2xlIEFwcHMgU2NyaXB066GcIOuNsOydtO2EsCDsoITri6xcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieVR4bUpNYU0tN2hVTWJ3TGZYMXBMQ3hxU3ZwV2R3ZkV0Qk45cy16X2hRRnZsQVpYcDR6dW1QSHoyTWF5am5zX2cvZXhlY1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhZmZJZCwgbmFtZSB9KSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEdvb2dsZSBBcHBzIFNjcmlwdCBlcnJvcjogJHtlcnJvclRleHR9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihkYXRhKTsgLy8g7YG065287J207Ja47Yq466GcIOydkeuLtSDsoITri6xcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0sXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0Iiwic3RhZmZJZCIsIm5hbWUiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvclRleHQiLCJ0ZXh0IiwiRXJyb3IiLCJkYXRhIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/send-email/route.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsend-email%2Froute&page=%2Fapi%2Fsend-email%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend-email%2Froute.tsx&appDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Crkske%5CDocuments%5Cnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();