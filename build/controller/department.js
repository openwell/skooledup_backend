"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var model = _interopRequireWildcard(require("../model/department"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    key: "createDepartment",
    value: function () {
      var _createDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, department_name, faculty_id, payLoad;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, department_name = _req$body.department_name, faculty_id = _req$body.faculty_id;
                payLoad = {
                  department_name: department_name,
                  faculty_id: faculty_id
                };
                _context.next = 4;
                return model.createDepartment(payLoad);

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

      function createDepartment(_x, _x2) {
        return _createDepartment.apply(this, arguments);
      }

      return createDepartment;
    }()
  }, {
    key: "findAllDepartment",
    value: function () {
      var _findAllDepartment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var rows;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return model.getAllDepartments();

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

      function findAllDepartment(_x3, _x4) {
        return _findAllDepartment.apply(this, arguments);
      }

      return findAllDepartment;
    }()
  }, {
    key: "findAllDepartmentsByFacultyId",
    value: function () {
      var _findAllDepartmentsByFacultyId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var id, rows;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.next = 3;
                return model.getAllDepartmentsByFacultyId(id);

              case 3:
                rows = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success',
                    data: rows
                  }
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function findAllDepartmentsByFacultyId(_x5, _x6) {
        return _findAllDepartmentsByFacultyId.apply(this, arguments);
      }

      return findAllDepartmentsByFacultyId;
    }()
  }, {
    key: "updateDepartmentById",
    value: function () {
      var _updateDepartmentById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var department_name, id, rows;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                department_name = req.body.department_name;
                id = req.params.id;
                _context4.next = 4;
                return model.patchDepartmentById(id, {
                  department_name: department_name
                });

              case 4:
                rows = _context4.sent;
                console.log(rows);
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    // data: rows[0],
                    message: 'success'
                  }
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateDepartmentById(_x7, _x8) {
        return _updateDepartmentById.apply(this, arguments);
      }

      return updateDepartmentById;
    }()
  }, {
    key: "deleteDepartmentById",
    value: function () {
      var _deleteDepartmentById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _context5.next = 3;
                return model.deleteDepartmentById(id);

              case 3:
                return _context5.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'deleted successfully'
                  }
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteDepartmentById(_x9, _x10) {
        return _deleteDepartmentById.apply(this, arguments);
      }

      return deleteDepartmentById;
    }()
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=department.js.map