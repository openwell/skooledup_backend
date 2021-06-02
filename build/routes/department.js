"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _department = _interopRequireDefault(require("../controller/department"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/department', _validateInput["default"].department, _helpers["default"].verifyToken, _department["default"].createDepartment);
router.get('/departments', _helpers["default"].verifyToken, _department["default"].findAllDepartment);
router.get('/departmentsByFacultyId/:id', _validateInput["default"].params, _helpers["default"].verifyToken, _department["default"].findAllDepartmentsByFacultyId);
router.put('/department/:id', // validate.department,
_validateInput["default"].params, _helpers["default"].verifyToken, _department["default"].updateDepartmentById);
router["delete"]('/department/:id', _helpers["default"].verifyToken, _department["default"].deleteDepartmentById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=department.js.map