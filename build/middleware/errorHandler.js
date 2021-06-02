"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var errors = {
  400: 'please modify payload to meet specifications',
  401: 'you are not authorized to access this endpoint, Apologies',
  403: 'you are forbidden for accessing this resource, please provide valid authentication',
  404: "whatever it is you were looking for wasn't found",
  405: 'the request method used is not supported, please refer to API docs',
  409: 'Email already registered',
  500: 'something happened on our end, try again. Apologies'
};

var createError = function createError(error, res) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  console.log(message, 'error');
  var errorCode = error.status || error;
  var errorMessage = error.message || message || errors[error];
  res.status(errorCode).json({
    status: errorCode,
    error: errorMessage
  });
};

var _default = createError;
exports["default"] = _default;
//# sourceMappingURL=errorHandler.js.map