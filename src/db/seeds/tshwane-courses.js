exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('courses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {
          // id: 1,
          course_name: 'Undergraduate',
          department_id: 1,
          degree_id: 1,
          // string
          duration: 'Undergraduate',
          tuition_fee_local: 'Undergraduate',
          international_fee_local: 'Undergraduate',
          levy: 'Undergraduate',
          local_application_fee_online: 'Undergraduate',
          local_application_fee_paper: 'Undergraduate',
          international_application_fee_online: 'Undergraduate',
          international_application_fee_paper: 'Undergraduate',
          study_mode_full_time: 'Undergraduate',
          study_mode_part_time: 'Undergraduate',
          international_min_req_local_aps: 'Undergraduate',
          international_min_req_local_english: 'Undergraduate',
          international_min_req_local_additional_lang: 'Undergraduate',
          international_min_req_local_mathematics: 'Undergraduate',
          //   dates
          application_opening_date: 'Undergraduate',
          application_closing_date: 'Undergraduate',
          //   text
          note: 'Undergraduate',
          hero_image: 'Undergraduate',
        },
      ]);
    });
};
