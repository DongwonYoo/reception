"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/input-name/page",{

/***/ "(app-pages-browser)/./app/components/common/CustomButton.tsx":
/*!************************************************!*\
  !*** ./app/components/common/CustomButton.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction CustomButton(param) {\n    let { text, href, onClick, className = \"\", variant = \"default\", size = \"lg\", type = \"button\" } = param;\n    const sizeClasses = {\n        sm: \"w-32 h-10 text-sm\",\n        md: \"w-36 h-12 text-base\",\n        lg: \"w-40 h-14 text-lg\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: onClick,\n        type: type,\n        className: \"\".concat(sizeClasses[size], \" bg-blue-500 text-white rounded-lg hover:bg-blue-600 \").concat(className),\n        variant: variant,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: href,\n            children: text\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\components\\\\common\\\\CustomButton.tsx\",\n            lineNumber: 38,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\components\\\\common\\\\CustomButton.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c = CustomButton;\nvar _c;\n$RefreshReg$(_c, \"CustomButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2NvbW1vbi9DdXN0b21CdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUrQztBQUNsQjtBQVlkLFNBQVNFLGFBQWEsS0FRaEI7UUFSZ0IsRUFDbkNDLElBQUksRUFDSkMsSUFBSSxFQUNKQyxPQUFPLEVBQ1BDLFlBQVcsRUFBRSxFQUNiQyxVQUFVLFNBQVMsRUFDbkJDLE9BQU8sSUFBSSxFQUNYQyxPQUFPLFFBQVEsRUFDSSxHQVJnQjtJQVNuQyxNQUFNQyxjQUFrRDtRQUN0REMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7SUFDTjtJQUVBLHFCQUNFLDhEQUFDYix5REFBTUE7UUFDUEssU0FBU0E7UUFDVEksTUFBTUE7UUFDTkgsV0FBVyxHQUE0RUEsT0FBekVJLFdBQVcsQ0FBQ0YsS0FBSyxFQUFDLHlEQUFpRSxPQUFWRjtRQUN2RkMsU0FBU0E7a0JBRU4sNEVBQUNOLGtEQUFJQTtZQUFDRyxNQUFNQTtzQkFBT0Q7Ozs7Ozs7Ozs7O0FBSTFCO0tBMUJ3QkQiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmtza2VcXERvY3VtZW50c1xcbmV4dGpzXFxhcHBcXGNvbXBvbmVudHNcXGNvbW1vblxcQ3VzdG9tQnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUJ1dHRvbm5Qcm9wc3tcclxuICB0ZXh0OnN0cmluZztcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OigpPT4gdm9pZDtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgdmFyaWFudD86IFwiZGVmYXVsdFwiIHwgXCJvdXRsaW5lXCIgfCBcImdob3N0XCIgfCBcImxpbmtcIjtcclxuICBzaXplPzogXCJzbVwiIHwgXCJtZFwiIHwgXCJsZ1wiO1xyXG4gIHR5cGU/OiBcImJ1dHRvblwiIHwgXCJzdWJtaXRcIiB8IFwicmVzZXRcIjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQnV0dG9uKHtcclxuICB0ZXh0LFxyXG4gIGhyZWYsXHJcbiAgb25DbGljayxcclxuICBjbGFzc05hbWUgPVwiXCIsXHJcbiAgdmFyaWFudCA9IFwiZGVmYXVsdFwiLFxyXG4gIHNpemUgPSBcImxnXCIsXHJcbiAgdHlwZSA9IFwiYnV0dG9uXCIsXHJcbn06IEN1c3RvbUJ1dHRvbm5Qcm9wcyl7XHJcbiAgY29uc3Qgc2l6ZUNsYXNzZXM6IFJlY29yZDxcInNtXCIgfCBcIm1kXCIgfCBcImxnXCIsIHN0cmluZz4gPSB7XHJcbiAgICBzbTogXCJ3LTMyIGgtMTAgdGV4dC1zbVwiLCAvLyDsnpHsnYAg67KE7Yq8XHJcbiAgICBtZDogXCJ3LTM2IGgtMTIgdGV4dC1iYXNlXCIsIC8vIOykkeqwhCDtgazquLAg67KE7Yq8XHJcbiAgICBsZzogXCJ3LTQwIGgtMTQgdGV4dC1sZ1wiLCAvLyDtgbAg67KE7Yq8ICjquLDrs7gpXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICB0eXBlPXt0eXBlfSBcclxuICAgIGNsYXNzTmFtZT17YCR7c2l6ZUNsYXNzZXNbc2l6ZV19IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCAke2NsYXNzTmFtZX1gfVxyXG4gICAgdmFyaWFudD17dmFyaWFudH1cclxuICAgID5cclxuICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9Pnt0ZXh0fTwvTGluaz5cclxuICAgIDwvQnV0dG9uPlxyXG4gIClcclxuICBcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJMaW5rIiwiQ3VzdG9tQnV0dG9uIiwidGV4dCIsImhyZWYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInNpemUiLCJ0eXBlIiwic2l6ZUNsYXNzZXMiLCJzbSIsIm1kIiwibGciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/common/CustomButton.tsx\n"));

/***/ })

});