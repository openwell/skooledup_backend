"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _course = _interopRequireDefault(require("../controller/course"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/course', //   validate.course,
_helpers["default"].verifyToken, _course["default"].createCourse);
router.get('/courses', _helpers["default"].verifyToken, _course["default"].findAllCourse);
router.get('/coursesByDepartDeg', _helpers["default"].verifyToken, _course["default"].findAllCourseByDepartDeg);
router.put('/course/:id', //   validate.course,
_validateInput["default"].params, _helpers["default"].verifyToken, _course["default"].updateCourseById);
router["delete"]('/course/:id', _helpers["default"].verifyToken, _course["default"].deleteCourseById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=course.js.map