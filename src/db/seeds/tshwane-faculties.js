exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('faculties')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('faculties').insert([
        {
          // id: 1,
          faculty_name: 'Arts and Design',
          school_id: 1,
        },
        {
          // id: 2,
          faculty_name: 'Economics and Finance',
          school_id: 1,
        },
        {
          // id: 3,
          faculty_name: 'Engineering and the Built Environment',
          school_id: 1,
        },
        {
          // id: 4,
          faculty_name: 'Humanities',
          school_id: 1,
        },
        {
          // id: 5,
          faculty_name: 'Information and Communication Technology',
          school_id: 1,
        },
        {
          // id: 6,
          faculty_name: 'Management Sciences',
          school_id: 1,
        },
        {
          // id: 7,
          faculty_name: 'Science',
          school_id: 1,
        },
      ]);
    });
};
