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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/links.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/links.json":
/*!*************************!*\
  !*** ./data/links.json ***!
  \*************************/
/*! exports provided: links, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"links\\\":[{\\\"id\\\":\\\"1\\\",\\\"href\\\":\\\"https://ethz.ch/de/news-und-veranstaltungen/eth-news/news/2019/07/wie-baeume-das-klima-retten-koennten.html\\\",\\\"title\\\":\\\"Wie Bäume helfen könnten, das Klima zu retten\\\"},{\\\"id\\\":\\\"2\\\",\\\"href\\\":\\\"https://www.freitag.de/autoren/der-freitag/der-planet-schlaegt-zurueck?fbclid=IwAR1EvFlBD_ilv21F_GnXVnaK5mqHBEjBDNKLEa_QbZa6iqyUlC8--NSYvnY\\\",\\\"title\\\":\\\"Der Planet schlägt zurück\\\"},{\\\"id\\\":\\\"3\\\",\\\"href\\\":\\\"https://www.nzz.ch/wissenschaft/was-waelder-zum-klimaschutz-beitragen-koennen-ld.1402068?fbclid=IwAR3s-AQUOMfrybcWJ-hAh25rfPst33Ld1lzYhSUPQppfP4wH7XH9GE5pHN4\\\",\\\"title\\\":\\\"Wälder können einen riesigen Beitrag zum Klimaschutz leisten\\\"},{\\\"id\\\":\\\"4\\\",\\\"href\\\":\\\"https://www.nytimes.com/interactive/2017/10/20/climate/iceland-trees-reforestation.html?fbclid=IwAR2Qh2wNo9p-H27bjOaJXLbgQc4IDPoDWF_ZzxH6za7bevF4Yo5oGjk7fOk\\\",\\\"title\\\":\\\"Vikings Razed the Forests. Can Iceland Regrow Them?\\\"},{\\\"id\\\":\\\"5\\\",\\\"href\\\":\\\"https://www.skogur.is/en/forestry/forestry-in-a-treeless-land/forestry-and-climate-change?fbclid=IwAR1D6jLuX8fpq7YxqRiuxIkNlgQ0WZ0DORXN9XCDnx1ASp42P8T71xcuQ0c\\\",\\\"title\\\":\\\"Forestry and Climate Change\\\"},{\\\"id\\\":\\\"6\\\",\\\"href\\\":\\\"https://www.tagesschau.de/ausland/klimawandel-aufforstung-eth-101.html?fbclid=IwAR3r_R_k-h3g4A2N1Eky-1CJSAPa4yEHN7C5ZxOv7CqZRKDENuTusbUyGo8\\\",\\\"title\\\":\\\"Aufforstung wäre effektivster Klimaschutz\\\"},{\\\"id\\\":\\\"7\\\",\\\"href\\\":\\\"https://www.thinkinghumanity.com/2019/07/for-the-first-time-ever-scientists-can-tell-where-and-how-many-trees-should-be-planted-to-stop-climate-crisis.html?fbclid=IwAR1uVOCV-YQobY2akoI_jSTSgqZUEox4ygoGGOEBaQMVS-T4NROBx-8xVmk\\\",\\\"title\\\":\\\" For The First Time Ever, Scientists Can Tell Where And How Many Trees Should Be Planted To Stop Climate Crisis\\\"},{\\\"id\\\":\\\"8\\\",\\\"href\\\":\\\"https://www.youtube.com/watch?v=pnRNdbqXu1I&fbclid=IwAR1jzXILfwlt0WZeUKD_Ip8Wx3hA5y1joy_4wat7TlV82cGFIDDbLkYREdo\\\",\\\"title\\\":\\\"Iceland Is Growing New Forests for the First Time in 1,000 Years\\\"},{\\\"id\\\":\\\"9\\\",\\\"href\\\":\\\"https://www.spiegel.de/wissenschaft/natur/klimaschutz-unzureichend-forscher-warnen-vor-weltweitem-klimanotstand-a-1294979.html?fbclid=IwAR1soHHad347RLSzFR49SDC3BFtEpFPl6Ix9zXjtvhbZF0sMZwCEyVCDtBs\\\",\\\"title\\\":\\\"11.000 Wissenschaftler warnen vor weltweitem Klimanotstand\\\"},{\\\"id\\\":\\\"10\\\",\\\"href\\\":\\\"https://www.ecowatch.com/climate-change-planting-trees-2639092782.html?rebelltitem=1#rebelltitem1\\\",\\\"title\\\":\\\"Planting Billions of Trees Is the 'Best Climate Change Solution Available Today,' Study Finds\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvbGlua3MuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/links.json\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  defaultLanguage: 'de',\n  otherLanguages: ['en', 'es'],\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU1DLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlMLFdBQUosQ0FBZ0I7QUFDL0JNLGlCQUFlLEVBQUUsSUFEYztBQUUvQkMsZ0JBQWMsRUFBRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBRmU7QUFHL0JDLFlBQVUsRUFBRUwsSUFBSSxDQUFDTSxPQUFMLENBQWEseUJBQWI7QUFIbUIsQ0FBaEIsQ0FBakIiLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBkZWZhdWx0TGFuZ3VhZ2U6ICdkZScsXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJywnZXMnXSxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/links.js":
/*!************************!*\
  !*** ./pages/links.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/links.module.sass */ \"./styles/links.module.sass\");\n/* harmony import */ var _styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/links.json */ \"./data/links.json\");\nvar _data_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/links.json */ \"./data/links.json\", 1);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/links.js\";\n\n\n\n\nconst linklist = _data_links_json__WEBPACK_IMPORTED_MODULE_4__.links;\n\nconst Motivation = ({\n  t\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.home,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.space,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_links_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.motivation,\n        children: linklist.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: link.href,\n            children: link.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 27\n          }, undefined)\n        }, link.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 9\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\nMotivation.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\nMotivation.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__[\"withTranslation\"])('common')(Motivation));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9saW5rcy5qcz9lOTk4Il0sIm5hbWVzIjpbImxpbmtsaXN0IiwibGlua3MiLCJNb3RpdmF0aW9uIiwidCIsInN0eWxlcyIsImhvbWUiLCJzcGFjZSIsIm1vdGl2YXRpb24iLCJtYXAiLCJsaW5rIiwiaHJlZiIsInRpdGxlIiwiaWQiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsUUFBUSxHQUFHQyw2Q0FBSyxDQUFDQSxLQUF2Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBUztBQUN4QixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsSUFBdkI7QUFBQSwyQkFDQTtBQUFLLGVBQVMsRUFBRUQsZ0VBQU0sQ0FBQ0UsS0FBdkI7QUFBQSw2QkFDQTtBQUFJLGlCQUFTLEVBQUVGLGdFQUFNLENBQUNHLFVBQXRCO0FBQUEsa0JBQ0NQLFFBQVEsQ0FBQ1EsR0FBVCxDQUFjQyxJQUFELGlCQUNkO0FBQUEsaUNBQWtCO0FBQUcsZ0JBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUFkO0FBQUEsc0JBQXFCRCxJQUFJLENBQUNFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEIsV0FBU0YsSUFBSSxDQUFDRyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREM7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVdILENBWkQ7O0FBY0FWLFVBQVUsQ0FBQ1csZUFBWCxHQUE2QixhQUFhO0FBQ3RDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQ7QUFEa0IsQ0FBYixDQUE3Qjs7QUFJRVosVUFBVSxDQUFDYSxTQUFYLEdBQXVCO0FBQ3JCWixHQUFDLEVBQUVhLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFERyxDQUF2QjtBQUlhQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQmpCLFVBQTFCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9saW5rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2kxOG4nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9saW5rcy5tb2R1bGUuc2FzcydcbmltcG9ydCBsaW5rcyBmcm9tICcuLi9kYXRhL2xpbmtzLmpzb24nXG5cbmNvbnN0IGxpbmtsaXN0ID0gbGlua3MubGlua3M7XG5cbmNvbnN0IE1vdGl2YXRpb24gPSAoe3R9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFjZX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5tb3RpdmF0aW9ufT5cbiAgICAgICAge2xpbmtsaXN0Lm1hcCgobGluaykgPT4gKFxuICAgICAgICA8bGkga2V5PXtsaW5rLmlkfT48YSBocmVmPXtsaW5rLmhyZWZ9PntsaW5rLnRpdGxlfTwvYT48L2xpPlxuICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuTW90aXZhdGlvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICAgIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbiAgfSlcbiAgXG4gIE1vdGl2YXRpb24ucHJvcFR5cGVzID0ge1xuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShNb3RpdmF0aW9uKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/links.js\n");

/***/ }),

/***/ "./styles/links.module.sass":
/*!**********************************!*\
  !*** ./styles/links.module.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"home\": \"links_home__37tKw\",\n\t\"space\": \"links_space__9MxxM\",\n\t\"motivation\": \"links_motivation__1uYO-\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvbGlua3MubW9kdWxlLnNhc3M/ZWRlZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvbGlua3MubW9kdWxlLnNhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lXCI6IFwibGlua3NfaG9tZV9fMzd0S3dcIixcblx0XCJzcGFjZVwiOiBcImxpbmtzX3NwYWNlX185TXh4TVwiLFxuXHRcIm1vdGl2YXRpb25cIjogXCJsaW5rc19tb3RpdmF0aW9uX18xdVlPLVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/links.module.sass\n");

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