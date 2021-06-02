"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controller/auth"));

var _validateInput = _interopRequireDefault(require("../middleware/validateInput"));

var _validateUser = _interopRequireDefault(require("../middleware/validateUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import admin from '../controller/adminController';
// import adminValidate from '../middleware/validateAdmin';
var router = _express["default"].Router();

router.get('/', function (req, res) {
  return res.status(200).json({
    status: 200,
    data: 'Welcome'
  });
});
router.post('/auth/signup', _validateInput["default"].user, _validateUser["default"].checkEmailExist, _auth["default"].signup);
router.post('/auth/login', _validateInput["default"].login, _validateUser["default"].checkEmailPassword, _auth["default"].login); // router.post('/auth/admin',
//   validate.login,
//   adminValidate.checkEmailPassword,
//   admin.login);

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map