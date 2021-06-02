"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _errorHandler = _interopRequireDefault(require("./errorHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function validatorFunction(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      errors: errors.array()
    });
  }

  return next();
}

function paramsValidation(req, res, next) {
  var id = req.params.id;

  if (/^\d*$/.test(id)) {
    return next();
  }

  return (0, _errorHandler["default"])(400, res, 'params must be an integer');
} // function validationHandlerForIntegerInput(arg, min, max) {
//   return check(arg)
//     .trim()
//     .escape()
//     .matches(/^\d*$/)
//     .withMessage('regex')
//     .isLength({ min, max })
//     .withMessage(`must be minimum of ${min} -${max} letters`)
//     .isInt()
//     .withMessage('must be an integer');
// }
// function validationHandlerForStringInput(arg, min, max) {
//   return check(arg)
//     .trim()
//     .escape()
//     .customSanitizer((value) => value.replace(/\s+/g, ' '))
//     .matches(/^[a-zA-Z0-9 ,._'-]+$/i)
//     .withMessage("Special Characters not Allowed expect (.,_'-)")
//     .isLength({ min, max })
//     .withMessage(`must be minimum of ${min} -${max} letters`)
//     .isString()
//     .withMessage('must be a string');
// }
// names
// function validationHandlerForStringInput1(arg, min, max) {
//   return check(arg)
//     .trim()
//     .matches(/^[a-zA-Z,._'-]+$/i)
//     .withMessage(
//       "WhiteSpace, Integer and Special Characters not Allowed expect (.,_'-)"
//     )
//     .isLength({ min, max })
//     .withMessage(`must be minimum of ${min} -${max} letters`)
//     .isString()
//     .escape()
//     .withMessage('must be a string');
// }


function validationHandlerForPassword(arg) {
  return (0, _expressValidator.check)(arg).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'i').withMessage('Password must contain at least 8 characters, including 1 Upper / 1 Lowercase a Number'); // .custom((value, { req }) => {
  //   if (req.body.confirmPassword === undefined) {
  //     return false;
  //   } return true;
  // })
  // .withMessage('Confirm password is required')
  // .custom((value, { req }) => {
  //   if (value !== req.body.confirmPassword) {
  //     return false;
  //   }
  //   return value;
  // })
  // .withMessage("Passwords don't match.");
} // function validateHappeningOn(arg) {
//   return check(arg)
//     .custom((value, { req }) => {
//       const inputDate = Date.parse(value);
//       if (!Number(inputDate)) {
//         return false;
//       }
//       return value;
//     })
//     .withMessage(
//       'happeningOn requires Date/time in this format (yyyy:mm:dd hh:mm:ss)'
//     )
//     .custom((value, { req }) => {
//       const inputDate = Date.parse(value);
//       const currentDate = Date.now();
//       if (currentDate > inputDate) {
//         return false;
//       }
//       return value;
//     })
//     .withMessage(
//       'happeningOn requires future Date/time in this format (yyyy:mm:dd hh:mm:ss)'
//     );
// }


var middleware = {
  login: [(0, _expressValidator.check)('email').trim().escape().isEmail().withMessage('Please provide a valid email'), (0, _expressValidator.check)('password').trim().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'i').withMessage('Password must contain at least 8 characters, including 1 Upper / 1 Lowercase a Number'), validatorFunction],
  user: [(0, _expressValidator.check)('name').trim().escape().isString().withMessage('Please provide a valid name'), (0, _expressValidator.check)('email').trim().escape().isEmail().withMessage('Please provide a valid email'), validationHandlerForPassword('password'), validatorFunction],
  school: [(0, _expressValidator.check)('school_name').trim().escape().isString().isLength({
    min: 5
  }).withMessage('must be at least 5 chars long'), validatorFunction],
  degree: [(0, _expressValidator.check)('degree_name').trim().escape().isString().isLength({
    min: 5
  }).withMessage('must be at least 5 chars long'), validatorFunction],
  faculty: [(0, _expressValidator.check)('faculty_name').trim().escape().isString().isLength({
    min: 5
  }).withMessage('must be at least 5 chars long'), (0, _expressValidator.check)('school_id').isInt().withMessage('must be an integer'), validatorFunction],
  department: [(0, _expressValidator.check)('department_name').trim().escape().isString().isLength({
    min: 5
  }).withMessage('must be at least 5 chars long'), (0, _expressValidator.check)('faculty_id').isInt().withMessage('must be an integer'), validatorFunction],
  course: [(0, _expressValidator.check)('course_name').trim().escape().isString().isLength({
    min: 5
  }).withMessage('must be at least 5 chars long'), //others
  (0, _expressValidator.check)('department_id').isInt().withMessage('must be an integer'), (0, _expressValidator.check)('degree_id').isInt().withMessage('must be an integer'), validatorFunction],
  params: [paramsValidation]
};
var _default = middleware;
exports["default"] = _default;
//# sourceMappingURL=validateInput.js.map