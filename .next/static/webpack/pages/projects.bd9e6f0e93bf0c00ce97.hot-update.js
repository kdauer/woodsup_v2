webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/projectslist.js":
/*!************************************!*\
  !*** ./components/projectslist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/projects.module.sass */ \"./styles/projects.module.sass\");\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _resources_projects_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/projects.json */ \"./resources/projects.json\");\nvar _resources_projects_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/projects.json */ \"./resources/projects.json\", 1);\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/components/projectslist.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar projects = _resources_projects_json__WEBPACK_IMPORTED_MODULE_5__.projects;\n\nvar Projectslist = function Projectslist() {\n  console.log(\"data\" + projects.title);\n  return projects.map(function (project) {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.box,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.projectImg,\n          src: project.image,\n          alt: \"Projectpicture\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.mask,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: \"/projects/\".concat(project.id),\n            props: project.image,\n            className: \"link\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.project_title,\n              children: project.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.project_heading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/projects/\".concat(project.id),\n          props: project.image,\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.link_without_image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"\\u2022 \", project.title]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, _this)\n    }, project.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }, _this);\n  });\n}; // Projectslist.getInitialProps = async () => ({\n//     namespacesRequired: ['projects'],\n//   })\n//   Projectslist.propTypes = {\n//     t: PropTypes.func.isRequired,\n//   }\n\n\n_c = Projectslist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectslist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projectslist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c2xpc3QuanM/NDlhOSJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsIlByb2plY3RzRGF0YSIsIlByb2plY3RzbGlzdCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1hcCIsInByb2plY3QiLCJpbWFnZSIsInN0eWxlcyIsImJveCIsInByb2plY3RJbWciLCJtYXNrIiwiaWQiLCJwcm9qZWN0X3RpdGxlIiwicHJvamVjdF9oZWFkaW5nIiwibGlua193aXRob3V0X2ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxxREFBWSxDQUFDRCxRQUE5Qjs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFTSixRQUFRLENBQUNLLEtBQTlCO0FBQ0EsU0FDUUwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsT0FBTyxFQUFJO0FBQzFCO0FBQUE7QUFBQSxnQkFDR0EsT0FBTyxDQUFDQyxLQUFSLGdCQUNDO0FBQUssaUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ0MsR0FBdkI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVELG1FQUFNLENBQUNFLFVBRHBCO0FBRUUsYUFBRyxFQUFFSixPQUFPLENBQUNDLEtBRmY7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxtQkFBUyxFQUFFQyxtRUFBTSxDQUFDRyxJQUF2QjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQ0UsZ0JBQUksc0JBQWVMLE9BQU8sQ0FBQ00sRUFBdkIsQ0FETjtBQUVFLGlCQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsS0FGakI7QUFHRSxxQkFBUyxFQUFDLE1BSFo7QUFBQSxtQ0FLRTtBQUFHLHVCQUFTLEVBQUVDLG1FQUFNLENBQUNLLGFBQXJCO0FBQUEsd0JBQXFDUCxPQUFPLENBQUNGO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxnQkFrQkM7QUFBSyxpQkFBUyxFQUFFSSxtRUFBTSxDQUFDTSxlQUF2QjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsY0FBSSxzQkFBZVIsT0FBTyxDQUFDTSxFQUF2QixDQUROO0FBRUUsZUFBSyxFQUFFTixPQUFPLENBQUNDLEtBRmpCO0FBR0UsbUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ08sa0JBSHBCO0FBQUEsaUNBS0U7QUFBQSxrQ0FBTVQsT0FBTyxDQUFDRixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKLE9BQVVFLE9BQU8sQ0FBQ00sRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCRyxHQS9CRCxDQURSO0FBaUNFLENBbkNOLEMsQ0FxQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7S0EzQ01YLFk7QUE2Q1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wcm9qZWN0c2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcHJvamVjdHMubW9kdWxlLnNhc3MnXG5pbXBvcnQgUHJvamVjdHNEYXRhIGZyb20gXCIuLi9yZXNvdXJjZXMvcHJvamVjdHMuanNvblwiXG5cbmNvbnN0IHByb2plY3RzID0gUHJvamVjdHNEYXRhLnByb2plY3RzO1xuXG5jb25zdCBQcm9qZWN0c2xpc3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIgKyBwcm9qZWN0cy50aXRsZSlcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgcHJvamVjdHMubWFwKHByb2plY3QgPT4ge1xuICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgIHtwcm9qZWN0LmltYWdlID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEltZ31cbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2plY3RwaWN0dXJlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFza30+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBwcm9wcz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfdGl0bGV9Pntwcm9qZWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9qZWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBwcm9wcz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfd2l0aG91dF9pbWFnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD7igKIge3Byb2plY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICApfVxuXG4vLyBQcm9qZWN0c2xpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbi8vICAgICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsncHJvamVjdHMnXSxcbi8vICAgfSlcbiAgXG4vLyAgIFByb2plY3RzbGlzdC5wcm9wVHlwZXMgPSB7XG4vLyAgICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbi8vICAgfVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c2xpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projectslist.js\n");

/***/ })

})