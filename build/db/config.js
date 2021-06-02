"use strict";

var knex = require('knex');

var knexConfig = require('../../knexfile');

var environment = process.env.DB_ENV || 'development';
module.exports = knex(knexConfig[environment]);
//# sourceMappingURL=config.js.map