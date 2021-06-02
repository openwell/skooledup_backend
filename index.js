require('core-js/stable');
require('@babel/register');
require('regenerator-runtime/runtime');
require('dotenv').config(); // load .env variables

let source = process.env.NODE_ENV == 'production' ? './build/app' : './src/app';
const app = require(source).default;

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
// server.once('SIGUSR2', function () {
//   process.kill(process.pid, 'SIGUSR2');
// });
