/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/FormHandler.js":
/*!******************************************!*\
  !*** ./assets/js/modules/FormHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormHandler)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormHandler = /*#__PURE__*/function () {
  function FormHandler(register_endpoint, form_selector, inputs_and_rules, input_error_class, error_bag_selector, success_alert_selector) {
    _classCallCheck(this, FormHandler);
    this.register_endpoint = register_endpoint;
    this.forms = document.querySelectorAll(form_selector);
    this.inputs_and_rules = inputs_and_rules;
    this.input_error_class = input_error_class;
    this.error_bag_selector = error_bag_selector;
    this.success_alert_selector = success_alert_selector;
    this.assignInputsHandlers();
  }
  _createClass(FormHandler, [{
    key: "assignInputsHandlers",
    value: function assignInputsHandlers() {
      var _this = this;
      this.forms.forEach(function (form) {
        _this.setupLiveValidators(form);
        form.addEventListener('submit', function (event) {
          event.preventDefault();
          var formErrorBag = form.querySelector(_this.error_bag_selector);
          var formSuccessBag = form.querySelector(_this.success_alert_selector);
          _this.flushAlerts(formErrorBag, formSuccessBag);
          var errors = [];
          var _loop = function _loop() {
            var input = form.querySelector(querySelector);
            var inputParams = _this.inputs_and_rules[querySelector];

            // Arrays is objects too
            if (_typeof(inputParams.submitValidators) === 'object') {
              inputParams.submitValidators.forEach(function (validator) {
                var error_message = validator(input.value, inputParams.inputName);
                if (error_message !== undefined) {
                  input.classList.add(_this.input_error_class);
                  errors.push(error_message);
                }
              });
            }
          };
          for (var querySelector in _this.inputs_and_rules) {
            _loop();
          }
          if (errors.length !== 0) {
            _this.placeErrorsToBag(formErrorBag, errors);
            return;
          }
          _this.handleFormSubmit(form, event, formErrorBag, formSuccessBag);
        });
      });
    }
  }, {
    key: "setupLiveValidators",
    value: function setupLiveValidators(form) {
      var _this2 = this;
      var _loop2 = function _loop2() {
        var input = form.querySelector(querySelector);
        var inputParams = _this2.inputs_and_rules[querySelector];
        input.addEventListener('input', function (event) {
          input.classList.remove(_this2.input_error_class);
          if (typeof inputParams.liveValidator === "function") {
            inputParams.liveValidator(event, input);
          }
        });
      };
      for (var querySelector in this.inputs_and_rules) {
        _loop2();
      }
    }
  }, {
    key: "handleFormSubmit",
    value: function () {
      var _handleFormSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(form, event, formErrorBag, formSuccessBag) {
        var _event$submitter$data;
        var requestFormData, requestUrl, token, response, responseJSON, message;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              requestFormData = new FormData(form);
              if (_typeof((_event$submitter$data = event.submitter.dataset) === null || _event$submitter$data === void 0 ? void 0 : _event$submitter$data.paymentMethod) !== undefined) {
                requestFormData.append('paymentMethod', event.submitter.dataset.paymentMethod);
              }
              event.preventDefault();
              requestUrl = this.register_endpoint;
              token = document.head.querySelector("meta[name='_token']").content;
              _context.next = 7;
              return fetch(requestUrl, {
                headers: {
                  'X-CSRF-TOKEN': token,
                  'Accept': 'application/json'
                },
                credentials: "same-origin",
                method: 'post',
                body: requestFormData
              });
            case 7:
              response = _context.sent;
              if (!(response.status == 422)) {
                _context.next = 11;
                break;
              }
              this.placeErrorsToBag(formErrorBag, ["Введённые Вами данные не прошли валидацию в системе"]);
              return _context.abrupt("return");
            case 11:
              _context.next = 13;
              return response.json();
            case 13:
              responseJSON = _context.sent;
              _context.prev = 14;
              if (!(response.status == 200)) {
                _context.next = 26;
                break;
              }
              _context.t0 = responseJSON['method'];
              _context.next = _context.t0 === 'success' ? 19 : _context.t0 === 'error' ? 22 : 24;
              break;
            case 19:
              if (typeof responseJSON['paylink'] !== 'undefined') {
                window.location.href = responseJSON['paylink'];
              }
              this.placeSuccessMessagesToBag(formSuccessBag, [responseJSON['message']]);
              return _context.abrupt("break", 24);
            case 22:
              this.placeErrorsToBag(formErrorBag, [responseJSON['message']]);
              return _context.abrupt("break", 24);
            case 24:
              _context.next = 29;
              break;
            case 26:
              message = 'Произошла ошибка сервера, пожалуйста, попробуте позже';
              if (_typeof(responseJSON['message']) !== undefined) {
                message = responseJSON['message'];
              }
              this.placeErrorsToBag(formErrorBag, [message]);
            case 29:
              _context.next = 35;
              break;
            case 31:
              _context.prev = 31;
              _context.t1 = _context["catch"](14);
              console.log(_context.t1);
              this.placeErrorsToBag(formErrorBag, ['Произошла ошибка']);
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[14, 31]]);
      }));
      function handleFormSubmit(_x, _x2, _x3, _x4) {
        return _handleFormSubmit.apply(this, arguments);
      }
      return handleFormSubmit;
    }()
  }, {
    key: "flushAlerts",
    value: function flushAlerts(errorBag, successBag) {
      errorBag.innerHTML = '';
      successBag.innerHTML = '';
    }
  }, {
    key: "placeErrorsToBag",
    value: function placeErrorsToBag(errorBag, errors) {
      var HTML = '';
      errors.forEach(function (errorMessage) {
        HTML += '<li>' + errorMessage + '</li>';
      });
      errorBag.innerHTML = HTML;
    }
  }, {
    key: "placeSuccessMessagesToBag",
    value: function placeSuccessMessagesToBag(successBag, messages) {
      var HTML = '';
      messages.forEach(function (message) {
        HTML += '<li>' + message + '</li>';
      });
      successBag.innerHTML = HTML;
    }
  }]);
  return FormHandler;
}();


/***/ }),

/***/ "./assets/js/modules/animation/MouseParallax.js":
/*!******************************************************!*\
  !*** ./assets/js/modules/animation/MouseParallax.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MouseParallax)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var MouseParallax = /*#__PURE__*/_createClass(function MouseParallax(element_selector) {
  var x_factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var y_factor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  _classCallCheck(this, MouseParallax);
  var items = document.querySelectorAll(element_selector);
  items.forEach(function (item) {
    window.addEventListener('mousemove', function (event) {
      var x = event.clientX / window.innerWidth;
      var y = event.clientY / window.innerHeight;
      x *= -x_factor * 20;
      y *= -y_factor * 20;
      item.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  });
});


/***/ }),

/***/ "./assets/js/modules/comments-list.js":
/*!********************************************!*\
  !*** ./assets/js/modules/comments-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentList)
/* harmony export */ });
/* harmony import */ var _utils_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DOM */ "./assets/js/utils/DOM.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var CommentList = /*#__PURE__*/function () {
  function CommentList(wrapper_selector, item_selector, list_expand_selector, list_hide_selector, item_content_selector, expand_btn_selector, hide_btn_selector) {
    var item_expanded_class = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'expanded';
    var min_shown_items = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 3;
    _classCallCheck(this, CommentList);
    _defineProperty(this, "bodyYOffset", 0);
    this.wrapper = document.querySelector(wrapper_selector);
    this.items = document.querySelectorAll(item_selector);
    this.list_expand_button = document.querySelector(list_expand_selector);
    this.list_hide_button = document.querySelector(list_hide_selector);
    this.min_shown_items = min_shown_items;
    this.item_content_selector = item_content_selector;
    this.expand_btn_selector = expand_btn_selector;
    this.hide_btn_selector = hide_btn_selector;
    this.item_expanded_class = item_expanded_class;
    this.hideItems();
    this.addButtonListeners();
  }
  _createClass(CommentList, [{
    key: "hideItems",
    value: function hideItems() {
      var _this = this;
      window.scrollTo({
        top: this.bodyYOffset,
        left: 0
      });
      this.list_hide_button.style.display = 'none';
      this.list_expand_button.style.display = 'block';
      this.items.forEach(function (item, index) {
        if (index >= _this.min_shown_items) {
          _this.hideItemContent(item.querySelector(_this.item_content_selector));
          item.style.display = 'none';
        }
      });
    }
  }, {
    key: "showItems",
    value: function showItems() {
      var _this2 = this;
      this.bodyYOffset = (0,_utils_DOM__WEBPACK_IMPORTED_MODULE_0__.getBodyScrollTop)();
      this.list_hide_button.style.display = 'block';
      this.list_expand_button.style.display = 'none';
      this.items.forEach(function (item, index) {
        if (index >= _this2.min_shown_items) {
          item.style.display = 'flex';
        }
      });
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this3 = this;
      this.list_hide_button.addEventListener('click', function () {
        return _this3.hideItems();
      });
      this.list_expand_button.addEventListener('click', function () {
        return _this3.showItems();
      });
      document.querySelectorAll(this.expand_btn_selector).forEach(function (button) {
        var item = (0,_utils_DOM__WEBPACK_IMPORTED_MODULE_0__.parentByQuerySelector)(button, _this3.item_content_selector);
        button.addEventListener('click', function () {
          return _this3.expandItemContent(item);
        });
      });
      document.querySelectorAll(this.hide_btn_selector).forEach(function (button) {
        var item = (0,_utils_DOM__WEBPACK_IMPORTED_MODULE_0__.parentByQuerySelector)(button, _this3.item_content_selector);
        button.addEventListener('click', function () {
          return _this3.hideItemContent(item);
        });
      });
    }
  }, {
    key: "expandItemContent",
    value: function expandItemContent(item) {
      item.classList.add(this.item_expanded_class);
    }
  }, {
    key: "hideItemContent",
    value: function hideItemContent(item) {
      item.classList.remove(this.item_expanded_class);
    }
  }]);
  return CommentList;
}();


/***/ }),

/***/ "./assets/js/modules/modules-list.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/modules-list.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModulesList)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ModulesList = /*#__PURE__*/function () {
  function ModulesList(item_selector, item_link_selector) {
    var expand_class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'expanded';
    _classCallCheck(this, ModulesList);
    this.items = document.querySelectorAll(item_selector);
    this.item_link_selector = item_link_selector;
    this.expand_class = expand_class;
    this.setEvents();
  }
  _createClass(ModulesList, [{
    key: "setEvents",
    value: function setEvents() {
      var _this = this;
      this.items.forEach(function (item) {
        var link = item.querySelector(_this.item_link_selector);
        link.addEventListener('click', function () {
          item.classList.toggle(_this.expand_class);
        });
      });
    }
  }]);
  return ModulesList;
}();


/***/ }),

/***/ "./assets/js/modules/popup.js":
/*!************************************!*\
  !*** ./assets/js/modules/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var _utils_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DOM */ "./assets/js/utils/DOM.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Popup = /*#__PURE__*/function () {
  function Popup(modal_open_selector, modal_overlay_selector) {
    var overlay_hide_class = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'hidden';
    var modal_close_btn_selector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, Popup);
    _defineProperty(this, "bodyScrollY", null);
    _defineProperty(this, "bodyWasScrolledByThis", false);
    this.modal_open_selector = modal_open_selector;
    this.modal_openers = document.querySelectorAll(modal_open_selector);
    this.poup_overlay = document.querySelector(modal_overlay_selector);
    this.modal_close_btn = false;
    if (modal_close_btn_selector !== false) {
      this.modal_close_btn = document.querySelector(modal_close_btn_selector);
    }
    this.overlay_hide_class = overlay_hide_class;
    this.setupEvents();
  }
  _createClass(Popup, [{
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;
      this.modal_openers.forEach(function (opener) {
        opener.addEventListener('click', function (event) {
          event.preventDefault();
          _this.togglePopup();
        });
      });
      this.poup_overlay.addEventListener('click', function (event) {
        var target = event.target;
        if (target === _this.poup_overlay) {
          _this.closePopup();
        }
      });
      if (this.modal_close_btn) {
        this.modal_close_btn.addEventListener('click', function () {
          _this.closePopup();
        });
      }
    }
  }, {
    key: "togglePopup",
    value: function togglePopup() {
      var isOpen = !this.poup_overlay.classList.contains(this.overlay_hide_class);
      if (!isOpen) {
        this.openPopup();
      } else {
        this.closePopup();
      }
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      // opening popup

      this.poup_overlay.classList.remove(this.overlay_hide_class);

      // Уже открыт какой-то popup
      if (document.body.classList.contains('body-lock')) {
        this.bodyWasScrolledByThis = false;
        return;
      }
      this.bodyWasScrolledByThis = true;
      this.bodyScrollY = (0,_utils_DOM__WEBPACK_IMPORTED_MODULE_0__.getBodyScrollTop)();
      document.body.style.top = "-".concat(this.bodyScrollY, "px");
      document.body.classList.add('body-lock');
      window.scrollTo({
        left: 0,
        top: this.bodyScrollY
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      // closing popup

      this.poup_overlay.classList.add(this.overlay_hide_class);

      // Уже открыт какой-то popup
      if (!this.bodyWasScrolledByThis) {
        return;
      }
      this.bodyWasScrolledByThis = false;
      document.body.classList.remove('body-lock');
      window.scrollTo({
        left: 0,
        top: this.bodyScrollY
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./assets/js/utils/DOM.js":
/*!********************************!*\
  !*** ./assets/js/utils/DOM.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBodyScrollTop": () => (/* binding */ getBodyScrollTop),
/* harmony export */   "parentByQuerySelector": () => (/* binding */ parentByQuerySelector)
/* harmony export */ });
var parentByQuerySelector = function parentByQuerySelector(element, parentSelector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  // Get the closest matching element
  for (; element && element !== document; element = element.parentNode) {
    if (element.matches(parentSelector)) {
      return element;
    }
  }
  return null;
};
var getBodyScrollTop = function getBodyScrollTop() {
  return window.self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || document.body && document.body.scrollTop;
};

/***/ }),

/***/ "./assets/js/utils/validation/FormSubmitValidators.js":
/*!************************************************************!*\
  !*** ./assets/js/utils/validation/FormSubmitValidators.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailSubmitValidator": () => (/* binding */ emailSubmitValidator),
/* harmony export */   "notEmptySubmitValidator": () => (/* binding */ notEmptySubmitValidator),
/* harmony export */   "phoneSubmitValidator": () => (/* binding */ phoneSubmitValidator)
/* harmony export */ });
var emailSubmitValidator = function emailSubmitValidator(inputValue, inputName) {
  if (typeof notEmptySubmitValidator(inputValue, inputName) === "string") {
    return notEmptySubmitValidator(inputValue, inputName);
  }
  if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/.test(inputValue)) {
    return "\u041F\u043E\u043B\u0435 '".concat(inputName, "' \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u043C \u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441\u043E\u043C");
  }
};
var phoneSubmitValidator = function phoneSubmitValidator(inputValue, inputName) {
  if (typeof notEmptySubmitValidator(inputValue, inputName) === "string") {
    return notEmptySubmitValidator(inputValue, inputName);
  }
  if (!/\d/.test(inputValue)) {
    return "\u041F\u043E\u043B\u0435 '".concat(inputName, "' \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0436\u0440\u0430\u0436\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
  }
};
var notEmptySubmitValidator = function notEmptySubmitValidator(inputValue, inputName) {
  if (inputValue === null || inputValue.length < 1) {
    return "\u041F\u043E\u043B\u0435 '".concat(inputName, "' \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
  }
};

/***/ }),

/***/ "./assets/js/utils/validation/LiveValidators.js":
/*!******************************************************!*\
  !*** ./assets/js/utils/validation/LiveValidators.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phoneLiveValidator": () => (/* binding */ phoneLiveValidator)
/* harmony export */ });
var phoneLiveValidator = function phoneLiveValidator(event, input) {
  //allow only digits in phone input
  var isInputCorrect = /\d/.test(event.data);
  if (!isInputCorrect) {
    event.preventDefault();
    input.value = input.value.replace(/\D+/g, '');
  }
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************!*\
  !*** ./assets/js/pages/courses/compas_3d/for_beginners.js ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_comments_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/comments-list */ "./assets/js/modules/comments-list.js");
/* harmony import */ var _modules_modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/modules-list */ "./assets/js/modules/modules-list.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/popup */ "./assets/js/modules/popup.js");
/* harmony import */ var _modules_animation_MouseParallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/animation/MouseParallax */ "./assets/js/modules/animation/MouseParallax.js");
/* harmony import */ var _modules_FormHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/FormHandler */ "./assets/js/modules/FormHandler.js");
/* harmony import */ var _utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/validation/FormSubmitValidators */ "./assets/js/utils/validation/FormSubmitValidators.js");
/* harmony import */ var _utils_validation_LiveValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/validation/LiveValidators */ "./assets/js/utils/validation/LiveValidators.js");
// import '../../../app';








var collapseShow = document.getElementById('collapse-burger-show');
collapseShow.addEventListener('click', function () {
  document.getElementById("collapse-container").style.display = "block";
});
var collapseHide = document.getElementById('collapse-burger-close');
collapseHide.addEventListener('click', function () {
  document.getElementById("collapse-container").style.display = "none";
});
new _modules_FormHandler__WEBPACK_IMPORTED_MODULE_4__["default"]('/sign-up/course/for-beginners', '.apply-form__form', {
  'input[name="name_and_surname"]': {
    inputName: 'Имя',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  },
  'input[name="email"]': {
    inputName: 'Имейл',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.emailSubmitValidator]
  },
  'input[name="phone"]': {
    inputName: 'Телефон',
    liveValidator: _utils_validation_LiveValidators__WEBPACK_IMPORTED_MODULE_6__.phoneLiveValidator,
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.phoneSubmitValidator]
  },
  'input[name="job"]': {
    inputName: 'Должность',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  },
  'input[name="company"]': {
    inputName: 'Компания',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  }
}, 'error', '.apply-form__errors', '.apply-form__success');
new _modules_FormHandler__WEBPACK_IMPORTED_MODULE_4__["default"]('/sign-up/course/for-beginners', '.popup-apply-form__form', {
  'input[name="name_and_surname"]': {
    inputName: 'Имя',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  },
  'input[name="email"]': {
    inputName: 'Имейл',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.emailSubmitValidator]
  },
  'input[name="phone"]': {
    inputName: 'Телефон',
    liveValidator: _utils_validation_LiveValidators__WEBPACK_IMPORTED_MODULE_6__.phoneLiveValidator,
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.phoneSubmitValidator]
  },
  'input[name="job"]': {
    inputName: 'Должность',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  },
  'input[name="company"]': {
    inputName: 'Компания',
    submitValidators: [_utils_validation_FormSubmitValidators__WEBPACK_IMPORTED_MODULE_5__.notEmptySubmitValidator]
  }
}, 'error', '.popup-apply-form__errors', '.apply-form__success');
new _modules_comments_list__WEBPACK_IMPORTED_MODULE_0__["default"]('.review__wrapper', '.review-item', '.expand-all-comments', '.hide-all-comments', '.review-item__content', '.expand-review', '.hide-review', 'expanded', 3);
new _modules_modules_list__WEBPACK_IMPORTED_MODULE_1__["default"]('.programs__item', '.program-block', 'expanded');
new _modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"]('.top-nav__button', '.popup-overlay', 'hidden');
new _modules_animation_MouseParallax__WEBPACK_IMPORTED_MODULE_3__["default"]('.promo-animated__3D-1', 1.7, 2);
new _modules_animation_MouseParallax__WEBPACK_IMPORTED_MODULE_3__["default"]('.promo-animated__3D-2', 1.5, -1.5);
})();

/******/ })()
;