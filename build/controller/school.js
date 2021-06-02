"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _school = _interopRequireDefault(require("../model/school"));

var _errorHandler = _interopRequireDefault(require("../middleware/errorHandler"));

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
    key: "createSchool",
    value: function () {
      var _createSchool = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, school_name, school_logo, payLoad;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, school_name = _req$body.school_name, school_logo = _req$body.school_logo;
                console.log(req.body);
                payLoad = {
                  school_name: school_name,
                  school_logo: school_logo || ''
                };
                _context.prev = 3;
                _context.next = 6;
                return _school["default"].createSchool(payLoad);

              case 6:
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success'
                  }
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

                if (_context.t0.routine == '_bt_check_unique') {
                  (0, _errorHandler["default"])(409, res, 'School name already exist');
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 9]]);
      }));

      function createSchool(_x, _x2) {
        return _createSchool.apply(this, arguments);
      }

      return createSchool;
    }()
  }, {
    key: "findAllSchool",
    value: function () {
      var _findAllSchool = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var rows;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _school["default"].getAllSchools();

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

      function findAllSchool(_x3, _x4) {
        return _findAllSchool.apply(this, arguments);
      }

      return findAllSchool;
    }()
  }, {
    key: "updateSchoolById",
    value: function () {
      var _updateSchoolById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var school_name, id, rows;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                school_name = req.body.school_name;
                id = req.params.id;
                _context3.next = 4;
                return _school["default"].patchSchoolById(id, {
                  school_name: school_name
                });

              case 4:
                rows = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    data: rows[0],
                    message: 'success'
                  }
                }));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateSchoolById(_x5, _x6) {
        return _updateSchoolById.apply(this, arguments);
      }

      return updateSchoolById;
    }()
  }, {
    key: "deleteSchoolById",
    value: function () {
      var _deleteSchoolById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.next = 3;
                return _school["default"].deleteSchoolById(id);

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

      function deleteSchoolById(_x7, _x8) {
        return _deleteSchoolById.apply(this, arguments);
      }

      return deleteSchoolById;
    }()
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=school.js.map