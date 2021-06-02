"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _degree = _interopRequireDefault(require("../controller/degree"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/degree', _validateInput["default"].degree, _helpers["default"].verifyToken, _degree["default"].createDegree);
router.get('/degrees', _helpers["default"].verifyToken, _degree["default"].findAllDegree);
router.put('/degree/:id', _validateInput["default"].degree, _validateInput["default"].params, _helpers["default"].verifyToken, _degree["default"].updateDegreeById);
router["delete"]('/degree/:id', _helpers["default"].verifyToken, _degree["default"].deleteDegreeById);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=degree.js.map