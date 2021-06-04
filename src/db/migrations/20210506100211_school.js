exports.up = function (knex) {
  return knex.schema
    .createTable('schools', (tbl) => {
      tbl.increments();
      tbl.string('school_name', 255).notNullable().unique();
      tbl.string('school_name_short', 255);
      tbl.text('school_logo');
      tbl.timestamps(false, true);
    })
    .createTable('faculties', (tbl) => {
      tbl.increments();
      tbl.string('faculty_name', 255).notNullable();
      tbl
        .integer('school_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schools')
        .onDelete('CASCADE');
      tbl.timestamps(false, true);
    })
    .createTable('departments', (tbl) => {
      tbl.increments();
      tbl.string('department_name', 255).notNullable();
      tbl
        .integer('faculty_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('faculties')
        .onDelete('CASCADE');
      tbl.timestamps(false, true);
    })
    .createTable('degrees', (tbl) => {
      tbl.increments();
      tbl.string('degree_name', 255).notNullable();
      tbl.timestamps(false, true);
    })
    .createTable('courses', (tbl) => {
      tbl.increments();
      tbl.string('course_name', 255).notNullable();
      tbl
        .integer('department_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('departments')
        .onDelete('CASCADE');
      tbl
        .integer('degree_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('degrees')
        .onDelete('CASCADE');
      tbl.string('duration', 255);
      tbl.string('tuition_fee_local', 255);
      tbl.string('tuition_fee_int', 255);
      tbl.string('levy', 255);
      tbl.string('levy_non_african', 255);
      tbl.string('local_application_fee_online', 255);
      tbl.string('local_application_fee_paper', 255);
      tbl.string('international_application_fee_online', 255);
      tbl.string('international_application_fee_paper', 255);
      tbl.string('study_mode_full_time', 255);
      tbl.string('study_mode_part_time', 255);
      tbl.string('min_req_local_aps', 255);
      tbl.string('min_req_local_english', 255);
      tbl.string('min_req_local_additional_lang', 255);
      tbl.string('min_req_local_mathematics', 255);
      tbl.string('min_req_local_physics', 255);
      tbl.text('min_req_international');
      tbl.date('application_opening_date');
      tbl.date('application_closing_date');
      tbl.string('online_classes', 255);
      tbl.text('note');
      tbl.text('hero_image');
      tbl.timestamps(false, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('courses')
    .dropTableIfExists('degrees')
    .dropTableIfExists('departments')
    .dropTableIfExists('faculties')
    .dropTableIfExists('schools');
};
