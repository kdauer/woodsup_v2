module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/support.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['de'],\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU1DLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlMLFdBQUosQ0FBZ0I7QUFDL0JNLGdCQUFjLEVBQUUsQ0FBQyxJQUFELENBRGU7QUFFL0JDLFlBQVUsRUFBRUosSUFBSSxDQUFDSyxPQUFMLENBQWEseUJBQWI7QUFGbUIsQ0FBaEIsQ0FBakIiLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBvdGhlckxhbmd1YWdlczogWydkZSddLFxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/support.js":
/*!**************************!*\
  !*** ./pages/support.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/support.module.sass */ \"./styles/support.module.sass\");\n/* harmony import */ var _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/support.js\";\n\n\n\n\nconst Support = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.home,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.supportContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: t(\"common:support\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: t(\"common:supportParagraphOne\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 9\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: t(\"common:supportParagraphTwo\")\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: [\"Woods Up e.V. \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, undefined), \"BIC: HOLVDEB1\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 11\n          }, undefined), \"IBAN: DE 68 1001 7997 8678 3814 89\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [t(\"common:supportContact\"), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"woodsup@posteo.de\",\n          children: \"woodsup@posteo.de\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 36\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.paypal,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/QR-Code.png\",\n          alt: \"QR-Code\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url\",\n          className: _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.donateBtn,\n          children: t(\"common:donate\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 9\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_support_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.space\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nSupport.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\nSupport.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('common')(Support));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdXBwb3J0LmpzPzRiMzkiXSwibmFtZXMiOlsiU3VwcG9ydCIsInQiLCJzdHlsZXMiLCJob21lIiwic3VwcG9ydENvbnRhaW5lciIsInBheXBhbCIsImRvbmF0ZUJ0biIsInNwYWNlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFTO0FBQ3JCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxJQUF2QjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFFRCxrRUFBTSxDQUFDRSxnQkFBdkI7QUFBQSw4QkFDRjtBQUFBLGtCQUFLSCxDQUFDLENBQUMsZ0JBQUQ7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURFLGVBRUY7QUFBQSwrQkFDRTtBQUFBLG9CQUNDQSxDQUFDLENBQUMsNEJBQUQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRSxlQU9GO0FBQUEsa0JBQUlBLENBQUMsQ0FBQyw0QkFBRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEUsZUFRRjtBQUFBLCtCQUNFO0FBQUEsb0RBQ2dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGhCLGdDQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRSxlQWdCRjtBQUFBLG1CQUNDQSxDQUFDLENBQUMsdUJBQUQsQ0FERixvQkFDNkI7QUFBRyxjQUFJLEVBQUMsbUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkUsZUFtQkY7QUFBSyxpQkFBUyxFQUFFQyxrRUFBTSxDQUFDRyxNQUF2QjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFDLGNBQVQ7QUFBd0IsYUFBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGNBQUksRUFBQywrRkFEUDtBQUVFLG1CQUFTLEVBQUVILGtFQUFNLENBQUNJLFNBRnBCO0FBQUEsb0JBSUdMLENBQUMsQ0FBQyxlQUFEO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJFLGVBNEJGO0FBQUssaUJBQVMsRUFBRUMsa0VBQU0sQ0FBQ0s7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0NILENBbkNEOztBQXFDQVAsT0FBTyxDQUFDUSxlQUFSLEdBQTBCLGFBQWE7QUFDbkNDLG9CQUFrQixFQUFFLENBQUMsUUFBRDtBQURlLENBQWIsQ0FBMUI7O0FBSUVULE9BQU8sQ0FBQ1UsU0FBUixHQUFvQjtBQUNsQlQsR0FBQyxFQUFFVSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREEsQ0FBcEI7QUFJYUMsNEhBQWUsQ0FBQyxRQUFELENBQWYsQ0FBMEJkLE9BQTFCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9zdXBwb3J0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N1cHBvcnQubW9kdWxlLnNhc3MnXG5cbmNvbnN0IFN1cHBvcnQgPSAoe3R9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdXBwb3J0Q29udGFpbmVyfT5cbiAgICAgIDxoMT57dChcImNvbW1vbjpzdXBwb3J0XCIpfTwvaDE+XG4gICAgICA8cD5cbiAgICAgICAgPGI+XG4gICAgICAgIHt0KFwiY29tbW9uOnN1cHBvcnRQYXJhZ3JhcGhPbmVcIil9XG4gICAgICAgIDwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPnt0KFwiY29tbW9uOnN1cHBvcnRQYXJhZ3JhcGhUd29cIil9PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlxuICAgICAgICAgIFdvb2RzIFVwIGUuVi4gPGJyIC8+XG4gICAgICAgICAgQklDOiBIT0xWREVCMVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIElCQU46IERFIDY4IDEwMDEgNzk5NyA4Njc4IDM4MTQgODlcbiAgICAgICAgPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICB7dChcImNvbW1vbjpzdXBwb3J0Q29udGFjdFwiKX0gPGEgaHJlZj1cIndvb2RzdXBAcG9zdGVvLmRlXCI+d29vZHN1cEBwb3N0ZW8uZGU8L2E+XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheXBhbH0+XG4gICAgICAgIDxpbWcgc3JjPVwiL1FSLUNvZGUucG5nXCIgYWx0PVwiUVItQ29kZVwiIC8+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3I/Y21kPV9zLXhjbGljayZob3N0ZWRfYnV0dG9uX2lkPUY0Q1RDU0pEQU44RFEmc291cmNlPXVybFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZG9uYXRlQnRufVxuICAgICAgICA+XG4gICAgICAgICAge3QoXCJjb21tb246ZG9uYXRlXCIpfVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2V9PjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuU3VwcG9ydC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbiAgfSlcbiAgXG4gIFN1cHBvcnQucHJvcFR5cGVzID0ge1xuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShTdXBwb3J0KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/support.js\n");

/***/ }),

/***/ "./styles/support.module.sass":
/*!************************************!*\
  !*** ./styles/support.module.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"home\": \"support_home__3Fqa4\",\n\t\"space\": \"support_space__1Rlpp\",\n\t\"supportContainer\": \"support_supportContainer__3Vl7m\",\n\t\"paypal\": \"support_paypal__3gIDn\",\n\t\"donateBtn\": \"support_donateBtn__2foAn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3VwcG9ydC5tb2R1bGUuc2Fzcz81ZWY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvc3VwcG9ydC5tb2R1bGUuc2Fzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvbWVcIjogXCJzdXBwb3J0X2hvbWVfXzNGcWE0XCIsXG5cdFwic3BhY2VcIjogXCJzdXBwb3J0X3NwYWNlX18xUmxwcFwiLFxuXHRcInN1cHBvcnRDb250YWluZXJcIjogXCJzdXBwb3J0X3N1cHBvcnRDb250YWluZXJfXzNWbDdtXCIsXG5cdFwicGF5cGFsXCI6IFwic3VwcG9ydF9wYXlwYWxfXzNnSURuXCIsXG5cdFwiZG9uYXRlQnRuXCI6IFwic3VwcG9ydF9kb25hdGVCdG5fXzJmb0FuXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/support.module.sass\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });