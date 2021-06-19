exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('faculties').then(function () {
    // Inserts seed entries
    return knex('faculties').insert([
      {
        faculty_name: 'Arts, Design and Architecture',
        school_id: 2,
      },
      {
        faculty_name: 'Education',
        school_id: 2,
      },
      {
        faculty_name: 'Engineering and the Built Environment',
        school_id: 2,
      },
      {
        faculty_name: 'HEALTH SCIENCES',
        school_id: 2,
      },
      {
        faculty_name: 'HUMANITIES',
        school_id: 2,
      },
      {
        faculty_name: 'COMMUNICATIONS',
        school_id: 2,
      },
      {
        faculty_name: 'LAW',
        school_id: 2,
      },
      {
        faculty_name: 'SCIENCES',
        school_id: 2,
      },
    ]);
  });
};
