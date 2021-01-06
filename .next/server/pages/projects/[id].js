module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/projects.json":
/*!****************************!*\
  !*** ./data/projects.json ***!
  \****************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"projects\\\":[{\\\"id\\\":\\\"1\\\",\\\"image\\\":\\\"../Baumpflanzungen.jpg\\\",\\\"title\\\":\\\"Seit 2018 regelmäßig einzelne Baumpflanzungen\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"2\\\",\\\"image\\\":\\\"../IMG_3023.JPG\\\",\\\"title\\\":\\\"Praktische Maßnahme zum Klimaschutz, Baumpflanzung vor dem Brandenburger Landtag in Potsdam am 21. Juni 2019\\\",\\\"content\\\":\\\"Pflanzung von drei Urweltmammutbäumen vor dem Brandenburger Landtag in Potsdam als praktische Maßnahme zum Klimaschutz\\\",\\\"video\\\":\\\"https://www.youtube.com/watch?v=flGM9suNzWw\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"3\\\",\\\"image\\\":\\\"../IMG_3024.JPG\\\",\\\"title\\\":\\\"Radtour mit Baumpflanzaktion in Kooperation mit XR und FFF im August 2019 in Potsdam, Brandenburg und Krielow\\\",\\\"content\\\":\\\"am 10. August 2019 Fahrradtour mit Baumpflanzaktion in Potsdam, Brandenburg und Krielow in Kooperation mit Extinction Rebellion und Fridays for Future.\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"4\\\",\\\"image\\\":\\\"../IMG_3025.JPG\\\",\\\"title\\\":\\\"Pflanzungen am Nutheufer in Saarmund im Mai 2019 \\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"5\\\",\\\"image\\\":\\\"../IMG_3014.JPG\\\",\\\"title\\\":\\\"Beteiligung bei Aufforstungsaktion des Vereins “Land und Mehr Projekt-Initiative” in Gömnigk am 14. Dezember 2019\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"6\\\",\\\"image\\\":\\\"../IMG_3021.JPG\\\",\\\"title\\\":\\\"Baumpflanzung im Projekt “Rio Mira” Portugal Februar 2020\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"7\\\",\\\"image\\\":\\\"../IMG_3011.JPG\\\",\\\"title\\\":\\\"Island im Juni 2020: Anlage eines Klimawaldes mit 2500 Setzlingen verschiedener Baumarten\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/watch?v=9uYkBS9e6p4\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"8\\\",\\\"image\\\":\\\"../IMG_3733.JPG\\\",\\\"title\\\":\\\"Kagendorf im Oktober 2020: Pflanzung von 86 Bäumen (überwiegend alte Obstsorten)\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/watch?v=18hwpjtG9aA\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"9\\\",\\\"image\\\":\\\"../IMG_2855.JPG\\\",\\\"title\\\":\\\"Oktober 2020: Anlage eines Mischwäldchens in Wollin\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/watch?v=_JBaScELrFI\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvcHJvamVjdHMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/projects.json\n");

/***/ }),

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/projectdetail.module.sass */ \"./styles/projectdetail.module.sass\");\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects.json */ \"./data/projects.json\");\nvar _data_projects_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects.json */ \"./data/projects.json\", 1);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects/[id].js\";\n\n\n\nconst projectsList = _data_projects_json__WEBPACK_IMPORTED_MODULE_3__.projects;\n\nconst Project = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    pid\n  } = router.query;\n  console.log(\"pid\", pid); // const { params } = projectsList.match;\n\n  const project = projectsList.find(el => {\n    return el.id === pid;\n  });\n\n  if (!project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 16\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.detail_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }, undefined), project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: project.image,\n      alt: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: project.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }, undefined), project.video ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.video_container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n        className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.player,\n        url: project.video,\n        width: \"100%\",\n        height: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined), project.presslink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: project.presslink,\n      children: \"\\\"Presse\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanM/ZGEwNyJdLCJuYW1lcyI6WyJwcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsIlByb2plY3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0IiwiZmluZCIsImVsIiwiaWQiLCJzdHlsZXMiLCJkZXRhaWxfY29udGFpbmVyIiwidGl0bGUiLCJpbWFnZSIsImNvbnRlbnQiLCJ2aWRlbyIsInZpZGVvX2NvbnRhaW5lciIsInBsYXllciIsInByZXNzbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLGdEQUFRLENBQUNBLFFBQTlCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVUYsTUFBTSxDQUFDRyxLQUF2QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQWtCSCxHQUFsQixFQUhrQixDQUtsQjs7QUFDQSxRQUFNSSxPQUFPLEdBQUdULFlBQVksQ0FBQ1UsSUFBYixDQUFrQkMsRUFBRSxJQUFJO0FBQ3hDLFdBQU9BLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVUCxHQUFqQjtBQUNELEdBRmlCLENBQWhCOztBQUlBLE1BQUksQ0FBQ0ksT0FBTCxFQUFjO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUksd0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0wsT0FBTyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR04sT0FBTyxDQUFDTyxLQUFSLGdCQUNDO0FBQUssU0FBRyxFQUFFUCxPQUFPLENBQUNPLEtBQWxCO0FBQXlCLFNBQUcsRUFBRVAsT0FBTyxDQUFDTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFPRTtBQUFBLGdCQUFJTixPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFHUixPQUFPLENBQUNTLEtBQVIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUVMLHdFQUFNLENBQUNNLGVBQXZCO0FBQUEsNkJBQ0E7QUFBTyxpQkFBUyxFQUFFTix3RUFBTSxDQUFDTyxNQUF6QjtBQUNMLFdBQUcsRUFBRVgsT0FBTyxDQUFDUyxLQURSO0FBQ2UsYUFBSyxFQUFDLE1BRHJCO0FBRU4sY0FBTSxFQUFDO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZ0JBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixFQWdCR1QsT0FBTyxDQUFDWSxTQUFSLGdCQUNDO0FBQUcsVUFBSSxFQUFFWixPQUFPLENBQUNZLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBd0JMLENBckNEOztBQXNDZW5CLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2FzcydcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi8uLi9kYXRhL3Byb2plY3RzLmpzb24nXG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IHByb2plY3RzLnByb2plY3RzO1xuXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnNvbGUubG9nKFwicGlkXCIscGlkKVxuXG4gICAgLy8gY29uc3QgeyBwYXJhbXMgfSA9IHByb2plY3RzTGlzdC5tYXRjaDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQoZWwgPT4ge1xuICAgIHJldHVybiBlbC5pZCA9PT0gcGlkO1xuICB9KTtcblxuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfY29udGFpbmVyfT5cbiAgICAgICAgICA8aDI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICB7cHJvamVjdC5pbWFnZSA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9e3Byb2plY3QudGl0bGV9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cD57cHJvamVjdC5jb250ZW50fTwvcD5cbiAgICAgICAgICB7cHJvamVjdC52aWRlbyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9XG4gICAgICAgdXJsPXtwcm9qZWN0LnZpZGVvfSB3aWR0aD0nMTAwJSdcbiAgICAgIGhlaWdodD0nMTAwJScgLz48L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwcm9qZWN0LnByZXNzbGluayA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QucHJlc3NsaW5rfT5cIlByZXNzZVwiPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ }),

/***/ "./styles/projectdetail.module.sass":
/*!******************************************!*\
  !*** ./styles/projectdetail.module.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail_container\": \"projectdetail_detail_container__3bp0J\",\n\t\"video_container\": \"projectdetail_video_container__3buZG\",\n\t\"player\": \"projectdetail_player__1HcVx\",\n\t\"projectImg\": \"projectdetail_projectImg__11MnV\",\n\t\"detail-container\": \"projectdetail_detail-container__3uwK5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2Fzcz8wY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2Fzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbF9jb250YWluZXJcIjogXCJwcm9qZWN0ZGV0YWlsX2RldGFpbF9jb250YWluZXJfXzNicDBKXCIsXG5cdFwidmlkZW9fY29udGFpbmVyXCI6IFwicHJvamVjdGRldGFpbF92aWRlb19jb250YWluZXJfXzNidVpHXCIsXG5cdFwicGxheWVyXCI6IFwicHJvamVjdGRldGFpbF9wbGF5ZXJfXzFIY1Z4XCIsXG5cdFwicHJvamVjdEltZ1wiOiBcInByb2plY3RkZXRhaWxfcHJvamVjdEltZ19fMTFNblZcIixcblx0XCJkZXRhaWwtY29udGFpbmVyXCI6IFwicHJvamVjdGRldGFpbF9kZXRhaWwtY29udGFpbmVyX18zdXdLNVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/projectdetail.module.sass\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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