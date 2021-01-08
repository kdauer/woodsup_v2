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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/privacypolicy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  otherLanguages: ['de', 'es'],\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU1DLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlMLFdBQUosQ0FBZ0I7QUFDL0JNLGdCQUFjLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixDQURlO0FBRS9CQyxZQUFVLEVBQUVKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLHlCQUFiO0FBRm1CLENBQWhCLENBQWpCIiwiZmlsZSI6Ii4vaTE4bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZGUnLCdlcyddLFxuICBsb2NhbGVQYXRoOiBwYXRoLnJlc29sdmUoJy4vcHVibGljL3N0YXRpYy9sb2NhbGVzJylcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/privacypolicy.js":
/*!********************************!*\
  !*** ./pages/privacypolicy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_protection_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/protection.module.sass */ \"./styles/protection.module.sass\");\n/* harmony import */ var _styles_protection_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_protection_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/privacypolicy.js\";\n\n\n\n\nconst Protection = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_protection_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.protection,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"big\", {\n          children: t('p_1')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_1')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_2')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_2')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        id: \"s3-t-firma\",\n        children: \"WoodsUp e.V.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        id: \"s3-t-ansprechpartner\",\n        children: t('contactperson')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        id: \"s3-t-strasse\",\n        children: \"Wollestra\\xDFe 52\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        id: \"s3-t-plz\",\n        children: \"14482\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        id: \"s3-t-ort\",\n        children: \"Potsdam\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 42\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_3')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_3')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_4')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_4')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [t('p_5'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        rel: \"noopener noreferrer\",\n        href: \"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html\",\n        target: \"_blank\",\n        children: \"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined), \".\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_5')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_6')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_6')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_7')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_7')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_8')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_8')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_9')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_10')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_11')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_9')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_12')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_13')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_14')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_15')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_10')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_16')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_1')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_2')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_3')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_4')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_5')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_6')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: t('li_7')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: t('h5_11')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_17')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_18')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: t('p_19')\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [t('p_20'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.google.com/fonts#AboutPlace:about\",\n        children: \"https://www.google.com/fonts#AboutPlace:about\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, undefined), t('p_21'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://policies.google.com/privacy/partners?hl=de\",\n        children: \"https://policies.google.com/privacy/partners?hl=de\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, undefined);\n};\n\nProtection.getInitialProps = async () => ({\n  namespacesRequired: ['privacypolicy']\n});\n\nProtection.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('privacypolicy')(Protection));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcml2YWN5cG9saWN5LmpzP2FhZjEiXSwibmFtZXMiOlsiUHJvdGVjdGlvbiIsInQiLCJzdHlsZXMiLCJwcm90ZWN0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFTO0FBQ3hCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxVQUF2QjtBQUFBLDRCQUNGO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFBLG9CQUFNRixDQUFDLENBQUMsS0FBRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERSxlQU1GO0FBQUEsZ0JBQUtBLENBQUMsQ0FBQyxNQUFEO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORSxlQU9GO0FBQUEsZ0JBQUtBLENBQUMsQ0FBQyxNQUFEO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRSxlQVFGO0FBQUEsZ0JBQUlBLENBQUMsQ0FBQyxLQUFEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRSxlQVNGO0FBQUEsOEJBQ0U7QUFBTSxVQUFFLEVBQUMsWUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFNLFVBQUUsRUFBQyxzQkFBVDtBQUFBLGtCQUFpQ0EsQ0FBQyxDQUFDLGVBQUQ7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYs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QUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5REU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwRUgsQ0EzRUQ7O0FBNkVBRCxVQUFVLENBQUNJLGVBQVgsR0FBNkIsYUFBYTtBQUN0Q0Msb0JBQWtCLEVBQUUsQ0FBQyxlQUFEO0FBRGtCLENBQWIsQ0FBN0I7O0FBSUVMLFVBQVUsQ0FBQ00sU0FBWCxHQUF1QjtBQUNyQkwsR0FBQyxFQUFFTSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREcsQ0FBdkI7QUFJYUMsNEhBQWUsQ0FBQyxlQUFELENBQWYsQ0FBaUNWLFVBQWpDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcml2YWN5cG9saWN5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb3RlY3Rpb24ubW9kdWxlLnNhc3MnXG5cbmNvbnN0IFByb3RlY3Rpb24gPSAoe3R9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm90ZWN0aW9ufT5cbiAgICAgIDxwPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIDxiaWc+e3QoJ3BfMScpfTwvYmlnPlxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICAgIDxoNT57dCgnaDVfMScpfTwvaDU+XG4gICAgICA8aDU+e3QoJ2g1XzInKX08L2g1PlxuICAgICAgPHA+e3QoJ3BfMicpfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8c3BhbiBpZD1cInMzLXQtZmlybWFcIj5Xb29kc1VwIGUuVi48L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBpZD1cInMzLXQtYW5zcHJlY2hwYXJ0bmVyXCI+e3QoJ2NvbnRhY3RwZXJzb24nKX08L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBpZD1cInMzLXQtc3RyYXNzZVwiPldvbGxlc3RyYcOfZSA1Mjwvc3Bhbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGlkPVwiczMtdC1wbHpcIj4xNDQ4Mjwvc3Bhbj4gPHNwYW4gaWQ9XCJzMy10LW9ydFwiPlBvdHNkYW08L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cD57dCgncF8zJyl9PC9wPlxuICAgICAgPGg1Pnt0KCdoNV8zJyl9PC9oNT5cbiAgICAgIDxwPnt0KCdwXzQnKX08L3A+XG4gICAgICA8aDU+e3QoJ2g1XzQnKX08L2g1PlxuICAgICAgPHA+e3QoJ3BfNScpfVxuICAgICAgICA8YVxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5iZmRpLmJ1bmQuZGUvREUvSW5mb3RoZWsvQW5zY2hyaWZ0ZW5fTGlua3MvYW5zY2hyaWZ0ZW5fbGlua3Mtbm9kZS5odG1sXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgaHR0cHM6Ly93d3cuYmZkaS5idW5kLmRlL0RFL0luZm90aGVrL0Fuc2NocmlmdGVuX0xpbmtzL2Fuc2NocmlmdGVuX2xpbmtzLW5vZGUuaHRtbFxuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvcD5cbiAgICAgIDxoNT57dCgnaDVfNScpfTwvaDU+XG4gICAgICA8cD57dCgncF82Jyl9PC9wPlxuICAgICAgPGg1Pnt0KCdoNV82Jyl9PC9oNT5cbiAgICAgIDxwPnt0KCdwXzcnKX08L3A+XG4gICAgICA8aDU+e3QoJ2g1XzcnKX08L2g1PlxuICAgICAgPHA+e3QoJ3BfOCcpfTwvcD5cbiAgICAgIDxoNT57dCgnaDVfOCcpfTwvaDU+XG4gICAgICA8cD57dCgncF85Jyl9PC9wPlxuICAgICAgPHA+e3QoJ3BfMTAnKX08L3A+XG4gICAgICA8cD57dCgncF8xMScpfTwvcD5cbiAgICAgIDxoNT57dCgnaDVfOScpfTwvaDU+XG4gICAgICA8cD57dCgncF8xMicpfTwvcD5cbiAgICAgIDxwPnt0KCdwXzEzJyl9PC9wPlxuICAgICAgPHA+e3QoJ3BfMTQnKX08L3A+XG4gICAgICA8cD57dCgncF8xNScpfTwvcD5cbiAgICAgIDxoNT57dCgnaDVfMTAnKX08L2g1PlxuICAgICAgPHA+e3QoJ3BfMTYnKX08L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT57dCgnbGlfMScpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfMicpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfMycpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfNCcpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfNScpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfNicpfTwvbGk+XG4gICAgICAgIDxsaT57dCgnbGlfNycpfTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg1Pnt0KCdoNV8xMScpfTwvaDU+XG4gICAgICA8cD57dCgncF8xNycpfTwvcD5cbiAgICAgIDxwPnt0KCdwXzE4Jyl9PC9wPlxuICAgICAgPHA+e3QoJ3BfMTknKX08L3A+XG4gICAgICA8cD57dCgncF8yMCcpfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9mb250cyNBYm91dFBsYWNlOmFib3V0XCI+XG4gICAgICAgICAgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9mb250cyNBYm91dFBsYWNlOmFib3V0XG4gICAgICAgIDwvYT5cbiAgICAgICAge3QoJ3BfMjEnKX1cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcG9saWNpZXMuZ29vZ2xlLmNvbS9wcml2YWN5L3BhcnRuZXJzP2hsPWRlXCI+XG4gICAgICAgICAgaHR0cHM6Ly9wb2xpY2llcy5nb29nbGUuY29tL3ByaXZhY3kvcGFydG5lcnM/aGw9ZGVcbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuUHJvdGVjdGlvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydwcml2YWN5cG9saWN5J10sXG4gIH0pXG4gIFxuICBQcm90ZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbigncHJpdmFjeXBvbGljeScpKFByb3RlY3Rpb24pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/privacypolicy.js\n");

/***/ }),

/***/ "./styles/protection.module.sass":
/*!***************************************!*\
  !*** ./styles/protection.module.sass ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"protection\": \"protection_protection__232Rr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcHJvdGVjdGlvbi5tb2R1bGUuc2Fzcz9hZTEzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL3Byb3RlY3Rpb24ubW9kdWxlLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm90ZWN0aW9uXCI6IFwicHJvdGVjdGlvbl9wcm90ZWN0aW9uX18yMzJSclwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/protection.module.sass\n");

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