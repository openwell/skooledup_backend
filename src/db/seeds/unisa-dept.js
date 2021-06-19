exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('departments').then(function () {
    // Inserts seed entries
    return knex('departments').insert([
      // { 'SCHOOL OF ACCOUNTANCY': '0' },
      {
        department_name: 'Auditing',
        faculty_id: 16,
      },
      {
        department_name: 'Financial Accounting',
        faculty_id: 16,
      },
      {
        department_name: 'Management Accounting',
        faculty_id: 16,
      },
      {
        department_name: 'Taxation',
        faculty_id: 16,
      },
      // { 'SCHOOL OF APPLIED ACCOUNTANCY': '0' },
      {
        department_name: 'Financial Governance',
        faculty_id: 17,
      },
      {
        department_name: 'Financial Intelligence',
        faculty_id: 17,
      },
      // { 'SCHOOL OF AGRICULTURE AND LIFE SCIENCES': '0' },
      {
        department_name: 'AGRICULTURE & ANIMAL HEALTH',
        faculty_id: 18,
      },
      {
        department_name: 'LIFE & CONSUMER SCIENCES',
        faculty_id: 18,
      },
      // { 'SCHOOL OF ECOLOGICAL AND HUMAN SUSTAINABILITY': '0' },
      {
        department_name: 'ENVIRONMENTAL SCIENCES',
        faculty_id: 19,
      },
      {
        department_name: 'GEOGRAPHY',
        faculty_id: 19,
      },
      // { 'SCHOOL OF ECONOMIC & FINANCIAL SCIENCES': '0' },
      {
        department_name: 'DECISION SCIENCES',
        faculty_id: 20,
      },
      {
        department_name: 'ECONOMICS',
        faculty_id: 20,
      },
      {
        department_name: 'FINANCE, RISK MANAGEMENT & BANKING',
        faculty_id: 20,
      },
      // { 'SCHOOL OF MANAGEMENT SCIENCES': '0' },
      {
        department_name: 'BUSINESS MANAGEMENT',
        faculty_id: 21,
      },
      {
        department_name: 'HUMAN RESOURCES MANAGEMENT',
        faculty_id: 21,
      },
      {
        department_name: 'INDUSTRIAL AND ORGANISATIONAL PSYCHOLOGY',
        faculty_id: 21,
      },
      {
        department_name: 'MARKETING AND RETAIL',
        faculty_id: 21,
      },
      // { 'SCHOOL OF PUBLIC AND OPERATIONS MANAGEMENT': '0' },
      {
        department_name: 'APPLIED MANAGEMENT',
        faculty_id: 22,
      },
      {
        department_name: 'PUBLIC ADMINSTRATION AND MANAGEMENT',
        faculty_id: 22,
      },
      {
        department_name: 'OPERATIONS MANAGEMENT',
        faculty_id: 22,
      },
      // { 'SCHOOL OF EDUCATIONAL STUDIES': '0' },
      {
        department_name: 'ADULT BASIC EDUCATION',
        faculty_id: 23,
      },
      {
        department_name: 'EDUCATIONAL FOUNDATIONS',
        faculty_id: 23,
      },
      {
        department_name: 'PSYCHOLOGY OF EDUCATION',
        faculty_id: 23,
      },
      {
        department_name: 'INCLUSIVE EDUCATION',
        faculty_id: 23,
      },
      {
        department_name: 'EDUCATIONAL LEADERSHIP AND MANAGEMENT',
        faculty_id: 23,
      },
      // { 'SCHOOL OF TEACHER EDUCATION': '0' },
      {
        department_name: 'MATHEMATICS EDUCATION',
        faculty_id: 24,
      },
      {
        department_name: 'SCIENCE AND TECHNOLOGY EDUCATION',
        faculty_id: 24,
      },
      {
        department_name: 'LANGUAGE EDUCATION, ARTS AND CULTURE',
        faculty_id: 24,
      },
      {
        department_name: 'CURRICULUM AND INSTRUCTIONAL STUDIES',
        faculty_id: 24,
      },
      {
        department_name: 'EARLY CHILDHOOD EDUCATION',
        faculty_id: 24,
      },
      // { 'SCHOOL OF ARTS': '0' },
      {
        department_name: 'AFRICAN LANGUAGE',
        faculty_id: 25,
      },
      {
        department_name: 'AFRIKAANS & THEORY OF LITERATURE',
        faculty_id: 25,
      },
      {
        department_name: 'ART AND MUSIC',
        faculty_id: 25,
      },
      {
        department_name: 'COMMUNICATION & SCIENCES',
        faculty_id: 25,
      },
      {
        department_name: 'ENGLISH STUDIES',
        faculty_id: 25,
      },
      {
        department_name: 'INFORMATION SCIENCES',
        faculty_id: 25,
      },
      {
        department_name: 'LINGUISTICS & MODERN LANGUAGES',
        faculty_id: 25,
      },
      // { 'SCHOOL OF HUMANITIES': '0' },
      {
        department_name: 'ANTHROPOLOGY AND ARCHAEOLOGY',
        faculty_id: 26,
      },
      {
        department_name: 'BIBLICAL AND ANCIENT STUDIES',
        faculty_id: 26,
      },
      {
        department_name: 'CHRISTIAN SPIRITUALITY, CHRISTIAN HISTORY & MISOLOGY',
        faculty_id: 26,
      },
      {
        department_name: 'HISTORY',
        faculty_id: 26,
      },
      {
        department_name: 'PHILOSOPHY, PRACTICAL AND SYSTEMATIC THEOLOGY',
        faculty_id: 26,
      },
      {
        department_name: 'RELIGIOUS STUDIES AND ARABIC',
        faculty_id: 26,
      },
      // { 'SCHOOL OF SOCIAL SCIENCES': '0' },
      {
        department_name: 'DEVELOPMENT STUDIES',
        faculty_id: 27,
      },
      {
        department_name: 'HEALTH STUDIES',
        faculty_id: 27,
      },
      {
        department_name: 'POLITICAL SCIENCES',
        faculty_id: 27,
      },
      {
        department_name: 'PSYCHOLOGY',
        faculty_id: 27,
      },
      {
        department_name: 'SOCIAL WORK',
        faculty_id: 27,
      },
      {
        department_name: 'SOCIOLOGY',
        faculty_id: 27,
      },
      // { 'SCHOOL OF LAW': '0' },
      {
        department_name: 'CRIMINAL AND PROCEDURAL LAW',
        faculty_id: 28,
      },
      {
        department_name: 'JURISPRUDENCE',
        faculty_id: 28,
      },
      {
        department_name: 'MERCANTILE LAW',
        faculty_id: 28,
      },
      {
        department_name: 'PRIVATE LAW',
        faculty_id: 28,
      },
      {
        department_name: 'PUBLIC, CONSTITUTIONAL & INTERNATIONAL LAW',
        faculty_id: 28,
      },
      // { 'SCHOOL OF CRIMINAL JUSTICE': '0' },
      {
        department_name: 'CRIMINOLOGY AND SECURITY SCIENCE',
        faculty_id: 29,
      },
      {
        department_name: 'CORRECTIONS MANAGEMENT',
        faculty_id: 29,
      },
      {
        department_name: 'POLICE PRACTICE',
        faculty_id: 29,
      },
      // { 'SCHOOL OF SCIENCE': '0' },
      {
        department_name: 'CHEMISTRY',
        faculty_id: 30,
      },
      {
        department_name: 'MATHEMATICAL SCIENCES',
        faculty_id: 30,
      },
      {
        department_name: 'PHYSICS',
        faculty_id: 30,
      },
      {
        department_name: 'STATISTICS',
        faculty_id: 30,
      },
      // { 'SCHOOL OF ENGINEERING': '0' },
      {
        department_name: 'CIVIL AND CHEMICAL ENGINEERING',
        faculty_id: 31,
      },
      {
        department_name: 'MECHANICAL AND INDUSTRIAL ENGINEERING',
        faculty_id: 31,
      },
      {
        department_name: 'ELECTRICAL AND MINING ENGINEERING',
        faculty_id: 31,
      },
      // { 'SCHOOL OF COMPUTING': '0' },
      {
        department_name: 'COMPUTER SCIENCE',
        faculty_id: 32,
      },
      {
        department_name: 'INFORMATION SYSTEMS',
        faculty_id: 32,
      },
    ]);
  });
};
