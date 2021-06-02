exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('schools')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        {
          school_name: 'Tshwane University of Technology',
          school_logo: '',
          school_name_short: 'TUT',
        },
        {
          // id: 2,
          school_name: 'University of Johannesburg',
          school_logo: '',
          school_name_short: 'UJ',
        },
        {
          // id: 3,
          school_name: 'University of South Africa',
          school_logo: '',
          school_name_short: 'UNISA',
        },
        {
          // id: 4,
          school_name: 'University of Pretoria',
          school_logo: '',
          school_name_short: 'UP',
        },
        {
          //  id: 5,
          school_name: 'University of Witswatersrand',
          school_logo: '',
          school_name_short: 'WITS',
        },
      ]);
    });
};
