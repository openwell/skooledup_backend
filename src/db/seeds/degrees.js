exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('degrees')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('degrees').insert([
        {
          // id: 1,
          degree_name: 'Undergraduate',
        },
        {
          // id: 2,
          degree_name: 'Honours',
        },
        {
          // id: 3,
          degree_name: 'Online Short Course',
        },
        {
          // id: 4,
          degree_name: 'Postgraduate',
        },
      ]);
    });
};
