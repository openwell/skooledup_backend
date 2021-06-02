"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _school = _interopRequireDefault(require("../controller/school"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/school', _validateInput["default"].school, _helpers["default"].verifyToken, _school["default"].createSchool);
router.get('/schools', _helpers["default"].verifyToken, _school["default"].findAllSchool);
router.put('/school/:id', _validateInput["default"].school, _validateInput["default"].params, _helpers["default"].verifyToken, _school["default"].updateSchoolById);
router["delete"]('/school/:id', _helpers["default"].verifyToken, _school["default"].deleteSchoolById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=school.js.map