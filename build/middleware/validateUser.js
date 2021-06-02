"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = _interopRequireDefault(require("../utils/helpers"));

var _auth = _interopRequireDefault(require("../model/auth"));

var _errorHandler = _interopRequireDefault(require("./errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var userValidation = /*#__PURE__*/function () {
  function userValidation() {
    _classCallCheck(this, userValidation);
  }

  _createClass(userValidation, null, [{
    key: "checkEmailExist",
    value: function () {
      var _checkEmailExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var row;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _auth["default"].getUserByEmail(req.body.email);

              case 3:
                row = _context.sent;

                if (!row) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", next(409));

              case 6:
                return _context.abrupt("return", next());

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _errorHandler["default"])(500, res, _context.t0));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function checkEmailExist(_x, _x2, _x3) {
        return _checkEmailExist.apply(this, arguments);
      }

      return checkEmailExist;
    }()
  }, {
    key: "checkEmailPassword",
    value: function () {
      var _checkEmailPassword = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var row;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _auth["default"].getUserByEmail(req.body.email);

              case 3:
                row = _context2.sent;

                if (row) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", (0, _errorHandler["default"])(401, res, 'Invalid Email'));

              case 8:
                if (_helpers["default"].comparePassword(row.password, req.body.password)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", (0, _errorHandler["default"])(401, res, 'Invalid Password'));

              case 10:
                req.user = row;
                return _context2.abrupt("return", next());

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", (0, _errorHandler["default"])(500, res, _context2.t0));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 14]]);
      }));

      function checkEmailPassword(_x4, _x5, _x6) {
        return _checkEmailPassword.apply(this, arguments);
      }

      return checkEmailPassword;
    }()
  }]);

  return userValidation;
}();

var _default = userValidation;
exports["default"] = _default;
//# sourceMappingURL=validateUser.js.map