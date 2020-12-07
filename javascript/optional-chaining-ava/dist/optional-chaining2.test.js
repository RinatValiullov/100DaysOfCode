"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

const valid = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"]
    }
  }
};

function getNeighbor(data, number) {
  var _data$user, _data$user$address, _data$user$address$ne;

  return data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$address = _data$user.address) === null || _data$user$address === void 0 ? void 0 : (_data$user$address$ne = _data$user$address.neighbors) === null || _data$user$address$ne === void 0 ? void 0 : _data$user$address$ne[number];
}

(0, _ava.default)("Optional chaining works for array properties", t => {
  t.is(getNeighbor(valid, 0), "john doe");
});
(0, _ava.default)("Optional chaining returns undefined for invalid array properties", t => {
  t.is(getNeighbor({}, 0), undefined);
});