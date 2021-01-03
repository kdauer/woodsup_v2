webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/projectslist.js":
/*!************************************!*\
  !*** ./components/projectslist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/projects.module.sass */ \"./styles/projects.module.sass\");\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _resources_projects_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/projects.json */ \"./resources/projects.json\");\nvar _resources_projects_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../resources/projects.json */ \"./resources/projects.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/components/projectslist.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar data = _resources_projects_json__WEBPACK_IMPORTED_MODULE_7__.projects;\n\nvar Projectslist = function Projectslist() {\n  console.log(\"data\" + data[1]);\n  return data.map(function (project) {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.box,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.projectImg,\n          src: project.image,\n          alt: \"Projectpicture\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.mask,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/projects/\".concat(project.id),\n            props: project.image,\n            className: \"link\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.project_title,\n              children: project.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.project_heading,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          href: \"/projects/\".concat(project.id),\n          props: project.image,\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.link_without_image,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n            children: [\"\\u2022 \", project.title]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 19\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 15\n      }, _this)\n    }, project.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }, _this);\n  });\n};\n\n_c = Projectslist;\nProjectslist.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", {\n            namespacesRequired: ['projects']\n          });\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\nProjectslist.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_5__[\"withTranslation\"])('projects')(Projectslist));\n\nvar _c;\n\n$RefreshReg$(_c, \"Projectslist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0c2xpc3QuanM/NDlhOSJdLCJuYW1lcyI6WyJkYXRhIiwiUHJvamVjdHNEYXRhIiwicHJvamVjdHMiLCJQcm9qZWN0c2xpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvamVjdCIsImltYWdlIiwic3R5bGVzIiwiYm94IiwicHJvamVjdEltZyIsIm1hc2siLCJpZCIsInByb2plY3RfdGl0bGUiLCJ0aXRsZSIsInByb2plY3RfaGVhZGluZyIsImxpbmtfd2l0aG91dF9pbWFnZSIsImdldEluaXRpYWxQcm9wcyIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsInByb3BUeXBlcyIsInQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxxREFBWSxDQUFDQyxRQUExQjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFTTCxJQUFJLENBQUMsQ0FBRCxDQUF6QjtBQUNBLFNBQ1FBLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUFDLE9BQU8sRUFBSTtBQUN0QjtBQUFBO0FBQUEsZ0JBQ0dBLE9BQU8sQ0FBQ0MsS0FBUixnQkFDQztBQUFLLGlCQUFTLEVBQUVDLG1FQUFNLENBQUNDLEdBQXZCO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFFRCxtRUFBTSxDQUFDRSxVQURwQjtBQUVFLGFBQUcsRUFBRUosT0FBTyxDQUFDQyxLQUZmO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBRUMsbUVBQU0sQ0FBQ0csSUFBdkI7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUNFLGdCQUFJLHNCQUFlTCxPQUFPLENBQUNNLEVBQXZCLENBRE47QUFFRSxpQkFBSyxFQUFFTixPQUFPLENBQUNDLEtBRmpCO0FBR0UscUJBQVMsRUFBQyxNQUhaO0FBQUEsbUNBS0U7QUFBRyx1QkFBUyxFQUFFQyxtRUFBTSxDQUFDSyxhQUFyQjtBQUFBLHdCQUFxQ1AsT0FBTyxDQUFDUTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZ0JBa0JDO0FBQUssaUJBQVMsRUFBRU4sbUVBQU0sQ0FBQ08sZUFBdkI7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUNFLGNBQUksc0JBQWVULE9BQU8sQ0FBQ00sRUFBdkIsQ0FETjtBQUVFLGVBQUssRUFBRU4sT0FBTyxDQUFDQyxLQUZqQjtBQUdFLG1CQUFTLEVBQUVDLG1FQUFNLENBQUNRLGtCQUhwQjtBQUFBLGlDQUtFO0FBQUEsa0NBQU1WLE9BQU8sQ0FBQ1EsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CSixPQUFVUixPQUFPLENBQUNNLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QkcsR0EvQkQsQ0FEUjtBQWlDRSxDQW5DTjs7S0FBTVYsWTtBQXFDTkEsWUFBWSxDQUFDZSxlQUFiLGlNQUErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBQWE7QUFDeENDLDhCQUFrQixFQUFFLENBQUMsVUFBRDtBQURvQixXQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQS9CO0FBSUVoQixZQUFZLENBQUNpQixTQUFiLEdBQXlCO0FBQ3ZCQyxHQUFDLEVBQUVDLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFESyxDQUF6QjtBQUlhQyw0SEFBZSxDQUFDLFVBQUQsQ0FBZixDQUE0QnRCLFlBQTVCLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wcm9qZWN0cy5tb2R1bGUuc2FzcydcbmltcG9ydCBQcm9qZWN0c0RhdGEgZnJvbSBcIi4uL3Jlc291cmNlcy9wcm9qZWN0cy5qc29uXCJcblxuY29uc3QgZGF0YSA9IFByb2plY3RzRGF0YS5wcm9qZWN0cztcblxuY29uc3QgUHJvamVjdHNsaXN0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiICsgZGF0YVsxXSlcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgZGF0YS5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9PlxuICAgICAgICAgICAge3Byb2plY3QuaW1hZ2UgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0SW1nfVxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXNrfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvamVjdHMvJHtwcm9qZWN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHByb3BzPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF90aXRsZX0+e3Byb2plY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF9oZWFkaW5nfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgIHByb3BzPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua193aXRob3V0X2ltYWdlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPuKAoiB7cHJvamVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KVxuICAgICl9XG5cblByb2plY3RzbGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydwcm9qZWN0cyddLFxuICB9KVxuICBcbiAgUHJvamVjdHNsaXN0LnByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigncHJvamVjdHMnKShQcm9qZWN0c2xpc3QpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/projectslist.js\n");

/***/ })

})