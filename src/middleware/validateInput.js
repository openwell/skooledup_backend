import { check, validationResult } from 'express-validator';
import errorHandler from './errorHandler';

function validatorFunction(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      errors: errors.array(),
    });
  }
  return next();
}

function paramsValidation(req, res, next) {
  let { id } = req.params;
  if (/^\d*$/.test(id)) {
    return next();
  }
  return errorHandler(400, res, 'params must be an integer');
}

function validationHandlerForIntegerInput(arg, min, max) {
  return check(arg)
    .trim()
    .escape()
    .matches(/^\d*$/)
    .withMessage('regex')
    .isLength({ min, max })
    .withMessage(`must be minimum of ${min} -${max} letters`)
    .isInt()
    .withMessage('must be an integer');
}

function validationHandlerForStringInput(arg, min, max) {
  return check(arg)
    .trim()
    .escape()
    .customSanitizer((value) => value.replace(/\s+/g, ' '))
    .matches(/^[a-zA-Z0-9 ,._'-]+$/i)
    .withMessage("Special Characters not Allowed expect (.,_'-)")
    .isLength({ min, max })
    .withMessage(`must be minimum of ${min} -${max} letters`)
    .isString()
    .withMessage('must be a string');
}

// names
function validationHandlerForStringInput1(arg, min, max) {
  return check(arg)
    .trim()
    .matches(/^[a-zA-Z,._'-]+$/i)
    .withMessage(
      "WhiteSpace, Integer and Special Characters not Allowed expect (.,_'-)"
    )
    .isLength({ min, max })
    .withMessage(`must be minimum of ${min} -${max} letters`)
    .isString()
    .escape()
    .withMessage('must be a string');
}

function validationHandlerForPassword(arg) {
  return check(arg)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'i')
    .withMessage(
      'Password must contain at least 8 characters, including 1 Upper / 1 Lowercase a Number'
    );
  // .custom((value, { req }) => {
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
}

function validateHappeningOn(arg) {
  return check(arg)
    .custom((value, { req }) => {
      const inputDate = Date.parse(value);
      if (!Number(inputDate)) {
        return false;
      }
      return value;
    })
    .withMessage(
      'happeningOn requires Date/time in this format (yyyy:mm:dd hh:mm:ss)'
    )
    .custom((value, { req }) => {
      const inputDate = Date.parse(value);
      const currentDate = Date.now();
      if (currentDate > inputDate) {
        return false;
      }
      return value;
    })
    .withMessage(
      'happeningOn requires future Date/time in this format (yyyy:mm:dd hh:mm:ss)'
    );
}

const middleware = {
  login: [
    check('email')
      .trim()
      .escape()
      .isEmail()
      .withMessage('Please provide a valid email'),
    check('password')
      .trim()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'i')
      .withMessage(
        'Password must contain at least 8 characters, including 1 Upper / 1 Lowercase a Number'
      ),
    validatorFunction,
  ],
  user: [
    check('name')
      .trim()
      .escape()
      .isString()
      .withMessage('Please provide a valid name'),
    check('email')
      .trim()
      .escape()
      .isEmail()
      .withMessage('Please provide a valid email'),
    validationHandlerForPassword('password'),
    validatorFunction,
  ],
  school: [
    check('school_name')
      .trim()
      .escape()
      .isString()
      .isLength({ min: 10 })
      .withMessage('must be at least 10 chars long'),
    validatorFunction,
  ],
  degree: [
    check('degree_name')
      .trim()
      .escape()
      .isString()
      .isLength({ min: 10 })
      .withMessage('must be at least 10 chars long'),
    check('school_id').isInt().withMessage('must be an integer'),
    validatorFunction,
  ],
  faculty: [
    check('faculty_name')
      .trim()
      .escape()
      .isString()
      .isLength({ min: 5 })
      .withMessage('must be at least 10 chars long'),
    check('degree_id').isInt().withMessage('must be an integer'),
    validatorFunction,
  ],
  department: [
    check('school_name')
      .trim()
      .escape()
      .isString()
      .isLength({ min: 5 })
      .withMessage('must be at least 10 chars long'),
    check('faculty_id').isInt().withMessage('must be an integer'),
    validatorFunction,
  ],
  course: [
    check('school_name')
      .trim()
      .escape()
      .isString()
      .isLength({ min: 5 })
      .withMessage('must be at least 10 chars long'),
    check('department_id').isInt().withMessage('must be an integer'),
    validatorFunction,
  ],
  params: [paramsValidation],
};
export default middleware;
