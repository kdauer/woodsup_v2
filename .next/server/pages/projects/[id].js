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

/***/ "./data/projects_de.json":
/*!*******************************!*\
  !*** ./data/projects_de.json ***!
  \*******************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"projects\\\":[{\\\"id\\\":\\\"1\\\",\\\"image\\\":\\\"../Baumpflanzungen.jpg\\\",\\\"title\\\":\\\"Seit 2018 regelmäßig einzelne Baumpflanzungen\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"2\\\",\\\"image\\\":\\\"../IMG_3023.JPG\\\",\\\"title\\\":\\\"Praktische Maßnahme zum Klimaschutz, Baumpflanzung vor dem Brandenburger Landtag in Potsdam am 21. Juni 2019\\\",\\\"content\\\":\\\"Pflanzung von drei Urweltmammutbäumen vor dem Brandenburger Landtag in Potsdam als praktische Maßnahme zum Klimaschutz\\\",\\\"video\\\":\\\"https://www.youtube.com/embed/flGM9suNzWw\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"3\\\",\\\"image\\\":\\\"../IMG_3024.JPG\\\",\\\"title\\\":\\\"Radtour mit Baumpflanzaktion in Kooperation mit XR und FFF im August 2019 in Potsdam, Brandenburg und Krielow\\\",\\\"content\\\":\\\"am 10. August 2019 Fahrradtour mit Baumpflanzaktion in Potsdam, Brandenburg und Krielow in Kooperation mit Extinction Rebellion und Fridays for Future.\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"4\\\",\\\"image\\\":\\\"../IMG_3025.JPG\\\",\\\"title\\\":\\\"Pflanzungen am Nutheufer in Saarmund im Mai 2019 \\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"5\\\",\\\"image\\\":\\\"../IMG_3014.JPG\\\",\\\"title\\\":\\\"Beteiligung bei Aufforstungsaktion des Vereins “Land und Mehr Projekt-Initiative” in Gömnigk am 14. Dezember 2019\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"6\\\",\\\"image\\\":\\\"../IMG_3021.JPG\\\",\\\"title\\\":\\\"Baumpflanzung im Projekt “Rio Mira” Portugal Februar 2020\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":[\\\"../../photos/rio_mira/photo_2019-11-24_22-42-24.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-10.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-12.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-15.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-18.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-22.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-25.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-27.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-30.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-33.jpg\\\",\\\"../../photos/rio_mira/photo_2020-02-12_13-23-35.jpg\\\"]},{\\\"id\\\":\\\"7\\\",\\\"image\\\":\\\"../IMG_3011.JPG\\\",\\\"title\\\":\\\"Island im Juni 2020: Anlage eines Klimawaldes mit 2500 Setzlingen verschiedener Baumarten\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/embed/9uYkBS9e6p4\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"8\\\",\\\"image\\\":\\\"../IMG_3733.JPG\\\",\\\"title\\\":\\\"Kagendorf im Oktober 2020: Pflanzung von 86 Bäumen (überwiegend alte Obstsorten)\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/embed/18hwpjtG9aA\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"9\\\",\\\"image\\\":\\\"../IMG_2855.JPG\\\",\\\"title\\\":\\\"Oktober 2020: Anlage eines Mischwäldchens in Wollin\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/embed/_JBaScELrFI\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvcHJvamVjdHNfZGUuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/projects_de.json\n");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const NextI18Next = __webpack_require__(/*! next-i18next */ \"next-i18next\").default;\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = new NextI18Next({\n  defaultLanguage: 'de',\n  otherLanguages: ['en', 'es'],\n  localePath: path.resolve('./public/static/locales')\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pMThuLmpzPzkzYjQiXSwibmFtZXMiOlsiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJsb2NhbGVQYXRoIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JDLE9BQTVDOztBQUNBLE1BQU1DLElBQUksR0FBR0YsbUJBQU8sQ0FBQyxrQkFBRCxDQUFwQjs7QUFFQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLElBQUlMLFdBQUosQ0FBZ0I7QUFDL0JNLGlCQUFlLEVBQUUsSUFEYztBQUUvQkMsZ0JBQWMsRUFBRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBRmU7QUFHL0JDLFlBQVUsRUFBRUwsSUFBSSxDQUFDTSxPQUFMLENBQWEseUJBQWI7QUFIbUIsQ0FBaEIsQ0FBakIiLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTmV4dEkxOE5leHQoe1xuICBkZWZhdWx0TGFuZ3VhZ2U6ICdkZScsXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2VuJywnZXMnXSxcbiAgbG9jYWxlUGF0aDogcGF0aC5yZXNvbHZlKCcuL3B1YmxpYy9zdGF0aWMvbG9jYWxlcycpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/projectdetail.module.sass */ \"./styles/projectdetail.module.sass\");\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"react-bootstrap/Carousel\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/projects_de.json */ \"./data/projects_de.json\");\nvar _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects_de.json */ \"./data/projects_de.json\", 1);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects/[id].js\";\n\n\n\n\n\n\nconst projectsList = _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6__.projects;\n\nconst Project = ({\n  t\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    pid\n  } = router.query;\n  const project = projectsList.find(el => {\n    return el.id === pid;\n  });\n  const gallery = project.gallery;\n  console.log(gallery);\n\n  if (!project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 16\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.detail_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }, undefined), project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: project.image,\n      alt: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: project.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }, undefined), project.video ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.player,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n        width: \"560\",\n        height: \"315\",\n        src: project.video,\n        frameborder: \"0\",\n        allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n        allowfullscreen: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: gallery.map(el => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"d-block w-100\",\n          src: el,\n          alt: \"slide\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }, undefined), project.presslink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: project.presslink,\n      children: \"\\\"Presse\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, undefined);\n};\n\nProject.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\nProject.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__[\"withTranslation\"])('common')(Project));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanM/ZGEwNyJdLCJuYW1lcyI6WyJwcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsIlByb2plY3QiLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJwcm9qZWN0IiwiZmluZCIsImVsIiwiaWQiLCJnYWxsZXJ5IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImRldGFpbF9jb250YWluZXIiLCJ0aXRsZSIsImltYWdlIiwiY29udGVudCIsInZpZGVvIiwicGxheWVyIiwibWFwIiwicHJlc3NsaW5rIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHQyxtREFBUSxDQUFDQSxRQUE5Qjs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBUztBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVVGLE1BQU0sQ0FBQ0csS0FBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUdSLFlBQVksQ0FBQ1MsSUFBYixDQUFrQkMsRUFBRSxJQUFJO0FBQ3hDLFdBQU9BLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVTCxHQUFqQjtBQUNELEdBRmlCLENBQWhCO0FBR0YsUUFBTU0sT0FBTyxHQUFHSixPQUFPLENBQUNJLE9BQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaOztBQUVFLE1BQUksQ0FBQ0osT0FBTCxFQUFjO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRU8sd0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS1IsT0FBTyxDQUFDUztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR1QsT0FBTyxDQUFDVSxLQUFSLGdCQUNDO0FBQUssU0FBRyxFQUFFVixPQUFPLENBQUNVLEtBQWxCO0FBQXlCLFNBQUcsRUFBRVYsT0FBTyxDQUFDUztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFPRTtBQUFBLGdCQUFJVCxPQUFPLENBQUNXO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFHWCxPQUFPLENBQUNZLEtBQVIsZ0JBQ0M7QUFBSyxlQUFTLEVBQUVMLHdFQUFNLENBQUNNLE1BQXZCO0FBQUEsNkJBQ0E7QUFBUyxhQUFLLEVBQUMsS0FBZjtBQUFxQixjQUFNLEVBQUMsS0FBNUI7QUFBa0MsV0FBRyxFQUFFYixPQUFPLENBQUNZLEtBQS9DO0FBQXNELG1CQUFXLEVBQUMsR0FBbEU7QUFBc0UsYUFBSyxFQUFDLDBGQUE1RTtBQUF1Syx1QkFBZTtBQUF0TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFLQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBZUUscUVBQUMsK0RBQUQ7QUFBQSxnQkFDQ1IsT0FBTyxDQUFDVSxHQUFSLENBQWFaLEVBQUQsaUJBQ1gscUVBQUMsK0RBQUQsQ0FBVSxJQUFWO0FBQUEsK0JBQ0E7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxhQUFHLEVBQUVBLEVBRlA7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsRUEwQkdGLE9BQU8sQ0FBQ2UsU0FBUixnQkFDQztBQUFHLFVBQUksRUFBRWYsT0FBTyxDQUFDZSxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtDTCxDQTlDRDs7QUFnREFyQixPQUFPLENBQUNzQixlQUFSLEdBQTBCLGFBQWE7QUFDckNDLG9CQUFrQixFQUFFLENBQUMsUUFBRDtBQURpQixDQUFiLENBQTFCOztBQUlBdkIsT0FBTyxDQUFDd0IsU0FBUixHQUFvQjtBQUNsQnZCLEdBQUMsRUFBRXdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQSxDQUFwQjtBQUllQyw0SEFBZSxDQUFDLFFBQUQsQ0FBZixDQUEwQjVCLE9BQTFCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2FzcydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vLi4vZGF0YS9wcm9qZWN0c19kZS5qc29uJ1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0cy5wcm9qZWN0cztcblxuY29uc3QgUHJvamVjdCA9ICh7dH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaXN0LmZpbmQoZWwgPT4ge1xuICAgIHJldHVybiBlbC5pZCA9PT0gcGlkO1xuICB9KTtcbiAgY29uc3QgZ2FsbGVyeSA9IHByb2plY3QuZ2FsbGVyeTtcbiAgY29uc29sZS5sb2coZ2FsbGVyeSlcblxuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxfY29udGFpbmVyfT5cbiAgICAgICAgICA8aDI+e3Byb2plY3QudGl0bGV9PC9oMj5cbiAgICAgICAgICB7cHJvamVjdC5pbWFnZSA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9e3Byb2plY3QudGl0bGV9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8cD57cHJvamVjdC5jb250ZW50fTwvcD5cbiAgICAgICAgICB7cHJvamVjdC52aWRlbyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfT5cbiAgICAgICAgICAgIDxpZnJhbWUgIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPXtwcm9qZWN0LnZpZGVvfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICB7Z2FsbGVyeS5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICAgICAgICAgIHNyYz17ZWx9XG4gICAgICAgICAgICAgIGFsdD1cInNsaWRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIHtwcm9qZWN0LnByZXNzbGluayA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QucHJlc3NsaW5rfT5cIlByZXNzZVwiPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xufVxuXG5Qcm9qZWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbn0pXG5cblByb2plY3QucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKFByb2plY3QpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ }),

/***/ "./styles/projectdetail.module.sass":
/*!******************************************!*\
  !*** ./styles/projectdetail.module.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail_container\": \"projectdetail_detail_container__3bp0J\",\n\t\"player\": \"projectdetail_player__1HcVx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2Fzcz8wY2I5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvcHJvamVjdGRldGFpbC5tb2R1bGUuc2Fzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbF9jb250YWluZXJcIjogXCJwcm9qZWN0ZGV0YWlsX2RldGFpbF9jb250YWluZXJfXzNicDBKXCIsXG5cdFwicGxheWVyXCI6IFwicHJvamVjdGRldGFpbF9wbGF5ZXJfXzFIY1Z4XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/projectdetail.module.sass\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-i18next\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIj9mMGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtaTE4bmV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-i18next\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap/Carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIj8wYTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap/Carousel\n");

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