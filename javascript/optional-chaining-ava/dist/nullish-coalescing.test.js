"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

(0, _ava.default)("Nullish coalescing defaults null", t => {
  var _ref;

  t.is((_ref = null) !== null && _ref !== void 0 ? _ref : "default", "default");
});
(0, _ava.default)("Nullish coalescing defaults undefined", t => {
  t.is(undefined !== null && undefined !== void 0 ? undefined : "default", "default");
});
(0, _ava.default)("Nullish coalescing defaults void 0", t => {
  var _;

  t.is((_ = void 0) !== null && _ !== void 0 ? _ : "default", "default");
});
(0, _ava.default)("Nullish coalescing does not default 0", t => {
  var _2;

  t.is((_2 = 0) !== null && _2 !== void 0 ? _2 : "default", 0);
});
(0, _ava.default)("Nullish coalescing does not default empty string", t => {
  var _ref2;

  t.is((_ref2 = "") !== null && _ref2 !== void 0 ? _ref2 : "default", "");
});
(0, _ava.default)("Nullish coalescing does not default false", t => {
  var _false;

  t.is((_false = false) !== null && _false !== void 0 ? _false : "default", false);
});