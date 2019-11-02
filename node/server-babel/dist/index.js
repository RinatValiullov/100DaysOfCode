"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello, Babel and Node!\n');
}).listen(4327, 'localhost');

console.log("Server running at http://localhost:4327");
var _default = server;
exports["default"] = _default;