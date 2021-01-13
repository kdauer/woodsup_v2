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

eval("module.exports = JSON.parse(\"{\\\"projects\\\":[{\\\"id\\\":\\\"1\\\",\\\"image\\\":\\\"../Baumpflanzungen.jpg\\\",\\\"title\\\":\\\"Seit 2018 regelmäßig einzelne Baumpflanzungen\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"2\\\",\\\"image\\\":\\\"../IMG_3023.JPG\\\",\\\"title\\\":\\\"Praktische Maßnahme zum Klimaschutz, Baumpflanzung vor dem Brandenburger Landtag in Potsdam am 21. Juni 2019\\\",\\\"content\\\":\\\"Pflanzung von drei Urweltmammutbäumen vor dem Brandenburger Landtag in Potsdam als praktische Maßnahme zum Klimaschutz\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":[\\\"/images/landtag/65581534_608183652923815_7877433529439617024_o.jpg\\\",\\\"/images/landtag/giesen1.jpg\\\",\\\"/images/landtag/P1090274.JPG\\\",\\\"/images/landtag/photo_2019-12-05_16-29-06.jpg\\\"]},{\\\"id\\\":\\\"3\\\",\\\"image\\\":\\\"../IMG_3024.JPG\\\",\\\"title\\\":\\\"Radtour mit Baumpflanzaktion in Kooperation mit XR und FFF im August 2019 in Potsdam, Brandenburg und Krielow\\\",\\\"content\\\":\\\"am 10. August 2019 Fahrradtour mit Baumpflanzaktion in Potsdam, Brandenburg und Krielow in Kooperation mit Extinction Rebellion und Fridays for Future.\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":[\\\"/images/radtour/67729604_470569076856539_1839801352079802368_o.jpg\\\",\\\"/images/radtour/67733309_470510456862401_787566340591321088_o.jpg\\\",\\\"/images/radtour/67813333_470510566862390_8958298311886897152_o.jpg\\\",\\\"/images/radtour/67813342_470544643525649_3099070275614932992_o.jpg\\\",\\\"/images/radtour/67870918_470568926856554_940298212315496448_o.jpg\\\",\\\"/images/radtour/68244356_470510986862348_8926376478560485376_o.jpg\\\",\\\"/images/radtour/68262211_471529156760531_7901093898682892288_o.jpg\\\",\\\"/images/radtour/68284271_470511260195654_7144875046916325376_o.jpg\\\",\\\"/images/radtour/68343072_470510526862394_5543892864544538624_o.jpg\\\",\\\"/images/radtour/68394535_470544466859000_2028577100453117952_o.jpg\\\",\\\"/images/radtour/68752594_470511526862294_3838969750600286208_o.jpg\\\",\\\"/images/radtour/branne-baum.jpg\\\",\\\"/images/radtour/photo_2019-08-10_14-35-53.jpg\\\",\\\"/images/radtour/photo_2019-08-10_14-36-24.jpg\\\",\\\"/images/radtour/potsdam-baum.jpg\\\"]},{\\\"id\\\":\\\"4\\\",\\\"image\\\":\\\"../IMG_3025.JPG\\\",\\\"title\\\":\\\"Pflanzungen am Nutheufer in Saarmund im Mai 2019 \\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"5\\\",\\\"image\\\":\\\"../IMG_3014.JPG\\\",\\\"title\\\":\\\"Beteiligung bei Aufforstungsaktion des Vereins “Land und Mehr Projekt-Initiative” in Gömnigk am 14. Dezember 2019\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":[\\\"/images/goemnigk/81111649_725496244525888_5537632979775389696_o.jpg\\\",\\\"/images/goemnigk/photo_2019-12-14_20-51-32.jpg\\\",\\\"/images/goemnigk/photo_2019-12-14_20-51-54.jpg\\\",\\\"/images/goemnigk/photo_2019-12-14_20-52-03.jpg\\\",\\\"/images/goemnigk/photo_2019-12-14_20-52-23.jpg\\\"]},{\\\"id\\\":\\\"6\\\",\\\"image\\\":\\\"../IMG_3021.JPG\\\",\\\"title\\\":\\\"Baumpflanzung im Projekt “Rio Mira” Portugal Februar 2020\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":[\\\"/images/rio_mira/photo_2019-11-24_22-42-24.jpg\\\",\\\"/images/rio_mira/photo_2020-02-12_13-23-12.jpg\\\",\\\"/images/rio_mira/photo_2020-02-12_13-23-18.jpg\\\",\\\"/images/rio_mira/photo_2020-02-12_13-23-22.jpg\\\"]},{\\\"id\\\":\\\"7\\\",\\\"image\\\":\\\"../IMG_3011.JPG\\\",\\\"title\\\":\\\"Island im Juni 2020: Anlage eines Klimawaldes mit 2500 Setzlingen verschiedener Baumarten\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"https://www.youtube.com/embed/9uYkBS9e6p4\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"8\\\",\\\"image\\\":\\\"../IMG_3733.JPG\\\",\\\"title\\\":\\\"Kagendorf im Oktober 2020: Pflanzung von 86 Bäumen (überwiegend alte Obstsorten)\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"},{\\\"id\\\":\\\"9\\\",\\\"image\\\":\\\"../IMG_2855.JPG\\\",\\\"title\\\":\\\"Oktober 2020: Anlage eines Mischwäldchens in Wollin\\\",\\\"content\\\":\\\"\\\",\\\"video\\\":\\\"\\\",\\\"presslinks\\\":\\\"\\\",\\\"gallery\\\":\\\"\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvcHJvamVjdHNfZGUuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/projects_de.json\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/projectdetail.module.sass */ \"./styles/projectdetail.module.sass\");\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"react-bootstrap/Carousel\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/projects_de.json */ \"./data/projects_de.json\");\nvar _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects_de.json */ \"./data/projects_de.json\", 1);\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects/[id].js\";\n\n\n\n\n\n\nconst projectsList = _data_projects_de_json__WEBPACK_IMPORTED_MODULE_6__.projects;\n\nconst Project = ({\n  t\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    pid\n  } = router.query;\n  const project = projectsList.find(el => {\n    return el.id === pid;\n  });\n  const images = project.gallery;\n\n  if (!project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 16\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.detail_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }, undefined), project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: project.image,\n      alt: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: project.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }, undefined), project.video ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_4___default.a.player,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n        width: \"560\",\n        height: \"315\",\n        src: project.video,\n        frameborder: \"0\",\n        allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n        allowfullscreen: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined), images ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      className: \"carousel-custom\",\n      children: images.map(image => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"d-block w-100\",\n          src: image,\n          alt: \"slide\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, undefined)\n      }, image, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 27\n    }, undefined), project.presslink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: project.presslink,\n      children: \"\\\"Presse\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, undefined);\n};\n\nProject.getInitialProps = async () => ({\n  namespacesRequired: ['common']\n});\n\nProject.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__[\"withTranslation\"])('common')(Project));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy8uanM/ZGEwNyJdLCJuYW1lcyI6WyJwcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsIlByb2plY3QiLCJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJwcm9qZWN0IiwiZmluZCIsImVsIiwiaWQiLCJpbWFnZXMiLCJnYWxsZXJ5Iiwic3R5bGVzIiwiZGV0YWlsX2NvbnRhaW5lciIsInRpdGxlIiwiaW1hZ2UiLCJjb250ZW50IiwidmlkZW8iLCJwbGF5ZXIiLCJtYXAiLCJwcmVzc2xpbmsiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIndpdGhUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxZQUFZLEdBQUdDLG1EQUFRLENBQUNBLFFBQTlCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFTO0FBQ3JCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBVUYsTUFBTSxDQUFDRyxLQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBR1IsWUFBWSxDQUFDUyxJQUFiLENBQWtCQyxFQUFFLElBQUk7QUFDeEMsV0FBT0EsRUFBRSxDQUFDQyxFQUFILEtBQVVMLEdBQWpCO0FBQ0QsR0FGaUIsQ0FBaEI7QUFJSixRQUFNTSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0ssT0FBdkI7O0FBQ0ksTUFBSSxDQUFDTCxPQUFMLEVBQWM7QUFDVix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFTSx3RUFBTSxDQUFDQyxnQkFBdkI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLUCxPQUFPLENBQUNRO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHUixPQUFPLENBQUNTLEtBQVIsZ0JBQ0M7QUFBSyxTQUFHLEVBQUVULE9BQU8sQ0FBQ1MsS0FBbEI7QUFBeUIsU0FBRyxFQUFFVCxPQUFPLENBQUNRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU9FO0FBQUEsZ0JBQUlSLE9BQU8sQ0FBQ1U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLEVBUUdWLE9BQU8sQ0FBQ1csS0FBUixnQkFDQztBQUFLLGVBQVMsRUFBRUwsd0VBQU0sQ0FBQ00sTUFBdkI7QUFBQSw2QkFDQTtBQUFTLGFBQUssRUFBQyxLQUFmO0FBQXFCLGNBQU0sRUFBQyxLQUE1QjtBQUFrQyxXQUFHLEVBQUVaLE9BQU8sQ0FBQ1csS0FBL0M7QUFBc0QsbUJBQVcsRUFBQyxHQUFsRTtBQUFzRSxhQUFLLEVBQUMsMEZBQTVFO0FBQXVLLHVCQUFlO0FBQXRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosRUFlR1AsTUFBTSxnQkFDUCxxRUFBQywrREFBRDtBQUFVLGVBQVMsRUFBQyxpQkFBcEI7QUFBQSxnQkFDQ0EsTUFBTSxDQUFDUyxHQUFQLENBQVlKLEtBQUQsaUJBQ1YscUVBQUMsK0RBQUQsQ0FBVSxJQUFWO0FBQUEsK0JBQ0E7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxhQUFHLEVBQUVBLEtBRlA7QUFHRSxhQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsU0FBb0JBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPLGdCQVdTO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJsQixFQTJCR1QsT0FBTyxDQUFDYyxTQUFSLGdCQUNDO0FBQUcsVUFBSSxFQUFFZCxPQUFPLENBQUNjLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUNMLENBOUNEOztBQWdEQXBCLE9BQU8sQ0FBQ3FCLGVBQVIsR0FBMEIsYUFBYTtBQUNyQ0Msb0JBQWtCLEVBQUUsQ0FBQyxRQUFEO0FBRGlCLENBQWIsQ0FBMUI7O0FBSUF0QixPQUFPLENBQUN1QixTQUFSLEdBQW9CO0FBQ2xCdEIsR0FBQyxFQUFFdUIsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURBLENBQXBCO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCM0IsT0FBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wcm9qZWN0ZGV0YWlsLm1vZHVsZS5zYXNzJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi8uLi9kYXRhL3Byb2plY3RzX2RlLmpzb24nXG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IHByb2plY3RzLnByb2plY3RzO1xuXG5jb25zdCBQcm9qZWN0ID0gKHt0fSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c0xpc3QuZmluZChlbCA9PiB7XG4gICAgcmV0dXJuIGVsLmlkID09PSBwaWQ7XG4gIH0pO1xuXG5jb25zdCBpbWFnZXMgPSBwcm9qZWN0LmdhbGxlcnk7XG4gICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9jb250YWluZXJ9PlxuICAgICAgICAgIDxoMj57cHJvamVjdC50aXRsZX08L2gyPlxuICAgICAgICAgIHtwcm9qZWN0LmltYWdlID8gKFxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD17cHJvamVjdC50aXRsZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxwPntwcm9qZWN0LmNvbnRlbnR9PC9wPlxuICAgICAgICAgIHtwcm9qZWN0LnZpZGVvID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxuICAgICAgICAgICAgPGlmcmFtZSAgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9e3Byb2plY3QudmlkZW99IGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ltYWdlcyA/IChcbiAgICAgICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY3VzdG9tXCI+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltYWdlfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgIGFsdD1cInNsaWRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPik6KDxkaXY+PC9kaXY+KX1cbiAgICAgICAgICB7cHJvamVjdC5wcmVzc2xpbmsgPyAoXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnByZXNzbGlua30+XCJQcmVzc2VcIjwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn1cblxuUHJvamVjdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXG59KVxuXG5Qcm9qZWN0LnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdjb21tb24nKShQcm9qZWN0KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

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