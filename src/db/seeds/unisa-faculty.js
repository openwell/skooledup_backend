exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('faculties').then(function () {
    // Inserts seed entries
    return knex('faculties').insert([
      {
        faculty_name: 'ACCOUNTANCY',
        school_id: 3,
      },
      {
        faculty_name: 'APPLIED ACCOUNTANCY',
        school_id: 3,
      },
      {
        faculty_name: 'AGRICULTURE AND LIFE SCIENCES',
        school_id: 3,
      },
      {
        faculty_name: 'ECOLOGICAL AND HUMAN SUSTAINABILITY',
        school_id: 3,
      },
      {
        faculty_name: 'ECONOMIC AND FINANCIAL SCIENCES',
        school_id: 3,
      },
      {
        faculty_name: 'MANAGEMENT SCIENCES',
        school_id: 3,
      },
      {
        faculty_name: 'PUBLIC AND OPERATIONS MANAGEMENT',
        school_id: 3,
      },
      {
        faculty_name: 'EDUCATIONAL STUDIES',
        school_id: 3,
      },
      {
        faculty_name: 'TEACHER EDUCATION',
        school_id: 3,
      },
      {
        faculty_name: 'ARTS',
        school_id: 3,
      },
      {
        faculty_name: 'HUMANITIES',
        school_id: 3,
      },
      {
        faculty_name: 'SOCIAL SCIENCES',
        school_id: 3,
      },
      {
        faculty_name: 'LAW',
        school_id: 3,
      },
      {
        faculty_name: 'CRIMINAL JUSTICE',
        school_id: 3,
      },
      {
        faculty_name: 'SCIENCES',
        school_id: 3,
      },
      {
        faculty_name: 'ENGINEERING',
        school_id: 3,
      },
      {
        faculty_name: 'COMPUTING',
        school_id: 3,
      },
    ]);
  });
};
