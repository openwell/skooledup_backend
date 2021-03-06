exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('role', 255).notNullable();
    tbl.string('email', 255).notNullable().unique();
    tbl.string('password', 255).notNullable();
    tbl.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};

