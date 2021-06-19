exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('departments').then(function () {
    // Inserts seed entries
    return knex('departments').insert([
      // {"FACULTY OF ART DESIGN AND ARCHITECTURE":0},
      {
        department_name: 'Architecture',
        faculty_id: 8,
      },
      {
        department_name: 'visual Art',
        faculty_id: 8,
      },
      {
        department_name: 'Fashion Design',
        faculty_id: 8,
      },
      {
        department_name: 'Interior Design',
        faculty_id: 8,
      },
      {
        department_name: 'Graphics Design',
        faculty_id: 8,
      },
      {
        department_name: 'Multimedia',
        faculty_id: 8,
      },
      {
        department_name: 'Industrial Design',
        faculty_id: 8,
      },
      {
        department_name: 'Jewelry Design and Manufacture',
        faculty_id: 8,
      },
      {
        department_name: 'Design Studies',
        faculty_id: 8,
      },
      {
        department_name: 'Graduate School of Architecture',
        faculty_id: 8,
      },
      // {"FACULTY OF EDUCATION":0},
      {
        department_name: 'CHILDHOOD EDUCATION',
        faculty_id: 9,
      },
      {
        department_name: 'EDUCATION AND CURRICULUM STUDIES',
        faculty_id: 9,
      },
      {
        department_name: 'EDUCATION LEADERSHIP AND MANAGEMENT',
        faculty_id: 9,
      },
      {
        department_name: 'EDUCATION PSYCHOLOGY',
        faculty_id: 9,
      },
      {
        department_name: 'SCIENCE AND TECHNOLOGY EDUCATION',
        faculty_id: 9,
      },
      // {"FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT":0},
      {
        department_name: 'CIVIL ENGINEERING SCIENCES',
        faculty_id: 10,
      },
      {
        department_name: 'CIVIL ENGINEERING TECHNOLOGY',
        faculty_id: 10,
      },
      {
        department_name: 'CONSTRUCTION AND MANAGEMENT AND QUANTITY SURVEYING',
        faculty_id: 10,
      },
      {
        department_name: 'URBAN AND REGIONAL PLANNING',
        faculty_id: 10,
      },
      {
        department_name: 'MINING AND MINE SURVEYING',
        faculty_id: 10,
      },
      {
        department_name: 'CHEMICAL EHGINEERING TECHNOLOGY',
        faculty_id: 10,
      },
      {
        department_name: 'METALLURGY',
        faculty_id: 10,
      },
      {
        department_name: 'MECHANICAL EHGINEERING SCIENCE',
        faculty_id: 10,
      },
      {
        department_name: 'MECHANINCAL AND INDUSTRIAL ENGINEERING TECHNOLOGY',
        faculty_id: 10,
      },
      {
        department_name: 'QUANTITY AND OPERATIONS MANAGEMENT',
        faculty_id: 10,
      },
      {
        department_name: 'ELECTRICAL AND ELECTRONIC EHGINEERING SCIENCE',
        faculty_id: 10,
      },
      {
        department_name: 'ELECTRICAL AND ELECTRONIC EHGINEERING TECHNOLOGY',
        faculty_id: 10,
      },

      // {"FACULTY OF HEALTH SCIENCES":0},

      {
        department_name: 'BIOMEDICAL SCIENCES',
        faculty_id: 11,
      },
      {
        department_name: 'NURSING',
        faculty_id: 11,
      },
      {
        department_name: 'CHIROPRACTIC',
        faculty_id: 11,
      },
      {
        department_name: 'OPTOMETRY',
        faculty_id: 11,
      },
      {
        department_name: 'EMERGENCY MEDICAL CARE (EMC)',
        faculty_id: 11,
      },
      {
        department_name: 'ENVIRONMENTAL HEALTH',
        faculty_id: 11,
      },
      {
        department_name: 'COMPLEMNTARY MEDICINE (CM)',
        faculty_id: 11,
      },
      {
        department_name: 'HUMAN ANATOMY AND PHYSIOLOGY',
        faculty_id: 11,
      },
      {
        department_name: 'MEDICAL IMAGING AND RADIATION SCIENCES(RADIOGRAPHY)',
        faculty_id: 11,
      },
      {
        department_name: 'SPORT AND MOVEMENT STUDIES',
        faculty_id: 11,
      },
      {
        department_name: 'PEDIATRY',
        faculty_id: 11,
      },
      // {"FACULTY OF HUMANITIES":0},
      {
        department_name: 'ANTHROPOLOGY AND DEVELOPMENT STUDIES',
        faculty_id: 12,
      },
      {
        department_name: 'EHGLISH',
        faculty_id: 12,
      },
      {
        department_name: 'HISTORY',
        faculty_id: 12,
      },
      {
        department_name: 'PHILOSOPHY',
        faculty_id: 12,
      },
      {
        department_name: 'POLITICS AND INTERNATIONAL RELATIONS',
        faculty_id: 12,
      },
      {
        department_name: 'PSYCHOLOGY',
        faculty_id: 12,
      },
      {
        department_name: 'RELIGIOUS STUDIES',
        faculty_id: 12,
      },
      {
        department_name: 'SOCIAL WORK AND COMMUNITY DEVELOPMENT',
        faculty_id: 12,
      },
      {
        department_name: 'SOCIOLOGY',
        faculty_id: 12,
      },
      // {"SCHOOL OF COMMUNICATION":0},
      {
        department_name: 'STRATEGIC COMMUNICATION',
        faculty_id: 13,
      },
      // {"FACULTY OF LAW":0},
      {
        department_name: 'MERCANTILE LAW',
        faculty_id: 14,
      },
      {
        department_name: 'PRACTICE BUSINESS LAW',
        faculty_id: 14,
      },
      {
        department_name: 'PRIVATE LAW',
        faculty_id: 14,
      },
      {
        department_name: 'PROCEDURAL LAW',
        faculty_id: 14,
      },
      {
        department_name: 'LAW CLINIC',
        faculty_id: 14,
      },
      {
        department_name: 'PUBLIC LAW',
        faculty_id: 14,
      },
      // {"FACULTY OF SCIENCES":0},
      {
        department_name:
          'ACADEMY OF COMPUTER SCIENCES AND SOTFWARE ENGINEERING',
        faculty_id: 15,
      },
      {
        department_name: 'BIOCHEMISTRY',
        faculty_id: 15,
      },
      {
        department_name:
          'BIOTECHNOLOGY AND FOOD TECHNOLOGY (BTECH, MTECH, DTECH)',
        faculty_id: 15,
      },
      {
        department_name: 'BOTANY AND PLANT BIOTECHNOLOGY',
        faculty_id: 15,
      },
      {
        department_name: 'CHEMICAL SCIENCES',
        faculty_id: 15,
      },
      {
        department_name:
          'GEOGRAPHY, ENVIRONMENTAL MANAGEMENT AND ENERGY STUDIES',
        faculty_id: 15,
      },
      {
        department_name: 'GEOLOGY',
        faculty_id: 15,
      },
      {
        department_name: 'MATHEMATICS AND APPLIED MATHEMATICS',
        faculty_id: 15,
      },
      {
        department_name: 'PHYSICS',
        faculty_id: 15,
      },
      {
        department_name: 'STATISTICS',
        faculty_id: 15,
      },
      {
        department_name: 'ZOOLOGY',
        faculty_id: 15,
      },
    ]);
  });
};
