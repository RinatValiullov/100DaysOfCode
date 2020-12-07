"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

const valid = {
  user: {
    address: {
      street: "Perlamutrovaya street"
    }
  }
};

function getAddress(data) {
  var _data$user, _data$user$address;

  return data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$address = _data$user.address) === null || _data$user$address === void 0 ? void 0 : _data$user$address.street;
}

(0, _ava.default)("Optional chaining returns real value", t => {
  const result = getAddress(valid);
  t.is(result, "Perlamutrovaya street");
});
(0, _ava.default)("Optional chaining returns undefined for nullish properties", t => {
  t.is(getAddress(), undefined);
  t.is(getAddress(null), undefined);
  t.is(getAddress({}), undefined);
});