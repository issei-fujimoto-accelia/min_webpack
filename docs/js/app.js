/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module1.js */ \"./js/modules/module1.js\");\n\n\nconst registerSW = () => {\n    if ('serviceWorker' in navigator) {\n\twindow.addEventListener('load', () => {\n\t    const p = \"/min_webpack/sw.js\"\n\t    //const p = \"/js/sw.js\"\n\t    navigator.serviceWorker.register(p)\n\t\t.then((r) => {\n\t\t    console.log(\"success\", r)\n\t\t})\n\t\t.catch((e) => {\n\t\t    console.log(\"error\", e)\n\t\t})\t    \n\t});\n    } else {\n\tconsole.log(\"not support..\")\n    }\n}\n\nregisterSW()\n\n\nconst initSW = () => {\n    navigator.serviceWorker?.ready\n\t.then((r) => {\n\t    console.log(\"ready\", r)\n\t    if(requestPermission()) {\n\t\tpopup()\n\t    }\n\t})\n}\n\n\n\nconst setOnClick = () => {\n    const btn = document.getElementById(\"button\")\n    console.log(btn);\n    btn.addEventListener(\"click\", () => {\n\tconst n = new Notification(\n\t    'タイトル',\n\t    {\t    \n\t\tbody: '本文です',\n\t\ttag: 'tag',\n\t\tdata: {\n\t\t    xxx: 'データ'\n\t\t}\n\t    }\t    \n\t);\n    })   \n}\n\n\n\n\nconst requestPermission = () => {\n    return Notification.requestPermission()\n      .then((permission) => {\n        if (permission == 'granted') {\n            return true\n        } else if (permission == 'denied') {\n\t    return false\n        } else if (permission == 'default') {\n            return false\n        }\n      });\n}\n\n\nconst main = () => {\n    initSW()\n    ;(0,_modules_module1_js__WEBPACK_IMPORTED_MODULE_0__.hello)()\n    ;(0,_modules_module1_js__WEBPACK_IMPORTED_MODULE_0__.set_title)()\n    requestPermission()\n    setOnClick()\n}\n\nwindow.onload = () => {\n    main()\n}\n\n\n\n\n//# sourceURL=webpack://min_webpack/./js/index.js?");

/***/ }),

/***/ "./js/modules/module1.js":
/*!*******************************!*\
  !*** ./js/modules/module1.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello),\n/* harmony export */   \"set_title\": () => (/* binding */ set_title)\n/* harmony export */ });\nfunction hello() {\n    console.log(\"hello module1\")\n}\n\nfunction set_title() {\n    const ele = document.getElementById(\"test_title\");\n    if(ele) {\n\tele.innerHTML = \"hello module1\";\n    }\n}\n\n\n//# sourceURL=webpack://min_webpack/./js/modules/module1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;