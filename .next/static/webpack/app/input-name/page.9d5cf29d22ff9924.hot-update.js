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

/***/ "(app-pages-browser)/./app/input-name/page.tsx":
/*!*********************************!*\
  !*** ./app/input-name/page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InputNamePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_common_InputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/InputField */ \"(app-pages-browser)/./app/components/common/InputField.tsx\");\n/* harmony import */ var _components_common_CustomButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/CustomButton */ \"(app-pages-browser)/./app/components/common/CustomButton.tsx\");\n/* harmony import */ var _components_utils_handleSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/utils/handleSubmit */ \"(app-pages-browser)/./app/components/utils/handleSubmit.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction InputNamePage() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const staffId = searchParams.get(\"staffId\"); // 선택된 스태프 ID\n    const staffName = searchParams.get(\"staffName\"); // 선택된 스태프 이름\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // 입력된 사용자 이름\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // 에러 메시지\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // 성공 메시지\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"이름 입력\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"선택된 스텝: \",\n                    staffName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 30\n            }, this),\n            successMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"green\"\n                },\n                children: successMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 32\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>(0,_components_utils_handleSubmit__WEBPACK_IMPORTED_MODULE_5__.handleSubmit)(e, staffId, name, setErrorMessage, setSuccessMessage),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_InputField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        placeholder: \"이름을 입력하세요\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_CustomButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        text: \"메일 전송\",\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rkske\\\\Documents\\\\nextjs\\\\app\\\\input-name\\\\page.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(InputNamePage, \"gr24Wo28GBKM/LFWggzUgNjaKvY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = InputNamePage;\nvar _c;\n$RefreshReg$(_c, \"InputNamePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pbnB1dC1uYW1lL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDakI7QUFDd0I7QUFDSTtBQUNHO0FBR2pELFNBQVNLOztJQUNwQixNQUFNQyxlQUFlTixnRUFBZUE7SUFDcEMsTUFBTU8sVUFBVUQsYUFBYUUsR0FBRyxDQUFDLFlBQVksYUFBYTtJQUMxRCxNQUFNQyxZQUFZSCxhQUFhRSxHQUFHLENBQUMsY0FBYyxhQUFhO0lBQzlELE1BQU0sQ0FBQ0UsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLGFBQWE7SUFDbkQsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUMsS0FBSyxTQUFTO0lBQy9ELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQUMsS0FBSyxTQUFTO0lBR25FLHFCQUNJLDhEQUFDZTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRTtvQkFBU1Q7Ozs7Ozs7WUFDWEcsOEJBQWdCLDhEQUFDTTtnQkFBRUMsT0FBTztvQkFBRUMsT0FBTztnQkFBTTswQkFBSVI7Ozs7OztZQUM3Q0UsZ0NBQWtCLDhEQUFDSTtnQkFBRUMsT0FBTztvQkFBRUMsT0FBTztnQkFBUTswQkFBSU47Ozs7OzswQkFDbEQsOERBQUNPO2dCQUFLQyxVQUFXLENBQUNDLElBQ1ZuQiw0RUFBWUEsQ0FBQ21CLEdBQUdoQixTQUFTRyxNQUFNRyxpQkFBaUJFOztrQ0FHcEQsOERBQUNiLHFFQUFVQTt3QkFDUHNCLE9BQU9kO3dCQUNQZSxVQUFVLENBQUNGLElBQU1aLFFBQVFZLEVBQUVHLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDdkNHLGFBQVk7Ozs7OztrQ0FFaEIsOERBQUN4Qix1RUFBWUE7d0JBQUN5QixNQUFLO3dCQUFRQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0E1QndCeEI7O1FBQ0NMLDREQUFlQTs7O0tBRGhCSyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxya3NrZVxcRG9jdW1lbnRzXFxuZXh0anNcXGFwcFxcaW5wdXQtbmFtZVxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbW1vbi9JbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tbW9uL0N1c3RvbUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBoYW5kbGVTdWJtaXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy9oYW5kbGVTdWJtaXRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dE5hbWVQYWdlKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBzdGFmZklkID0gc2VhcmNoUGFyYW1zLmdldChcInN0YWZmSWRcIik7IC8vIOyEoO2DneuQnCDsiqTtg5ztlIQgSURcclxuICAgIGNvbnN0IHN0YWZmTmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJzdGFmZk5hbWVcIik7IC8vIOyEoO2DneuQnCDsiqTtg5ztlIQg7J2066aEXHJcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8g7J6F66Cl65CcIOyCrOyaqeyekCDsnbTrpoRcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8g7JeQ65+sIOuplOyLnOyngFxyXG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8g7ISx6rO1IOuplOyLnOyngFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT7snbTrpoQg7J6F66ClPC9oMT5cclxuICAgICAgICAgICAgPHA+7ISg7YOd65CcIOyKpO2FnToge3N0YWZmTmFtZX08L3A+XHJcbiAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+e2Vycm9yTWVzc2FnZX08L3A+fVxyXG4gICAgICAgICAgICB7c3VjY2Vzc01lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT57c3VjY2Vzc01lc3NhZ2V9PC9wPn1cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9IHsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoZSwgc3RhZmZJZCwgbmFtZSwgc2V0RXJyb3JNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066aE7J2EIOyeheugpe2VmOyEuOyalFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUJ1dHRvbiB0ZXh0PVwi66mU7J28IOyghOyGoVwiIHR5cGU9XCJzdWJtaXRcIj48L0N1c3RvbUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlU3RhdGUiLCJJbnB1dEZpZWxkIiwiQ3VzdG9tQnV0dG9uIiwiaGFuZGxlU3VibWl0IiwiSW5wdXROYW1lUGFnZSIsInNlYXJjaFBhcmFtcyIsInN0YWZmSWQiLCJnZXQiLCJzdGFmZk5hbWUiLCJuYW1lIiwic2V0TmFtZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJkaXYiLCJoMSIsInAiLCJzdHlsZSIsImNvbG9yIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInRleHQiLCJ0eXBlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/input-name/page.tsx\n"));

/***/ })

});