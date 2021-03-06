exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('departments').then(function () {
    // Inserts seed entries
    return knex('departments').insert([
      // {"FACULTY OF COMMERCE, LAW AND MANAGEMENT": "34"},
      {
        department_name: 'ACCOUNTANCY',
        faculty_id: 34,
      },

      {
        department_name: 'LAW',
        faculty_id: 34,
      },
      {
        department_name: 'ECONOMICS AND FINANCE',
        faculty_id: 34,
      },
      {
        department_name: 'BUSINESS SCIENCES',
        faculty_id: 34,
      },
      {
        department_name: 'WHS BUSINESS SCHOOL',
        faculty_id: 34,
      },
      {
        department_name: 'GOVERNANCE',
        faculty_id: 34,
      },
      // {"FACULTY OF ENGINEERING AND BUILT ENVIRONMENT": "35"},
      {
        department_name: 'ARCHITECTURE AND PLANNING',
        faculty_id: 35,
      },
      {
        department_name: 'CIVIL AND ENVIRONMENTAL ENGINEERING',
        faculty_id: 35,
      },
      {
        department_name: 'CONSTRUCTION ECONOMICS AND MANAGEMENT',
        faculty_id: 35,
      },
      {
        department_name: 'ELECTRICAL AND INFORMATION ENGINEERING',
        faculty_id: 35,
      },
      {
        department_name: 'MECHANICAL, INDUSTRIAL AND AERONAUTICAL',
        faculty_id: 35,
      },
      {
        department_name: 'ENGINEERING',
        faculty_id: 35,
      },
      {
        department_name: 'MINING ENGINEERING',
        faculty_id: 35,
      },
      // {"SCHOOL OF HEALTH SCIENCES": "36"},
      {
        department_name: 'ANATOMICAL SCIENCES',
        faculty_id: 36,
      },
      {
        department_name: 'CLINICAL MEDICINE',
        faculty_id: 36,
      },
      {
        department_name: 'ORAL HEALTH SCIENCES',
        faculty_id: 36,
      },
      {
        department_name: 'PATHOLOGY',
        faculty_id: 36,
      },
      {
        department_name: 'PHYSIOLOGY',
        faculty_id: 36,
      },
      {
        department_name: 'PUBLIC HEALTH',
        faculty_id: 36,
      },
      {
        department_name: 'THERAPEUTIC SCIENCES',
        faculty_id: 36,
      },
      // {"HUMANITIES": "37"},
      {
        department_name: 'CULTURAL POLICY AND MANAGEMENT',
        faculty_id: 37,
      },
      {
        department_name: 'DIGITAL ARTS',
        faculty_id: 37,
      },
      {
        department_name: 'APPLIED THEATRE AND DRAMA THERAPIES',
        faculty_id: 37,
      },
      {
        department_name: 'FILM AND TELEVISION',
        faculty_id: 37,
      },
      {
        department_name: 'FINE ARTS',
        faculty_id: 37,
      },
      {
        department_name: 'HISTORY OF ARTS',
        faculty_id: 37,
      },
      {
        department_name: 'INTERDISCIPLINARY ARTS AND CULTURE STUDIES',
        faculty_id: 37,
      },
      {
        department_name: 'MUSIC',
        faculty_id: 37,
      },
      {
        department_name: 'THEATRE AND PERFORMANCE',
        faculty_id: 37,
      },
      // {"SCHOOL OF EDUCATION": "38"},
      {
        department_name: 'EDUCATIONAL INFORMATION AND ENGINEERING TECHNOLOGY',
        faculty_id: 38,
      },
      {
        department_name: 'MATHEMATICS EDUCATION',
        faculty_id: 38,
      },
      {
        department_name: 'LANGUAGES, LITERACIES AND LITERATURES',
        faculty_id: 38,
      },
      {
        department_name: 'SCIENCE AND TECHNOLOGY DIVISION',
        faculty_id: 38,
      },
      {
        department_name: 'CURRICULUM DIVISION',
        faculty_id: 38,
      },
      {
        department_name: 'EDUCATIONAL LEADERSHIP AND POLICY STUDIES',
        faculty_id: 38,
      },
      {
        department_name: 'SOCIAL AND ECONOMIC SCIENCES',
        faculty_id: 38,
      },
      {
        department_name: 'FOUNDATION STUDIES',
        faculty_id: 38,
      },
      {
        department_name: 'DIVISION OF STUDIES IN EDUCATION',
        faculty_id: 38,
      },
      // {"SCHOOL OF HUMAN AND COMMUNITY DEVELOPMENT": "39"},
      {
        department_name: 'SPEECH PATHOLOGY AND AUDIOLOGY',
        faculty_id: 39,
      },
      {
        department_name: 'PSYCHOLOGY',
        faculty_id: 39,
      },
      {
        department_name: 'SOCIAL WORK',
        faculty_id: 39,
      },
      // {"SCHOOL OF LITERATURE, LANGUAGE AND MEDIA": "40"},
      {
        department_name: 'AFRICAN LANGUAGES',
        faculty_id: 40,
      },
      {
        department_name: 'AFRICAN LITERATURE',
        faculty_id: 40,
      },
      {
        department_name: 'CREATIVE WRITING',
        faculty_id: 40,
      },
      {
        department_name: 'ENGLISH STUDIES',
        faculty_id: 40,
      },
      {
        department_name: 'FRENCH',
        faculty_id: 40,
      },
      {
        department_name: 'GERMAN',
        faculty_id: 40,
      },
      {
        department_name: 'ITALIAN',
        faculty_id: 40,
      },
      {
        department_name: 'JOURNALISM',
        faculty_id: 40,
      },
      {
        department_name: 'LINGUISTICS',
        faculty_id: 40,
      },
      {
        department_name: 'MEDIA STUDIES',
        faculty_id: 40,
      },
      {
        department_name: 'MEXICAN STUDIES',
        faculty_id: 40,
      },
      {
        department_name: 'PORTUGUESE',
        faculty_id: 40,
      },
      {
        department_name: 'PUBLISHING',
        faculty_id: 40,
      },
      {
        department_name: 'SA SIGN LANGUAGE',
        faculty_id: 40,
      },
      {
        department_name: 'SPANISH',
        faculty_id: 40,
      },
      {
        department_name: 'TRANSLATION AND INTERPRETING',
        faculty_id: 40,
      },
      // {"SCHOOL OF SOCIAL SCIENCES": "41"},
      {
        department_name: 'DEMOGRAPHY AND POPULATION STUDIES',
        faculty_id: 41,
      },
      {
        department_name: 'ANTHROPOLOGY',
        faculty_id: 41,
      },
      {
        department_name: 'POLITICAL SCIENCES',
        faculty_id: 41,
      },
      {
        department_name: 'DEVELOPMENT STUDIES',
        faculty_id: 41,
      },
      {
        department_name: 'HISTORY',
        faculty_id: 41,
      },
      {
        department_name: 'INTERNATIONAL RELATIONS',
        faculty_id: 41,
      },
      {
        department_name: 'PHILOSOPHY',
        faculty_id: 41,
      },
      {
        department_name: 'SOCIOLOGY',
        faculty_id: 41,
      },
      // {"SCHOOL OF SCIENCES": "42"},
      {
        department_name: 'ANIMAL, PLANT AN ENVIRONMENTAL SCIENCES',
        faculty_id: 42,
      },
      {
        department_name: 'CHEMISTRY',
        faculty_id: 42,
      },
      {
        department_name: 'COMPUTER SCIENCE AND APPLIED MATHEMATICS',
        faculty_id: 42,
      },
      {
        department_name: 'GEOGRAPHY, ARCHAEOLOGY AND ENVIRONMENTAL',
        faculty_id: 42,
      },
      {
        department_name: 'SCIENCES',
        faculty_id: 42,
      },
      {
        department_name: 'GEO SCIENCES',
        faculty_id: 42,
      },
      {
        department_name: 'MATHEMATICS',
        faculty_id: 42,
      },
      {
        department_name: 'MOLECULAR AND CELL BIOLOGY',
        faculty_id: 42,
      },
      {
        department_name: 'PHYSICS',
        faculty_id: 42,
      },
      {
        department_name: 'STATISTICS AND ACTUARIAL SCIENCE',
        faculty_id: 42,
      },
    ]);
  });
};
