/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/pages/courses/components/_Coment.js":
/*!*******************************************************!*\
  !*** ./assets/js/pages/courses/components/_Coment.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Coment = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Coment, _HTMLElement);
  var _super = _createSuper(Coment);
  function Coment() {
    var _this;
    _classCallCheck(this, Coment);
    _this = _super.call(this);

    // this.attachShadow({ mode: "open" })
    _defineProperty(_assertThisInitialized(_this), "name", '');
    _defineProperty(_assertThisInitialized(_this), "text", '');
    _defineProperty(_assertThisInitialized(_this), "cursor", 0);
    _defineProperty(_assertThisInitialized(_this), "textCompoment", void 0);
    Coment.maxCount++;
    Coment.list.push(_assertThisInitialized(_this));
    if (!Coment.active) Coment.showIndex();
    return _this;
  }
  _createClass(Coment, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.name = this.getAttribute('client');
      this.text = this.getAttribute('text').trim().replace(/\s+\s/g, ' ');
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      this.innerHTML = '';
      this.cursor = 0;
      var name = document.createElement('h2');
      name.innerText = this.name;
      this.textCompoment = document.createElement('p');
      this.textCompoment.innerText = '';
      this.appendChild(name);
      this.appendChild(this.textCompoment);
    }
  }, {
    key: "nextChar",
    value: function nextChar() {
      if (this.cursor < this.text.length) {
        this.cursor++;
        var text = this.text.slice(0, this.cursor);
        this.textCompoment.innerText = text;
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.classList.remove('active');
    }
  }], [{
    key: "types",
    value: function types() {
      var interval = setInterval(function () {
        Coment.active.nextChar();
      }, Coment.typeSpeed);
    }
  }, {
    key: "prevComent",
    value: function prevComent() {
      Coment.comentIndex--;
      if (Coment.comentIndex < 0) Coment.comentIndex = Coment.maxCount - 1;
      Coment.active.hide();
      Coment.showIndex();
    }
  }, {
    key: "nextComent",
    value: function nextComent() {
      Coment.comentIndex++;
      if (Coment.comentIndex >= Coment.maxCount) Coment.comentIndex = 0;
      Coment.showIndex();
    }
  }, {
    key: "showIndex",
    value: function showIndex() {
      if (Coment.active) Coment.active.hide();
      Coment.active = Coment.list[Coment.comentIndex];
      Coment.active.classList.add('active');
      Coment.active.cursor = 0;
    }
  }, {
    key: "init",
    value: function init() {
      customElements.define("client-coment", Coment);
      var interval = setInterval(function () {
        Coment.nextComent();
      }, 30000);
      document.querySelectorAll('.carousel-control-prev').forEach(function (element) {
        element.onclick = function () {
          clearInterval(interval);
          Coment.prevComent();
        };
      });
      document.querySelectorAll('.carousel-control-next').forEach(function (element) {
        element.onclick = function () {
          clearInterval(interval);
          Coment.nextComent();
        };
      });
      Coment.types();
    }
  }]);
  return Coment;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_defineProperty(Coment, "comentIndex", 0);
_defineProperty(Coment, "maxCount", 0);
_defineProperty(Coment, "list", []);
_defineProperty(Coment, "active", false);
_defineProperty(Coment, "typeSpeed", 60);
module.exports = Coment;

/***/ }),

/***/ "./assets/js/pages/courses/course-page.js":
/*!************************************************!*\
  !*** ./assets/js/pages/courses/course-page.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Coment = __webpack_require__(/*! ./components/_Coment.js */ "./assets/js/pages/courses/components/_Coment.js");

//Программа обучения
document.querySelectorAll('.modules_more_3 li').forEach(function (active, index) {
  return active.addEventListener('click', function (e) {
    var modules = document.querySelectorAll('.modules_more_3 li');
    var modulesText = document.querySelectorAll('.module');
    modules.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
        active.classList.add('active');
      }
    });
    modulesText.forEach(function (el) {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    console.log(window.matchMedia('(min-width: 768px)').matches);
    console.log(modulesText);
    // if (window.matchMedia('(min-width: 768px').matches) {
    modulesText[index].classList.add('active');
    // } else {
    //     modulesText[index + 1].classList.add('active');
    // }
  });
});

// Selected box (двигающаяся рамка) на баннере
var selectedBox = document.querySelector('.selected_box');
var mainModuleBox = document.querySelector('.main-module-box');
selectedBox.style.width = mainModuleBox.clientWidth + 'px';
selectedBox.style.height = mainModuleBox.clientHeight + 'px';
window.addEventListener('resize', function () {
  var selectedBox = document.querySelector('.selected_box');
  var mainModuleBox = document.querySelector('.main-module-box');
  selectedBox.style.width = mainModuleBox.clientWidth + 'px';
  selectedBox.style.height = mainModuleBox.clientHeight + 'px';
});
document.addEventListener("DOMContentLoaded", function () {
  selectedBox.classList.remove('d-none');
});

// Часто задаваемый вопросы
document.querySelectorAll('.faq .split .list').forEach(function (row) {
  row.addEventListener('click', function (e) {
    row.classList.toggle('FAQ__hidden');
  });
  row.querySelector('.list__collapse-comment').addEventListener('click', function (e) {
    e.stopPropagation();
    row.classList.toggle('FAQ__hidden');
  });
});

// Как проходит обучение
var tiles = document.querySelectorAll('.final_work_stage h1');
var tileMinIndex = 0;
var tileMaxIndex = tiles.length - 1;
var tileCurrentIndex = tileMinIndex;
var tileSourceTextColor = tiles[tileMinIndex].style.color;
tiles[tileCurrentIndex].style.color = '#FF5500';
tileCurrentIndex++;
setInterval(function () {
  if (tileCurrentIndex - 1 >= tileMinIndex) {
    tiles[tileCurrentIndex - 1].style.color = tileSourceTextColor;
  } else {
    tiles[tileMaxIndex].style.color = tileSourceTextColor;
  }
  tiles[tileCurrentIndex].style.color = '#FF5500';
  tileCurrentIndex++;
  if (tileCurrentIndex > tileMaxIndex) {
    tileCurrentIndex = tileMinIndex;
  }
}, 4000);
var animationController = new ( /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
  }
  _createClass(_class, [{
    key: "createAnimation",
    value: function createAnimation(className) {
      var _this = this;
      var maxCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      var onclick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var mainSelectX = 0;
      var interval = setInterval(function () {
        mainSelectX++;
        if (mainSelectX >= maxCount) mainSelectX = 0;
        _this.select(className, mainSelectX);
      }, time);
      if (!onclick) {
        document.querySelectorAll(".".concat(className)).forEach(function (element, index) {
          element.onclick = function () {
            clearInterval(interval);
            _this.select(className, index);
          };
        });
      } else {
        onclick();
      }
    }
  }, {
    key: "select",
    value: function select(className, index) {
      document.body.style.setProperty("--".concat(className), index);
      switch (index) {
        case 0:
          document.body.style.setProperty("--".concat(className, "_x"), 0);
          document.body.style.setProperty("--".concat(className, "_y"), 0);
          break;
        case 1:
          document.body.style.setProperty("--".concat(className, "_x"), 1);
          document.body.style.setProperty("--".concat(className, "_y"), 0);
          break;
        case 2:
          document.body.style.setProperty("--".concat(className, "_x"), 0);
          document.body.style.setProperty("--".concat(className, "_y"), 1);
          break;
        case 3:
          document.body.style.setProperty("--".concat(className, "_x"), 1);
          document.body.style.setProperty("--".concat(className, "_y"), 1);
          break;
      }

      // document.querySelector(`.${className}.active`).classList.remove('active');
      // document.querySelectorAll(`.${className}`)[index].classList.add('active');
    }
  }]);
  return _class;
}())();
animationController.createAnimation('main-module-box');
animationController.createAnimation('training-box');
Coment.init();

/***/ }),

/***/ "./assets/scss/new_fluid_style.scss":
/*!******************************************!*\
  !*** ./assets/scss/new_fluid_style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/course-page": 0,
/******/ 			"assets/css/style": 0,
/******/ 			"assets/css/new_fluid_style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmodx"] = self["webpackChunkmodx"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/style","assets/css/new_fluid_style"], () => (__webpack_require__("./assets/js/pages/courses/course-page.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/style","assets/css/new_fluid_style"], () => (__webpack_require__("./assets/scss/new_fluid_style.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/style","assets/css/new_fluid_style"], () => (__webpack_require__("./assets/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;