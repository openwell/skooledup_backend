import 'core-js/stable';
require('@babel/register');
import 'regenerator-runtime/runtime';
require('dotenv').config(); // load .env variables

const app = require('./src/app').default;

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
export default server;
// server.once('SIGUSR2', function () {
//   process.kill(process.pid, 'SIGUSR2');
// });
