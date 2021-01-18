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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "//R+":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eLNA");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Y9Oy":
/***/ (function(module) {

module.exports = JSON.parse("{\"projects\":[{\"id\":\"1\",\"image\":\"../Baumpflanzungen.jpg\",\"title\":\"Seit 2018 regelmäßig einzelne Baumpflanzungen\",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":\"\"},{\"id\":\"2\",\"image\":\"../IMG_3023.JPG\",\"title\":\"Praktische Maßnahme zum Klimaschutz, Baumpflanzung vor dem Brandenburger Landtag in Potsdam am 21. Juni 2019\",\"content\":\"Pflanzung von drei Urweltmammutbäumen vor dem Brandenburger Landtag in Potsdam als praktische Maßnahme zum Klimaschutz\",\"video\":\"\",\"presslinks\":[\"https://www.focus.de/regional/potsdam/klima-aktivisten-pflanzen-drei-mammutbaeume-neben-dem-landtag_id_10850327.html\",\"https://www.pnn.de/potsdam/klimaschutz-in-potsdam-schueler-haben-drei-mammutbaeume-am-steubenplatz-gepflanzt/24482244.html\",\"https://www.sueddeutsche.de/wissen/klima-potsdam-aktivisten-pflanzen-drei-mammutbaeume-neben-dem-landtag-dpa.urn-newsml-dpa-com-20090101-190621-99-743810\"],\"gallery\":[\"/images/landtag/giesen1.jpg\",\"/images/landtag/P1090274.JPG\"]},{\"id\":\"3\",\"image\":\"../IMG_3024.JPG\",\"title\":\"Radtour mit Baumpflanzaktion in Kooperation mit XR und FFF im August 2019 in Potsdam, Brandenburg und Krielow\",\"content\":\"am 10. August 2019 Fahrradtour mit Baumpflanzaktion in Potsdam, Brandenburg und Krielow in Kooperation mit Extinction Rebellion und Fridays for Future.\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":[\"/images/radtour/67813342_470544643525649_3099070275614932992_o.jpg\",\"/images/radtour/68343072_470510526862394_5543892864544538624_o.jpg\",\"/images/radtour/68394535_470544466859000_2028577100453117952_o.jpg\",\"/images/radtour/branne-baum.jpg\",\"/images/radtour/photo_2019-08-10_14-35-53.jpg\",\"/images/radtour/photo_2019-08-10_14-36-24.jpg\",\"/images/radtour/potsdam-baum.jpg\"]},{\"id\":\"4\",\"image\":\"../IMG_3025.JPG\",\"title\":\"Pflanzungen am Nutheufer in Saarmund im Mai 2019 \",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":\"\"},{\"id\":\"5\",\"image\":\"../IMG_3014.JPG\",\"title\":\"Beteiligung bei Aufforstungsaktion des Vereins “Land und Mehr Projekt-Initiative” in Gömnigk am 14. Dezember 2019\",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":[\"/images/goemnigk/81111649_725496244525888_5537632979775389696_o.jpg\",\"/images/goemnigk/photo_2019-12-14_20-51-32.jpg\",\"/images/goemnigk/photo_2019-12-14_20-52-23.jpg\"]},{\"id\":\"6\",\"image\":\"../IMG_3021.JPG\",\"title\":\"Baumpflanzung im Projekt “Rio Mira” Portugal Februar 2020\",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":[\"/images/rio_mira/photo_2019-11-24_22-42-24.jpg\",\"/images/rio_mira/photo_2020-02-12_13-23-12.jpg\",\"/images/rio_mira/photo_2020-02-12_13-23-33.jpg\"]},{\"id\":\"7\",\"image\":\"../IMG_3011.JPG\",\"title\":\"Island im Juni 2020: Anlage eines Klimawaldes mit 2500 Setzlingen verschiedener Baumarten\",\"content\":\"\",\"video\":\"https://www.youtube.com/embed/9uYkBS9e6p4\",\"presslinks\":[\"https://m.maz-online.de/Lokales/Potsdam/Potsdamer-Aktivisten-pflanzen-einen-Klimawald-in-Island\"],\"gallery\":\"\"},{\"id\":\"8\",\"image\":\"../IMG_3733.JPG\",\"title\":\"Kagendorf im Oktober 2020: Pflanzung von 86 Bäumen (überwiegend alte Obstsorten)\",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":\"\"},{\"id\":\"9\",\"image\":\"../IMG_2855.JPG\",\"title\":\"Oktober 2020: Anlage eines Mischwäldchens in Wollin\",\"content\":\"\",\"video\":\"\",\"presslinks\":\"\",\"gallery\":\"\"}]}");

/***/ }),

/***/ "eLNA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gdim");
/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("//R+");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_projects_de_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Y9Oy");
var _data_projects_de_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("Y9Oy", 1);







const projectsList = _data_projects_de_json__WEBPACK_IMPORTED_MODULE_5__.projects;

const Project = ({
  t
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    pid
  } = router.query;
  const project = projectsList.find(el => {
    return el.id === pid;
  });
  const images = project.gallery;
  const presslinks = project.presslinks;

  if (!project) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: "Loading"
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.detail_container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      children: project.title
    }), project.image ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: project.image,
      alt: project.title
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: project.content
    }), project.video ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.player,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("iframe", {
        width: "560",
        height: "315",
        src: project.video,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {}), images ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "carousel-custom",
      children: images.map(image => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          className: "d-block w-100",
          src: image,
          alt: "slide"
        })
      }, image))
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {}), presslinks ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
        children: "F\xFCr Presseartikel"
      }), presslinks.map(link => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: link,
          children: "hier entlang"
        })
      }))]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {})]
  });
};

Project.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('common')(Project));

/***/ }),

/***/ "gdim":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detail_container": "projectdetail_detail_container__3bp0J",
	"player": "projectdetail_player__1HcVx"
};


/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  defaultLanguage: 'de',
  otherLanguages: ['en', 'es'],
  localePath: path.resolve('./public/static/locales')
});

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });