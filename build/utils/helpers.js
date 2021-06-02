"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = _interopRequireDefault(require("../model/auth"));

var _errorHandler = _interopRequireDefault(require("../middleware/errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var auth = /*#__PURE__*/function () {
  function auth() {
    _classCallCheck(this, auth);
  }

  _createClass(auth, null, [{
    key: "hashPassword",
    value: function hashPassword(password) {
      return _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(8));
    }
  }, {
    key: "comparePassword",
    value: function comparePassword(hashPassword, password) {
      return _bcryptjs["default"].compareSync(password, hashPassword);
    }
  }, {
    key: "generateToken",
    value: function generateToken(id, isAdmin) {
      var token = _jsonwebtoken["default"].sign({
        userId: id,
        isAdmin: isAdmin
      }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      return token;
    }
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                return _context.abrupt("return", next());

              case 4:
                _context.prev = 4;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", (0, _errorHandler["default"])(401, res, _context.t0));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 4]]);
      }));

      function verifyToken(_x, _x2, _x3) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }() // static async adminVerifyToken(req, res, next) {
    //   const token = req.headers.tokens;
    //   if (!token) {
    //     return errorHandler(401, res, 'Token is not provided');
    //   }
    //   try {
    //     const decoded = await jwt.verify(token, process.env.SECRET);
    //     if (decoded.isAdmin === 'false') {
    //       return errorHandler(403, res, 'Token Forbidden');
    //     }
    //     const { rows } = await db.query(queries.selectById('admins', 'id', decoded.userId));
    //     if (!rows[0]) {
    //       return errorHandler(401, res, 'Invalid token');
    //     }
    //     req.user = { id: decoded.userId, isadmin: decoded.isAdmin };
    //     return next();
    //   } catch (error) {
    //     return errorHandler(401, res, error);
    //   }
    // }

  }]);

  return auth;
}();

var _default = auth;
exports["default"] = _default;
//# sourceMappingURL=helpers.js.map