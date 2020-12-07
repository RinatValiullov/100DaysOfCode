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

let neighborCount = 0;

function getNextNeighbor(neighbors) {
  return neighbors === null || neighbors === void 0 ? void 0 : neighbors[++neighborCount];
}

(0, _ava.default)("It short circuits expressions", t => {
  const neighbors = getNeighbors(data);
  t.is(getNextNeighbor(neighbors), "jane doe");
  t.is(getNextNeighbor(undefined), undefined);
  t.is(neighborCount, 1);
});