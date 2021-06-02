"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _faculty = _interopRequireDefault(require("../controller/faculty"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/faculty', _validateInput["default"].faculty, _helpers["default"].verifyToken, _faculty["default"].createFaculty);
router.get('/faculties', _helpers["default"].verifyToken, _faculty["default"].findAllFaculties);
router.get('/facultiesBySchoolId/:id', _validateInput["default"].params, _helpers["default"].verifyToken, _faculty["default"].findAllFacultiesBySchoolId);
router.put('/faculty/:id', // validate.faculty,
_validateInput["default"].params, _helpers["default"].verifyToken, _faculty["default"].updateFacultyById);
router["delete"]('/faculty/:id', _helpers["default"].verifyToken, _faculty["default"].deleteFacultyById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=faculty.js.map