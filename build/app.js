"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _school = _interopRequireDefault(require("./routes/school"));

var _faculty = _interopRequireDefault(require("./routes/faculty"));

var _department = _interopRequireDefault(require("./routes/department"));

var _degree = _interopRequireDefault(require("./routes/degree"));

var _course = _interopRequireDefault(require("./routes/course"));

var _errorHandler = _interopRequireDefault(require("./middleware/errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helmet = require('helmet');

var app = (0, _express["default"])();
app.use(helmet());
app.use((0, _morgan["default"])('common'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/api/v1', _auth["default"], _school["default"], _faculty["default"], _department["default"], _degree["default"], _course["default"]); // app.use('/api/v1', facultyRoute);

app.all('*', function (req, res) {
  res.redirect(301, '/api/v1');
}); // because u passed something to next() it will terminate the call stack and call this.

app.use(function (err, req, res, next) {
  (0, _errorHandler["default"])(err, res);
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map