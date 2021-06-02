"use strict";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('departments').del().then(function () {
    // Inserts seed entries
    return knex('departments').insert([//   Art and design id 1
    {
      // id: 1,
      department_name: 'Design Studies',
      faculty_id: 1
    }, {
      // id: 2,
      department_name: 'Fine and Studio Arts',
      faculty_id: 1
    }, {
      // id: 3,
      department_name: 'Interior Design',
      faculty_id: 1
    }, {
      // id: 4,
      department_name: 'Performing Arts',
      faculty_id: 1
    }, {
      // id: 5,
      department_name: 'Visual Communications',
      faculty_id: 1
    }, //   Economics and finance id 2
    {
      // id: 6,
      department_name: 'Accounting',
      faculty_id: 2
    }, {
      // id: 7,
      department_name: 'Auditing',
      faculty_id: 2
    }, {
      // id: 8,
      department_name: 'Economics',
      faculty_id: 2
    }, {
      // id: 9,
      department_name: 'Finance and Investment',
      faculty_id: 2
    }, {
      // id: 10,
      department_name: 'Public Sector Finance',
      faculty_id: 2
    }, //Engineering and the Built Environment
    {
      // id: 11,
      department_name: 'Architecture and Industrial Design',
      faculty_id: 3
    }, {
      // id: 12,
      department_name: 'Building Sciences',
      faculty_id: 3
    }, {
      // id: 13,
      department_name: 'Chemical, Metallurgical and Materials Engineering',
      faculty_id: 3
    }, {
      // id: 14,
      department_name: 'Civil Engineering',
      faculty_id: 3
    }, {
      // id: 15,
      department_name: 'Electrical Engineering',
      faculty_id: 3
    }, {
      // id: 16,
      department_name: 'Geomatics',
      faculty_id: 3
    }, {
      // id: 17,
      department_name: 'Industrial Engineering',
      faculty_id: 3
    }, {
      // id: 18,
      department_name: 'Mechanical and Mechatronics Engineering',
      faculty_id: 3
    }, //Humanities
    {
      // id: 19,
      department_name: 'Applied Languages',
      faculty_id: 4
    }, {
      // id: 20,
      department_name: 'Integrated Communication',
      faculty_id: 4
    }, {
      // id: 21,
      department_name: 'Journalism',
      faculty_id: 4
    }, {
      // id: 22,
      department_name: 'Law',
      faculty_id: 4
    }, {
      // id: 23,
      department_name: 'Public Management',
      faculty_id: 4
    }, {
      // id: 24,
      department_name: 'Safety and Security Management',
      faculty_id: 4
    }, {
      // id: 25,
      department_name: 'School of Education',
      faculty_id: 4
    }, //Information and Communication Technology
    {
      // id: 26,
      department_name: 'Computer Science',
      faculty_id: 5
    }, {
      // id: 27,
      department_name: 'Computer Systems Engineering',
      faculty_id: 5
    }, {
      // id: 28,
      department_name: 'ICT First Years and Foundation Unit',
      faculty_id: 5
    }, {
      // id: 29,
      department_name: 'Informatics',
      faculty_id: 5
    }, {
      // id: 30,
      department_name: 'Information Technology',
      faculty_id: 5
    }, //Management Sciences
    {
      // id: 31,
      department_name: 'Business and Information Management Services',
      faculty_id: 6
    }, {
      // id: 32,
      department_name: 'Hospitality Management',
      faculty_id: 6
    }, {
      // id: 33,
      department_name: 'Management and Entrepreneurship',
      faculty_id: 6
    }, {
      // id: 34,
      department_name: 'Marketing, Supply Chain and Sport Management',
      faculty_id: 6
    }, {
      // id: 35,
      department_name: 'Operations Management',
      faculty_id: 6
    }, {
      // id: 36,
      department_name: 'People Management and Development',
      faculty_id: 6
    }, {
      // id: 37,
      department_name: 'Tourism Management',
      faculty_id: 6
    }, {
      // id: 38,
      department_name: 'Tshwane School for Business and Society          ',
      faculty_id: 6
    }, //  Sciences
    {
      // id: 39,
      department_name: 'Adelaide Tambo School of Nursing Science',
      faculty_id: 7
    }, {
      // id: 40,
      department_name: 'Animal Sciences',
      faculty_id: 7
    }, {
      // id: 41,
      department_name: 'Biomedical Sciences',
      faculty_id: 7
    }, {
      // id: 42,
      department_name: 'Biotechnology and Food Technology',
      faculty_id: 7
    }, {
      // id: 43,
      department_name: 'Chemistry',
      faculty_id: 7
    }, {
      // id: 44,
      department_name: 'Crop Sciences',
      faculty_id: 7
    }, {
      // id: 45,
      department_name: 'Environmental Health',
      faculty_id: 7
    }, {
      // id: 46,
      department_name: 'Environmental, Water and Earth Sciences',
      faculty_id: 7
    }, {
      // id: 47,
      department_name: 'Horticulture',
      faculty_id: 7
    }, {
      // id: 48,
      department_name: 'Mathematics and Statistics ',
      faculty_id: 7
    }, {
      // id: 49,
      department_name: 'Nature Conservation',
      faculty_id: 7
    }, {
      // id: 50,
      department_name: 'Pharmaceutical Sciences',
      faculty_id: 7
    }, {
      // id: 51,
      department_name: 'Physics',
      faculty_id: 7
    }, {
      // id: 52,
      department_name: 'Sport, Rehabilitation and Dental Sciences',
      faculty_id: 7
    }]);
  });
};
//# sourceMappingURL=tshwane-departments.js.map