// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'skooledup',
      user: 'teami',
      password: '080timi2323',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/db/seeds' },
  },

  staging: {
    client: 'sqlite3',
    connection: { filename: './src/db/university.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './src/db/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './src/db/seeds' },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
