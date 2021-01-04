webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/projectslist.js":
/*!************************************!*\
  !*** ./components/projectslist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/projects.module.sass */ \"./styles/projects.module.sass\");\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/components/projectslist.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Projectslist = function Projectslist(_ref) {\n  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _ref);\n\n  console.log(props.projects);\n  return props.projects.map(function (project) {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.box,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.projectImg,\n          src: project.image,\n          alt: \"Projectpicture\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.mask,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"/projects/\".concat(project.id),\n            props: project.image,\n            className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.link,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.project_title,\n              children: project.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 15\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.project_heading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: \"/projects/\".concat(project.id),\n          props: project.image,\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_5___default.a.link_without_image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [\"\\u2022 \", project.title]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }, _this)\n    }, project.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 11\n    }, _this);\n  });\n};\n\n_c = Projectslist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectslist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projectslist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c2xpc3QuanM/NDlhOSJdLCJuYW1lcyI6WyJQcm9qZWN0c2xpc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJpbWFnZSIsInN0eWxlcyIsImJveCIsInByb2plY3RJbWciLCJtYXNrIiwiaWQiLCJsaW5rIiwicHJvamVjdF90aXRsZSIsInRpdGxlIiwicHJvamVjdF9oZWFkaW5nIiwibGlua193aXRob3V0X2ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBLE1BQVhDLEtBQVc7O0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxRQUFsQjtBQUNBLFNBQ1FILEtBQUssQ0FBQ0csUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUFDLE9BQU8sRUFBSTtBQUNoQztBQUFBO0FBQUEsZ0JBQ0dBLE9BQU8sQ0FBQ0MsS0FBUixnQkFDQztBQUFLLGlCQUFTLEVBQUVDLG1FQUFNLENBQUNDLEdBQXZCO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFFRCxtRUFBTSxDQUFDRSxVQURwQjtBQUVFLGFBQUcsRUFBRUosT0FBTyxDQUFDQyxLQUZmO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ0csSUFBdkI7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUNFLGdCQUFJLHNCQUFlTCxPQUFPLENBQUNNLEVBQXZCLENBRE47QUFFRSxpQkFBSyxFQUFFTixPQUFPLENBQUNDLEtBRmpCO0FBR0UscUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ0ssSUFIcEI7QUFBQSxtQ0FLRTtBQUFHLHVCQUFTLEVBQUVMLG1FQUFNLENBQUNNLGFBQXJCO0FBQUEsd0JBQXFDUixPQUFPLENBQUNTO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxnQkFrQkM7QUFBSyxpQkFBUyxFQUFFUCxtRUFBTSxDQUFDUSxlQUF2QjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQ0UsY0FBSSxzQkFBZVYsT0FBTyxDQUFDTSxFQUF2QixDQUROO0FBRUUsZUFBSyxFQUFFTixPQUFPLENBQUNDLEtBRmpCO0FBR0UsbUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ1Msa0JBSHBCO0FBQUEsaUNBS0U7QUFBQSxrQ0FBTVgsT0FBTyxDQUFDUyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKLE9BQVVULE9BQU8sQ0FBQ00sRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCRyxHQS9CRCxDQURSO0FBaUNFLENBbkNOOztLQUFNWixZO0FBcUNTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdHNsaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb2plY3RzLm1vZHVsZS5zYXNzJ1xuXG5cbmNvbnN0IFByb2plY3RzbGlzdCA9ICh7Li4ucHJvcHN9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMucHJvamVjdHMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIHByb3BzLnByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcbiAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0+XG4gICAgICAgICAgICB7cHJvamVjdC5pbWFnZSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWd9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9qZWN0cGljdHVyZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hc2t9PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcHM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfdGl0bGV9Pntwcm9qZWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9qZWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBwcm9wcz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfd2l0aG91dF9pbWFnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD7igKIge3Byb2plY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICApfVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c2xpc3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projectslist.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _extends; });\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanM/YzMxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

/***/ })

})