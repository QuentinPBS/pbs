"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_DashboardDevis_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/userService */ "./resources/js/services/userService.js");
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
/* harmony import */ var _components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Breadcrumb.vue */ "./resources/js/components/Breadcrumb.vue");
/* harmony import */ var _components_project_ProjectClientList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project/ProjectClientList.vue */ "./resources/js/components/project/ProjectClientList.vue");
/* harmony import */ var _services_projectService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/projectService */ "./resources/js/services/projectService.js");
/* harmony import */ var _services_inviteService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/inviteService */ "./resources/js/services/inviteService.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DashboardDevis',
  components: {
    'navbar': _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'breadcrumb': _components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'project-client-list': _components_project_ProjectClientList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isLoaded: false,
      projects: [],
      invitation: null
    });
    return {
      state: state
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, responseProjects, responseInvitation;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_userService__WEBPACK_IMPORTED_MODULE_1__["default"].getUserCurrent(_this.$store.state.tokenStore.token);

            case 3:
              response = _context.sent;
              if (response.status === 200) _this.$store.commit('SET_USER', response.data.data.item);
              _context.next = 7;
              return _services_projectService__WEBPACK_IMPORTED_MODULE_5__["default"].getProjectsByClientId(_this.$store.state.userStore.user.id);

            case 7:
              responseProjects = _context.sent;
              if (responseProjects.status === 200) _this.state.projects = responseProjects.data;
              _context.next = 11;
              return _services_inviteService__WEBPACK_IMPORTED_MODULE_6__["default"].getInvites(_this.$store.state.userStore.user.email);

            case 11:
              responseInvitation = _context.sent;
              if (responseInvitation.data.length > 0) _this.state.invitation = responseInvitation.data;
              _this.state.isLoaded = true;
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response.status === 401) {
                _this.$store.commit('SET_USER', null);

                _this.$store.commit('SET_TOKEN', "");

                window.location.href = '/login';
              }

            case 19:
              _context.prev = 19;
              return _context.finish(19);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16, 19, 21]]);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Breadcrumb',
  props: ['items']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _services_inviteService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/inviteService */ "./resources/js/services/inviteService.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Navbar',
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      user: null,
      notification: 0
    });
    return {
      state: state
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.state.user = "".concat(_this.$store.state.userStore.user.firstname, " ").concat(_this.$store.state.userStore.user.lastname);
              _context.prev = 1;
              _context.next = 4;
              return _services_inviteService__WEBPACK_IMPORTED_MODULE_1__["default"].getInvites(_this.$store.state.userStore.user.email);

            case 4:
              response = _context.sent;

              if (response.data.length > 0) {
                _this.state.notification += 1;
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }))();
  },
  methods: {
    logout: function logout() {
      this.$store.commit('SET_TOKEN', '');
      this.$store.commit('SET_USER', null);
      window.location = '/login';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_final_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-final-modal */ "./node_modules/vue-final-modal/dist/VueFinalModal.esm.js");
/* harmony import */ var _services_inviteService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inviteService */ "./resources/js/services/inviteService.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProjectClientList',
  props: ['projects', 'invitation'],
  components: {
    VueFinalModal: vue_final_modal__WEBPACK_IMPORTED_MODULE_1__.VueFinalModal,
    ModalsContainer: vue_final_modal__WEBPACK_IMPORTED_MODULE_1__.ModalsContainer
  },
  setup: function setup() {
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      isLoadingYes: false,
      isLoadingNo: false,
      showModal: false
    });
    return {
      state: state
    };
  },
  methods: {
    handleAcceptClick: function () {
      var _handleAcceptClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state.isLoadingYes = true;
                _context.prev = 1;
                _context.next = 4;
                return _services_inviteService__WEBPACK_IMPORTED_MODULE_2__["default"].acceptedInvite(this.invitation[0].token);

              case 4:
                location.reload();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function handleAcceptClick() {
        return _handleAcceptClick.apply(this, arguments);
      }

      return handleAcceptClick;
    }(),
    handleRejectClick: function () {
      var _handleRejectClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.state.isLoadingNo = true;
                _context2.prev = 1;
                _context2.next = 4;
                return _services_inviteService__WEBPACK_IMPORTED_MODULE_2__["default"].rejectInvite(this.$store.state.userStore.user.email);

              case 4:
                location.reload();
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                console.error(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function handleRejectClick() {
        return _handleRejectClick.apply(this, arguments);
      }

      return handleRejectClick;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "dashboard"
};
var _hoisted_2 = {
  "class": "wrapper"
};
var _hoisted_3 = {
  "class": "dashboard__content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbar");

  var _component_breadcrumb = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("breadcrumb");

  var _component_project_client_list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("project-client-list");

  return $setup.state.isLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_breadcrumb, {
    items: [{
      link: '/devis',
      name: 'Devis'
    }]
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_project_client_list, {
    projects: $setup.state.projects,
    invitation: $setup.state.invitation
  }, null, 8
  /* PROPS */
  , ["projects", "invitation"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-base-100"
};
var _hoisted_2 = {
  "class": "text-sm breadcrumbs wrapper"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.items, function (item, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [$props.items.length - 1 !== i ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      "class": "underline",
      href: item.link
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_3)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
    /* TEXT */
    ))]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6dde423b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "bg-base-100"
};
var _hoisted_2 = {
  "class": "navbar wrapper border-b-2 border-gray-100"
};
var _hoisted_3 = {
  "class": "flex-1 flex gap-10 item-center"
};

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/",
    "class": "normal-case text-xl text-yellow-600"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    width: "90",
    src: "/images/logo.png",
    alt: ""
  })], -1
  /* HOISTED */
  );
});

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/",
    tabindex: "0",
    "class": ""
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Mes projets")], -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  "class": "indicator"
};
var _hoisted_7 = {
  key: 0,
  "class": "indicator-item badge-custome"
};

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/devis",
    tabindex: "0",
    "class": ""
  }, "Devis reçus", -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  "class": "flex-none gap-2"
};
var _hoisted_10 = {
  "class": "dropdown dropdown-end"
};
var _hoisted_11 = {
  tabindex: "0",
  "class": "btn btn-ghost"
};
var _hoisted_12 = {
  tabindex: "0",
  "class": "mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
};

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "/profile"
  }, "Profile")], -1
  /* HOISTED */
  );
});

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, "Logout", -1
  /* HOISTED */
  );
});

var _hoisted_15 = [_hoisted_14];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [$setup.state.notification !== 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.user), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logout && $options.logout.apply($options, arguments);
    })
  }, _hoisted_15)])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-195ddbb1"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "project-list"
};
var _hoisted_2 = {
  "class": "project-list__content"
};

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-center text-white font-bold"
  }, "Vous avez une demande de devis", -1
  /* HOISTED */
  );
});

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  key: 1,
  "class": "project-list__content__item"
};
var _hoisted_6 = ["href"];
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "card-body"
};
var _hoisted_9 = {
  "class": "card-title font-bold text-left"
};
var _hoisted_10 = {
  "class": "text-left"
};
var _hoisted_11 = {
  key: 2,
  "class": "flex flex-col items-center w-full mt-28 gap-4"
};

var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: "/images/logo_b&w.png",
    alt: "logo paybystep"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-xl font-bold"
  }, "Vous n'avez aucun devis", -1
  /* HOISTED */
  );
});

var _hoisted_14 = [_hoisted_12, _hoisted_13];
var _hoisted_15 = {
  "class": "modal__title text-center"
};

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "font-normal"
  }, "vous invite à son projet", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal__content"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_18 = {
  "class": "modal__action justify-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_final_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-final-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.invitation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.state.showModal = true;
    }),
    "class": "alert alert-info shadow-sm w-72 cursor-pointer"
  }, _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.projects.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.projects, function (project) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      href: "/project/".concat(project.project.slug),
      "class": "card card-compact bg-base-100 shadow-md w-1/4 mt-5"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("figure", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: project.project.image,
      alt: "Shoes",
      "class": "h-36 w-full object-cover"
    }, null, 8
    /* PROPS */
    , _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.project.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(project.project.description), 1
    /* TEXT */
    )])], 8
    /* PROPS */
    , _hoisted_6);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, _hoisted_14))]), $props.invitation ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vue_final_modal, {
    key: 0,
    modelValue: $setup.state.showModal,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.state.showModal = $event;
    }),
    classes: "modal-container",
    "content-class": "modal-content"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "modal__close",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.state.showModal = false;
        })
      }, " X "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.invitation[0].user.firstname) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.invitation[0].user.lastname) + " ", 1
      /* TEXT */
      ), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.invitation[0].project.name), 1
      /* TEXT */
      )]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[2] || (_cache[2] = function () {
          return $options.handleRejectClick && $options.handleRejectClick.apply($options, arguments);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'loading': $setup.state.isLoadingNo
        }, 'btn btn-link'])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.isLoading ? 'loading' : 'Non'), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[3] || (_cache[3] = function () {
          return $options.handleAcceptClick && $options.handleAcceptClick.apply($options, arguments);
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
          'loading': $setup.state.isLoadingYes
        }, 'btn btn-primary'])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.state.isLoading ? 'loading' : 'Oui'), 3
      /* TEXT, CLASS */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/api/config.js":
/*!************************************!*\
  !*** ./resources/js/api/config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APISettings": () => (/* binding */ APISettings)
/* harmony export */ });
var APISettings = {
  token: '',
  Headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }),
  baseURL: "".concat("http://localhost:8000", "/api")
};

/***/ }),

/***/ "./resources/js/services/inviteService.js":
/*!************************************************!*\
  !*** ./resources/js/services/inviteService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/index */ "./resources/js/Store/index.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/config */ "./resources/js/api/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  acceptedInvite: function () {
    var _acceptedInvite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/invites/accept/").concat(token), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function acceptedInvite(_x) {
      return _acceptedInvite.apply(this, arguments);
    }

    return acceptedInvite;
  }(),
  sendInvite: function () {
    var _sendInvite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(projectId, data) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/invites/send/").concat(projectId), data, {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function sendInvite(_x2, _x3) {
      return _sendInvite.apply(this, arguments);
    }

    return sendInvite;
  }(),
  getInvites: function () {
    var _getInvites = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(email) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/invites/get/").concat(email), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getInvites(_x4) {
      return _getInvites.apply(this, arguments);
    }

    return getInvites;
  }(),
  rejectInvite: function () {
    var _rejectInvite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(token) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/invites/reject/").concat(token), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function rejectInvite(_x5) {
      return _rejectInvite.apply(this, arguments);
    }

    return rejectInvite;
  }()
});

/***/ }),

/***/ "./resources/js/services/projectService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/projectService.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/index */ "./resources/js/Store/index.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/config */ "./resources/js/api/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getProjectsByUserId: function () {
    var _getProjectsByUserId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/projects/user/".concat(userId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getProjectsByUserId(_x) {
      return _getProjectsByUserId.apply(this, arguments);
    }

    return getProjectsByUserId;
  }(),
  getProjectsByClientId: function () {
    var _getProjectsByClientId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/projects/client/".concat(userId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function getProjectsByClientId(_x2) {
      return _getProjectsByClientId.apply(this, arguments);
    }

    return getProjectsByClientId;
  }(),
  getProjectById: function () {
    var _getProjectById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(projectId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/projects/show/".concat(projectId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getProjectById(_x3) {
      return _getProjectById.apply(this, arguments);
    }

    return getProjectById;
  }(),
  getProjectBySlug: function () {
    var _getProjectBySlug = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(projectSlug) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/projects/").concat(projectSlug), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function getProjectBySlug(_x4) {
      return _getProjectBySlug.apply(this, arguments);
    }

    return getProjectBySlug;
  }(),
  createProject: function () {
    var _createProject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(project) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/projects"), project, {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context5.sent;
              return _context5.abrupt("return", response);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function createProject(_x5) {
      return _createProject.apply(this, arguments);
    }

    return createProject;
  }(),
  updateProject: function () {
    var _updateProject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(project) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/projects/".concat(project.id), project, {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context6.sent;
              return _context6.abrupt("return", response);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function updateProject(_x6) {
      return _updateProject.apply(this, arguments);
    }

    return updateProject;
  }(),
  deleteProject: function () {
    var _deleteProject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(projectId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/projects/".concat(projectId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context7.sent;
              return _context7.abrupt("return", response);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function deleteProject(_x7) {
      return _deleteProject.apply(this, arguments);
    }

    return deleteProject;
  }()
});

/***/ }),

/***/ "./resources/js/services/userService.js":
/*!**********************************************!*\
  !*** ./resources/js/services/userService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Store/index */ "./resources/js/Store/index.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/config */ "./resources/js/api/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loginUser: function () {
    var _loginUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/auth/login', user);

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function loginUser(_x) {
      return _loginUser.apply(this, arguments);
    }

    return loginUser;
  }(),
  resetPasswordUser: function () {
    var _resetPasswordUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/password/email"), {
                email: email
              });

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function resetPasswordUser(_x2) {
      return _resetPasswordUser.apply(this, arguments);
    }

    return resetPasswordUser;
  }(),
  resetFormPasswordUser: function () {
    var _resetFormPasswordUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      var response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/password/reset"), data);

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function resetFormPasswordUser(_x3) {
      return _resetFormPasswordUser.apply(this, arguments);
    }

    return resetFormPasswordUser;
  }(),
  getUserCurrent: function () {
    var _getUserCurrent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_api_config__WEBPACK_IMPORTED_MODULE_2__.APISettings.baseURL, "/me"), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function getUserCurrent() {
      return _getUserCurrent.apply(this, arguments);
    }

    return getUserCurrent;
  }(),
  getUserById: function () {
    var _getUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/user/".concat(userId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context5.sent;
              return _context5.abrupt("return", response.data);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function getUserById(_x4) {
      return _getUserById.apply(this, arguments);
    }

    return getUserById;
  }(),
  getUsers: function () {
    var _getUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/user', {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function getUsers() {
      return _getUsers.apply(this, arguments);
    }

    return getUsers;
  }(),
  createUser: function () {
    var _createUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(user) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/user', user);

            case 2:
              response = _context7.sent;
              return _context7.abrupt("return", response.data);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function createUser(_x5) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }(),
  updateUser: function () {
    var _updateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(user) {
      var response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/user/".concat(user.id), user, {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context8.sent;
              return _context8.abrupt("return", response.data);

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function updateUser(_x6) {
      return _updateUser.apply(this, arguments);
    }

    return updateUser;
  }(),
  updatePassword: function () {
    var _updatePassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(user) {
      var response;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().put("/api/user/password/update", user, {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context9.sent;
              return _context9.abrupt("return", response.data);

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function updatePassword(_x7) {
      return _updatePassword.apply(this, arguments);
    }

    return updatePassword;
  }(),
  deleteUser: function () {
    var _deleteUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(userId) {
      var response;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/user/".concat(userId), {
                headers: {
                  'Authorization': 'Bearer ' + _Store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.tokenStore.token
                }
              });

            case 2:
              response = _context10.sent;
              return _context10.abrupt("return", response.data);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function deleteUser(_x8) {
      return _deleteUser.apply(this, arguments);
    }

    return deleteUser;
  }()
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dashboard {\n  background-color: #EFF0F2;\n  height: 100vh;\n}\n.dashboard__content {\n  margin-top: 1.25rem;\n  width: 100%;\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 1.25rem;\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".indicator[data-v-6dde423b] {\n  position: relative;\n}\n.badge-custome[data-v-6dde423b] {\n  position: absolute;\n  right: -11px;\n  top: 5px;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  /* color: red; */\n  background: red;\n  border: none;\n  border-radius: 50%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".project-list[data-v-195ddbb1] {\n  min-height: 80vh;\n}\n.project-list__btn[data-v-195ddbb1] {\n  display: flex;\n  justify-content: flex-end;\n}\n.project-list__content__item[data-v-195ddbb1] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n.project-list__form[data-v-195ddbb1] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.modal__action[data-v-195ddbb1] {\n  justify-content: center !important;\n}\n[data-v-195ddbb1] .modal-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[data-v-195ddbb1] .modal-content {\n  display: flex;\n  flex-direction: column;\n  margin: 0 1rem;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.25rem;\n  background: #fff;\n  text-align: initial;\n  width: 500px;\n}\n.modal__title[data-v-195ddbb1] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.modal__close[data-v-195ddbb1] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n.modal__action[data-v-195ddbb1] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-shrink: 0;\n  padding: 1rem 0 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_style_index_0_id_333d4b98_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_style_index_0_id_333d4b98_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_style_index_0_id_333d4b98_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_6dde423b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_6dde423b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_6dde423b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_style_index_0_id_195ddbb1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_style_index_0_id_195ddbb1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_style_index_0_id_195ddbb1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/DashboardDevis.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/DashboardDevis.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardDevis_vue_vue_type_template_id_333d4b98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardDevis.vue?vue&type=template&id=333d4b98 */ "./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98");
/* harmony import */ var _DashboardDevis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardDevis.vue?vue&type=script&lang=js */ "./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js");
/* harmony import */ var _DashboardDevis_vue_vue_type_style_index_0_id_333d4b98_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss */ "./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss");
/* harmony import */ var _var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DashboardDevis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DashboardDevis_vue_vue_type_template_id_333d4b98__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/DashboardDevis.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Breadcrumb.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Breadcrumb.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_c259b9a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=c259b9a4 */ "./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js */ "./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Breadcrumb_vue_vue_type_template_id_c259b9a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Breadcrumb.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b&scoped=true */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js");
/* harmony import */ var _Navbar_vue_vue_type_style_index_0_id_6dde423b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true */ "./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbar_vue_vue_type_template_id_6dde423b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6dde423b"],['__file',"resources/js/components/Navbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/project/ProjectClientList.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/project/ProjectClientList.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectClientList_vue_vue_type_template_id_195ddbb1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true */ "./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true");
/* harmony import */ var _ProjectClientList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectClientList.vue?vue&type=script&lang=js */ "./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js");
/* harmony import */ var _ProjectClientList_vue_vue_type_style_index_0_id_195ddbb1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true */ "./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true");
/* harmony import */ var _var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_var_www_html_pbs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ProjectClientList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProjectClientList_vue_vue_type_template_id_195ddbb1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-195ddbb1"],['__file',"resources/js/components/project/ProjectClientList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardDevis.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Breadcrumb.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectClientList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_template_id_333d4b98__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_template_id_333d4b98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardDevis.vue?vue&type=template&id=333d4b98 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=template&id=333d4b98");


/***/ }),

/***/ "./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_template_id_c259b9a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Breadcrumb_vue_vue_type_template_id_c259b9a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Breadcrumb.vue?vue&type=template&id=c259b9a4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Breadcrumb.vue?vue&type=template&id=c259b9a4");


/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_6dde423b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_template_id_6dde423b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=template&id=6dde423b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&scoped=true");


/***/ }),

/***/ "./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_template_id_195ddbb1_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_template_id_195ddbb1_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=template&id=195ddbb1&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DashboardDevis_vue_vue_type_style_index_0_id_333d4b98_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/DashboardDevis.vue?vue&type=style&index=0&id=333d4b98&lang=scss");


/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbar_vue_vue_type_style_index_0_id_6dde423b_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbar.vue?vue&type=style&index=0&id=6dde423b&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProjectClientList_vue_vue_type_style_index_0_id_195ddbb1_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/project/ProjectClientList.vue?vue&type=style&index=0&id=195ddbb1&lang=scss&scoped=true");


/***/ })

}]);