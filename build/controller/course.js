"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _course = _interopRequireDefault(require("../model/course"));

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
    key: "createCourse",
    value: function () {
      var _createCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var _req$body, course_name, department_id, degree_id, dur, tui_fee_local, tui_fee_int, levy, levy_non_african, local_app_fee_online, local_app_fee_paper, int_app_fee_online, int_app_fee_paper, study_mode_full_time, study_mode_part_time, min_req_local_aps, min_req_local_eng, min_req_local_add_lang, min_req_local_math, min_req_international, online_classes, app_opening_date, app_closing_date, note, hero_image, payLoad;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, course_name = _req$body.course_name, department_id = _req$body.department_id, degree_id = _req$body.degree_id, dur = _req$body.dur, tui_fee_local = _req$body.tui_fee_local, tui_fee_int = _req$body.tui_fee_int, levy = _req$body.levy, levy_non_african = _req$body.levy_non_african, local_app_fee_online = _req$body.local_app_fee_online, local_app_fee_paper = _req$body.local_app_fee_paper, int_app_fee_online = _req$body.int_app_fee_online, int_app_fee_paper = _req$body.int_app_fee_paper, study_mode_full_time = _req$body.study_mode_full_time, study_mode_part_time = _req$body.study_mode_part_time, min_req_local_aps = _req$body.min_req_local_aps, min_req_local_eng = _req$body.min_req_local_eng, min_req_local_add_lang = _req$body.min_req_local_add_lang, min_req_local_math = _req$body.min_req_local_math, min_req_international = _req$body.min_req_international, online_classes = _req$body.online_classes, app_opening_date = _req$body.app_opening_date, app_closing_date = _req$body.app_closing_date, note = _req$body.note, hero_image = _req$body.hero_image;
                payLoad = {
                  course_name: course_name,
                  department_id: department_id,
                  degree_id: degree_id,
                  // string
                  duration: dur,
                  tuition_fee_local: tui_fee_local || '',
                  tuition_fee_int: tui_fee_int || '',
                  levy: levy || '',
                  levy_non_african: levy_non_african || '',
                  local_application_fee_online: local_app_fee_online || '',
                  local_application_fee_paper: local_app_fee_paper || '',
                  international_application_fee_online: int_app_fee_online || '',
                  international_application_fee_paper: int_app_fee_paper || '',
                  study_mode_full_time: study_mode_full_time || '',
                  study_mode_part_time: study_mode_part_time || '',
                  min_req_local_aps: min_req_local_aps || '',
                  min_req_local_english: min_req_local_eng || '',
                  min_req_local_additional_lang: min_req_local_add_lang || '',
                  min_req_local_mathematics: min_req_local_math || '',
                  min_req_international: min_req_international || '',
                  online_classes: online_classes || '',
                  //   dates
                  application_opening_date: app_opening_date || '',
                  application_closing_date: app_closing_date || '',
                  //   text
                  note: note || '',
                  hero_image: hero_image || ''
                };
                _context.prev = 2;
                _context.next = 5;
                return _course["default"].createCourse(payLoad);

              case 5:
                return _context.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success'
                  }
                }));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
                return _context.abrupt("return", res.status(500).json({
                  status: 500,
                  data: {
                    message: 'error',
                    error: _context.t0
                  }
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      function createCourse(_x, _x2) {
        return _createCourse.apply(this, arguments);
      }

      return createCourse;
    }()
  }, {
    key: "findAllCourse",
    value: function () {
      var _findAllCourse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var rows;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _course["default"].getAllCourses();

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

      function findAllCourse(_x3, _x4) {
        return _findAllCourse.apply(this, arguments);
      }

      return findAllCourse;
    }()
  }, {
    key: "findAllCourseByDepartDeg",
    value: function () {
      var _findAllCourseByDepartDeg = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var _req$query, department_id, degree_id, rows;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _req$query = req.query, department_id = _req$query.department_id, degree_id = _req$query.degree_id;
                console.log(department_id, degree_id);
                _context3.prev = 2;
                _context3.next = 5;
                return _course["default"].getAllCoursesByDepartDeg({
                  department_id: department_id,
                  degree_id: degree_id
                });

              case 5:
                rows = _context3.sent;
                return _context3.abrupt("return", res.status(200).json({
                  status: 200,
                  data: {
                    message: 'success',
                    data: rows
                  }
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", res.status(500).json({
                  status: 500,
                  data: {
                    message: 'error',
                    error: _context3.t0
                  }
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 9]]);
      }));

      function findAllCourseByDepartDeg(_x5, _x6) {
        return _findAllCourseByDepartDeg.apply(this, arguments);
      }

      return findAllCourseByDepartDeg;
    }()
  }, {
    key: "updateCourseById",
    value: function () {
      var _updateCourseById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var course_name, id, rows;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                course_name = req.body.course_name;
                id = req.params.id;
                _context4.next = 4;
                return _course["default"].patchCourseById(id, {
                  course_name: course_name
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

      function updateCourseById(_x7, _x8) {
        return _updateCourseById.apply(this, arguments);
      }

      return updateCourseById;
    }()
  }, {
    key: "deleteCourseById",
    value: function () {
      var _deleteCourseById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var id;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;
                _context5.next = 3;
                return _course["default"].deleteCourseById(id);

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

      function deleteCourseById(_x9, _x10) {
        return _deleteCourseById.apply(this, arguments);
      }

      return deleteCourseById;
    }()
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=course.js.map