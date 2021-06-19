exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('faculties').then(function () {
    // Inserts seed entries
    return knex('faculties').insert([
      {
        faculty_name: 'SCHOOL OF COMMERCE, LAW AND MANAGEMENT',
        school_id: 5,
      },
      {
        faculty_name: 'Engineering and the built Environment',
        school_id: 5,
      },
      {
        faculty_name: 'Health Sciences',
        school_id: 5,
      },
      {
        faculty_name: 'Humanities',
        school_id: 5,
      },
      {
        faculty_name: 'EDUCATION',
        school_id: 5,
      },
      {
        faculty_name: 'HUMAN AND COMMUNITY DEVELOPMENT',
        school_id: 5,
      },
      {
        faculty_name: 'LITERATURE, LANGUAGE AND MEDIA',
        school_id: 5,
      },
      {
        faculty_name: 'SOCIAL SCIENCE',
        school_id: 5,
      },
      {
        faculty_name: 'SCIENCE',
        school_id: 5,
      },
    ]);
  });
};
