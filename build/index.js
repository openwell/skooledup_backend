"use strict";

require('core-js/stable');

require('@babel/register');

require('regenerator-runtime/runtime');

require('dotenv').config(); // load .env variables


var app = require('./app')["default"];

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("\n=== Server listening on port ".concat(port, "\n"));
}); // server.once('SIGUSR2', function () {
//   process.kill(process.pid, 'SIGUSR2');
// });
//# sourceMappingURL=index.js.map