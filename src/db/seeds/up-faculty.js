exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('faculties').then(function () {
    // Inserts seed entries
    return knex('faculties').insert([
      {
        faculty_name: 'ECONOMIC AND MANAGEMENT SCIENCES',
        school_id: 4,
      },
      {
        faculty_name: 'EDUCATION',
        school_id: 4,
      },
      {
        faculty_name: 'ENGINEERING',
        school_id: 4,
      },
      {
        faculty_name: 'BUILT ENVIRONMENT',
        school_id: 4,
      },
      {
        faculty_name: 'INFORMATION TECHNOLOGY',
        school_id: 4,
      },
      {
        faculty_name: 'DENTISTRY',
        school_id: 4,
      },
      {
        faculty_name: 'HEALTH CARE SCIENCES',
        school_id: 4,
      },
      {
        faculty_name: 'HEALTH SYSTEMS AND PUBLIC HEALTH',
        school_id: 4,
      },
      {
        faculty_name: 'MEDICINE',
        school_id: 4,
      },
      {
        faculty_name: 'ARTS',
        school_id: 4,
      },
      {
        faculty_name: 'SOCIAL SCIENCES',
        school_id: 4,
      },
      {
        faculty_name: 'LAW',
        school_id: 4,
      },
      {
        faculty_name: 'NATURAL AND AGRICULTURAL SCIENCES',
        school_id: 4,
      },
      {
        faculty_name: 'THEOLOGY AND RELIGION',
        school_id: 4,
      },
      {
        faculty_name: 'VETERINARY SCIENCES',
        school_id: 4,
      },
    ]);
  });
};
