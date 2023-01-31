/* eslint-disable camelcase */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => { // webpackBootstrap
/** *** */

  // eslint-disable-next-line no-tabs, camelcase, no-underscore-dangle
  /** *** */ 	const __webpack_modules__ = ({

    /***/ './app.js':
    /*! ****************!*\
  !*** ./app.js ***!
  \*************** */
    // eslint-disable-next-line camelcase, no-unused-vars, no-shadow
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // eslint-disable-next-line no-eval
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "a": () => (/* binding */ a),\n/* harmony export */   "b": () => (/* binding */ b),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nvar a = 1;\nvar b = 2;\nvar Animal = /*#__PURE__*/function () {\n  function Animal(type) {\n    _classCallCheck(this, Animal);\n    this.type = type;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  _createClass(Animal, [{\n    key: "displayType",\n    value: function displayType() {\n      // eslint-disable-next-line no-undef\n      console.log(type);\n    }\n  }]);\n  return Animal;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);\n\n//# sourceURL=webpack://yagneshsir-react/./app.js?');
      /***/ }),

    /***/ './index.js':
    /*! ******************!*\
  !*** ./index.js ***!
  \***************** */
    // eslint-disable-next-line camelcase, no-unused-vars, no-shadow
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // eslint-disable-next-line no-eval
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");\n\n\n// eslint-disable-next-line new-cap\nvar t = new _app__WEBPACK_IMPORTED_MODULE_0__["default"]();\nt.displayType();\nfunction add(x, y) {\n  return x + y;\n}\nconsole.log(add(_app__WEBPACK_IMPORTED_MODULE_0__.a, _app__WEBPACK_IMPORTED_MODULE_0__.b));\n\n//# sourceURL=webpack://yagneshsir-react/./index.js?');
      /***/ }),

    // eslint-disable-next-line no-tabs
    /** *** */ 	});
  /** ********************************************************************* */
  // eslint-disable-next-line no-tabs
  /** *** */ 	// The module cache
  // eslint-disable-next-line no-tabs, camelcase, no-underscore-dangle
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  // eslint-disable-next-line no-tabs
  /** *** */ 	// The require function
  // eslint-disable-next-line no-tabs, no-underscore-dangle
  /** *** */ 	function __webpack_require__(moduleId) {
    // eslint-disable-next-line no-tabs
    /** *** */ 		// Check if module is in cache
    // eslint-disable-next-line no-tabs, camelcase
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    // eslint-disable-next-line no-tabs
    /** *** */ 		if (cachedModule !== undefined) {
      // eslint-disable-next-line no-tabs
      /** *** */ 			return cachedModule.exports;
      // eslint-disable-next-line no-tabs
      /** *** */ 		}
    // eslint-disable-next-line no-tabs
    /** *** */ 		// Create a new module (and put it into the cache)
    // eslint-disable-next-line no-multi-assign, camelcase, no-tabs
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      // eslint-disable-next-line no-tabs
      /** *** */ 			// no module.id needed
      // eslint-disable-next-line no-tabs
      /** *** */ 			// no module.loaded needed
      // eslint-disable-next-line no-tabs
      /** *** */ 			exports: {},
      // eslint-disable-next-line no-tabs
      /** *** */ 		};
    /** *** */
    // eslint-disable-next-line no-tabs
    /** *** */ 		// Execute the module function
    // eslint-disable-next-line no-tabs, camelcase
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    // eslint-disable-next-line no-tabs
    /** *** */ 		// Return the exports of the module
    // eslint-disable-next-line no-tabs
    /** *** */ 		return module.exports;
    // eslint-disable-next-line no-tabs
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  // eslint-disable-next-line no-tabs
  /** *** */ 	/* webpack/runtime/define property getters */
  // eslint-disable-next-line no-tabs
  /** *** */ 	(() => {
    // eslint-disable-next-line no-tabs
    /** *** */ 		// define getter functions for harmony exports
    // eslint-disable-next-line no-tabs, camelcase
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      // eslint-disable-next-line no-restricted-syntax, no-tabs
      /** *** */ 			for (const key in definition) {
        // eslint-disable-next-line max-len, camelcase, no-tabs
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          // eslint-disable-next-line max-len, no-tabs
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          // eslint-disable-next-line no-tabs
          /** *** */ 				}
        // eslint-disable-next-line no-tabs
        /** *** */ 			}
      // eslint-disable-next-line no-tabs
      /** *** */ 		};
    // eslint-disable-next-line no-tabs
    /** *** */ 	})();
  /** *** */
  // eslint-disable-next-line no-tabs
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  // eslint-disable-next-line no-tabs
  /** *** */ 	(() => {
    // eslint-disable-next-line no-tabs, max-len, camelcase
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    // eslint-disable-next-line no-tabs
    /** *** */ 	})();
  /** *** */
  // eslint-disable-next-line no-tabs
  /** *** */ 	/* webpack/runtime/make namespace object */
  // eslint-disable-next-line no-tabs
  /** *** */ 	(() => {
    // eslint-disable-next-line no-tabs
    /** *** */ 		// define __esModule on exports
    // eslint-disable-next-line no-tabs
    /** *** */ 		__webpack_require__.r = (exports) => {
      // eslint-disable-next-line no-tabs
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // eslint-disable-next-line no-tabs
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        // eslint-disable-next-line no-tabs
        /** *** */ 			}
      // eslint-disable-next-line no-tabs
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      // eslint-disable-next-line no-tabs
      /** *** */ 		};
    // eslint-disable-next-line no-tabs
    /** *** */ 	})();
/** *** */
/** *** */ })();
