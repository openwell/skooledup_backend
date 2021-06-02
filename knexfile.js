// Update with your config settings.
require('dotenv').config();
module.exports = {
  // development production
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/db/seeds' },
  },
  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     database: 'skooledup',
  //     user: 'teami',
  //     password: '080timi2323',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './src/db/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './src/db/seeds' },
  // },
  // staging: {
  //   client: 'sqlite3',
  //   connection: { filename: './src/db/university.db3' },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './src/db/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './src/db/seeds' },
  //   // pool: {
  //   //   min: 2,
  //   //   max: 10
  //   // },
  //   // migrations: {
  //   //   tableName: 'knex_migrations'
  //   // }
  // },
};
