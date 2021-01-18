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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "Ckvx":
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__("Ckvx");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);

// EXTERNAL MODULE: ./styles/home.module.sass
var home_module = __webpack_require__("vuaJ");
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);

// EXTERNAL MODULE: ./styles/news.module.sass
var news_module = __webpack_require__("m+1d");
var news_module_default = /*#__PURE__*/__webpack_require__.n(news_module);

// CONCATENATED MODULE: ./components/news.js





const News = ({
  t
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: news_module_default.a.news_container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: t("h2")
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: t("topic_1")
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/IMG_2869.JPG",
      alt: "Island"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
      children: t("topic_2")
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "/IMG_2870.JPG",
      alt: "Brandenburg"
    })]
  });
};

News.getInitialProps = async () => ({
  namespacesRequired: ['news']
});

/* harmony default export */ var news = (Object(i18n["withTranslation"])('news')(News));
// CONCATENATED MODULE: ./pages/index.js








const Homepage = ({
  t
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: home_module_default.a.welcome,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(news, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_cookie_consent_default.a, {
      location: "bottom",
      buttonText: t('cookieButton'),
      cookieName: "myAwesomeCookieName2",
      style: {
        background: '#2B373B'
      },
      buttonStyle: {
        color: '#4e503b',
        fontSize: '13px'
      },
      expires: 150,
      children: t('cookieText')
    })]
  })
});

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(i18n["withTranslation"])('common')(Homepage));

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

/***/ "m+1d":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"news_container": "news_news_container__1W9sj"
};


/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "vuaJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"welcome": "home_welcome__2VjfR"
};


/***/ })

/******/ });