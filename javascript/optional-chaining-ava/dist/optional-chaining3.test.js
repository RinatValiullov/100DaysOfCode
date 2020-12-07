"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ava = _interopRequireDefault(require("ava"));

const data = {
  user: {
    address: {
      street: "main street",
      neighbors: ["john doe", "jane doe"]
    },

    getNeighbors() {
      return data.user.address.neighbors;
    }

  }
};

function getNeighbors(data) {
  var _data$user, _data$user$getNeighbo;

  return data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$getNeighbo = _data$user.getNeighbors) === null || _data$user$getNeighbo === void 0 ? void 0 : _data$user$getNeighbo.call(_data$user);
}

(0, _ava.default)("Optional chaining also works with functions", t => {
  const neighbors = getNeighbors(data);
  t.is(neighbors.length, 2);
  t.is(neighbors[0], "john doe");
});
(0, _ava.default)("Optional chaining returns undefined if a function does not exist", t => {
  const neighbors = getNeighbors({});
  t.is(neighbors, undefined);
});