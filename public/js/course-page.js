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

/***/ "./assets/js/pages/courses/components/_Modules.js":
/*!********************************************************!*\
  !*** ./assets/js/pages/courses/components/_Modules.js ***!
  \********************************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Modules = /*#__PURE__*/function () {
  function Modules(className) {
    var _this = this;
    _classCallCheck(this, Modules);
    _defineProperty(this, "sliderMOVED", false);
    _defineProperty(this, "selected", 0);
    // this.spaceCreate(document.querySelector(`.${className} .space`))
    this.sliderCreate(document.querySelector(".".concat(className, " .scrolled ol")));
    this.railsCreate(document.querySelector(".".concat(className, " .scrolled")));
    document.querySelectorAll('.scrolled li').forEach(function (element, index) {
      element.onclick = function () {
        return _this.selectElement(index);
      };
    });
  }
  _createClass(Modules, [{
    key: "selectElement",
    value: function selectElement(index) {
      this.rails.scrollTo(this.rails.scrollWidth / 3 * index, 0);
    }
  }, {
    key: "spaceCreate",
    value: function spaceCreate(space) {
      this.space = space;
    }
  }, {
    key: "sliderCreate",
    value: function sliderCreate(slider) {
      this.slider = slider;
    }
  }, {
    key: "railsCreate",
    value: function railsCreate(component) {
      var _this2 = this;
      this.rails = component;
      this.rails.addEventListener('scroll', function () {
        var position = _this2.rails.scrollLeft / (_this2.rails.scrollWidth - _this2.rails.clientWidth) * 100;
        _this2.setScroll(position);
      });
    }
  }, {
    key: "setScroll",
    value: function setScroll(position) {
      this.setPosition(position);
    }
  }, {
    key: "setTransition",
    value: function setTransition(status) {
      if (status) document.body.style.setProperty('--sliderActiveTransition', 'all .3s ease-in-out');else document.body.style.setProperty('--sliderActiveTransition', 'none');
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      var selectElement = Math.round((position - 10) / 33);
      if (selectElement > 2) selectElement = 2;
      if (this.selected != selectElement) {
        this.selected = selectElement;
        this.removeActive('.scrolled');
        this.removeActive('.modules');
        document.querySelectorAll('.scrolled li')[this.selected].classList.add('active');
        document.querySelectorAll('.modules .module')[this.selected].classList.add('active');
      }
    }
  }, {
    key: "removeActive",
    value: function removeActive(query) {
      var active = document.querySelector("".concat(query, " .active"));
      if (active) active.classList.remove('active');
    }
  }], [{
    key: "init",
    value: function init() {
      new Modules('training_program');
    }
  }]);
  return Modules;
}();
module.exports = Modules;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./assets/js/pages/courses/course-page.js ***!
  \************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Coment = __webpack_require__(/*! ./components/_Coment.js */ "./assets/js/pages/courses/components/_Coment.js");
var Modules = __webpack_require__(/*! ./components/_Modules.js */ "./assets/js/pages/courses/components/_Modules.js");

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
var timerId = setInterval(function () {
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
Modules.init();
document.body.onscroll = function (e) {
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  document.querySelector('.stick-header').style.setProperty('--show', scroll > 200 ? 1 : 0);
};
})();

/******/ })()
;