"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _degree = _interopRequireDefault(require("../model/degree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, null, [{
    key: "createDegree",
    value: function () {
      var _createDegree = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var degree_name, payLoad;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                degree_name = req.body.degree_name;
                payLoad = {
                  degree_name: degree_name
                };
                _context.next = 4;
                return _degree["default"].createDegree(payLoad);

              case 4:
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success'
                  }
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createDegree(_x, _x2) {
        return _createDegree.apply(this, arguments);
      }

      return createDegree;
    }()
  }, {
    key: "findAllDegree",
    value: function () {
      var _findAllDegree = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var rows;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _degree["default"].getAllDegrees();

              case 2:
                rows = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success',
                    data: rows
                  }
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findAllDegree(_x3, _x4) {
        return _findAllDegree.apply(this, arguments);
      }

      return findAllDegree;
    }()
  }, {
    key: "updateDegreeById",
    value: function () {
      var _updateDegreeById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var degree_name, id, rows;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                degree_name = req.body.degree_name;
                id = req.params.id;
                _context3.next = 4;
                return _degree["default"].patchDegreeById(id, {
                  degree_name: degree_name
                });

              case 4:
                rows = _context3.sent;
                console.log(rows);
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    // data: rows[0],
                    message: 'success'
                  }
                }));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateDegreeById(_x5, _x6) {
        return _updateDegreeById.apply(this, arguments);
      }

      return updateDegreeById;
    }()
  }, {
    key: "deleteDegreeById",
    value: function () {
      var _deleteDegreeById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.next = 3;
                return _degree["default"].deleteDegreeById(id);

              case 3:
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'deleted successfully'
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteDegreeById(_x7, _x8) {
        return _deleteDegreeById.apply(this, arguments);
      }

      return deleteDegreeById;
    }()
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=degree.js.map