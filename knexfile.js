// Update with your config settings.
require('dotenv').config();
module.exports = {
  // development: {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.DEV_HOST,
  //     database: process.env.DEV_DATABASE,
  //     user: process.env.DEV_USER,
  //     password: process.env.DEV_PASSWORD,
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './src/db/migrations',
  //     tableName: 'dbmigrations',
  //   },
  //   seeds: { directory: './src/db/seeds' },
  // },
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/db/seeds' },
  },
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
