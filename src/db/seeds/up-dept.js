exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('departments').then(function () {
    // Inserts seed entries
    return knex('departments').insert([
      // {"FACULTY OF Economic AND MANAGEMENT": "44"},
      {
        department_name: 'ACCOUNTING',
        faculty_id: 44,
      },
      {
        department_name: 'AUDITING',
        faculty_id: 44,
      },
      {
        department_name: 'ECONOMICS',
        faculty_id: 44,
      },
      {
        department_name: 'BUSINESS MANAGEMENT',
        faculty_id: 44,
      },
      {
        department_name: 'FINANCIAL MANAGEMENT',
        faculty_id: 44,
      },
      {
        department_name: 'HUMAN RESOURCES MANAGEMENT',
        faculty_id: 44,
      },
      {
        department_name: 'MARKETING MANAGEMENT',
        faculty_id: 44,
      },
      {
        department_name: 'TAXATION',
        faculty_id: 44,
      },
      {
        department_name: 'PUBLIC MANAGEMENT AND ADMINISTRATION',
        faculty_id: 44,
      },
      {
        department_name: 'COMMUNICATION MANAGEMENT',
        faculty_id: 44,
      },
      {
        department_name: 'TOURISM MANAGEMENT',
        faculty_id: 44,
      },
      // {"FACULTY OF EDUCATION": "45"},
      {
        department_name: 'HUMANITIES EDUCATION',
        faculty_id: 45,
      },
      {
        department_name: 'SCIENCES, MATHEMATICS & TECHNOLOGY EDUCATION',
        faculty_id: 45,
      },
      {
        department_name: 'EDUCATION MANAGEMENT & POLICY STUDIES',
        faculty_id: 45,
      },
      {
        department_name: 'EDUCATIONAL PSYCHOLOGY',
        faculty_id: 45,
      },
      {
        department_name: 'EARLY CHILDHOOD EDUCATION',
        faculty_id: 45,
      },
      // {"FACULTY OF ENGINEERING": "46"},
      {
        department_name: 'INDUSTRIAL AND SYSTEM ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'MINING ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'CHEMICAL ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'ELECTRICAL, ELECTRONIC AND COMPUTER ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'MECHANICAL AND AERONAUTICAL ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'MATERIAL SCIENCE AND METALLURGICAL ENGINEERING',
        faculty_id: 46,
      },
      {
        department_name: 'CIVIL ENGINEERING',
        faculty_id: 46,
      },
      // {"SCHOOL OF BUILT ENVIRONMENT": "47"},
      {
        department_name: 'ARCHITECTURE',
        faculty_id: 47,
      },
      {
        department_name: 'CONSTRUCTION ECONOMICS',
        faculty_id: 47,
      },
      {
        department_name: 'TOWN AND REGIONAL PLANNING',
        faculty_id: 47,
      },
      // {"SCHOOL OF INFORMATION TECHNOLOGY": "48"},
      {
        department_name: 'COMPUTER SCIENCES',
        faculty_id: 48,
      },
      {
        department_name: 'INFORMATICS',
        faculty_id: 48,
      },
      {
        department_name: 'INFORMATION SCIENCE',
        faculty_id: 48,
      },
      // {"SCHOOL OF DENTISTRY": "49"},
      {
        department_name: 'COMMUNITY DENTISTRY',
        faculty_id: 49,
      },
      {
        department_name: 'DENTAL MANAGEMENT SCIENCES',
        faculty_id: 49,
      },
      {
        department_name: 'MAXILLOFACIAL AND ORAL SURGERY',
        faculty_id: 49,
      },
      {
        department_name: 'ORAL PATHOLOGY AND ORAL BIOLOGY',
        faculty_id: 49,
      },
      {
        department_name: 'PERIODONTICS AND ORAL MEDICINE',
        faculty_id: 49,
      },
      {
        department_name: 'PROSTHODONTICS',
        faculty_id: 49,
      },
      {
        department_name: 'ODONTOLOGY',
        faculty_id: 49,
      },
      {
        department_name: 'ORTHODONTICS',
        faculty_id: 49,
      },
      // {"HEALTH CARE SCIENCES": "50"},
      {
        department_name: 'HUMAN NUTRITION',
        faculty_id: 50,
      },
      {
        department_name: 'NURSING SCIENCES',
        faculty_id: 50,
      },
      {
        department_name: 'OCCUPATIONAL THERAPY',
        faculty_id: 50,
      },
      {
        department_name: 'PHYSIOTHERAPY',
        faculty_id: 50,
      },
      {
        department_name: 'RADIOGRAPHY',
        faculty_id: 50,
      },
      // {"SCHOOL OF MEDICINE": "52"},
      {
        department_name: 'ANATOMY PATHOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'ANESTHESIOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'ANATOMY',
        faculty_id: 52,
      },
      {
        department_name: 'CARDIOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'CHEMICAL PATHOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'FAMILY MEDICINE',
        faculty_id: 52,
      },
      {
        department_name: 'FORENSIC MEDICINE',
        faculty_id: 52,
      },
      {
        department_name: 'HEMATOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'IMMUNOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'INTERNAL MEDICINE',
        faculty_id: 52,
      },
      {
        department_name: 'MEDICAL MICROBIOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'MEDICAL ONCOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'MEDICAL VIROLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'NEUROSURGERY',
        faculty_id: 52,
      },
      {
        department_name: 'NEUROLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'NUCLEAR MEDICINE',
        faculty_id: 52,
      },
      {
        department_name: 'OBSTETRICS AND GYNECOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'OPHTHALMOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'ORTHOPAEDICS',
        faculty_id: 52,
      },
      {
        department_name: 'OTORHINOLARYNGOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'PEDIATRICS',
        faculty_id: 52,
      },
      {
        department_name: 'PHARMACOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'PSYCHIATRY',
        faculty_id: 52,
      },
      {
        department_name: 'PHYSIOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'RADIATION ONCOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'RADIOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'RHEUMATOLOGY',
        faculty_id: 52,
      },
      {
        department_name: 'SURGERY',
        faculty_id: 52,
      },
      {
        department_name: 'UROLOGY',
        faculty_id: 52,
      },
      // {"SCHOOL OF ARTS": "53"},
      {
        department_name: 'CLASSICAL MUSIC',
        faculty_id: 53,
      },
      {
        department_name: 'CLASSICAL VOICE AND OPERA',
        faculty_id: 53,
      },
      {
        department_name: 'JAZZ',
        faculty_id: 53,
      },
      {
        department_name: 'DRAMA',
        faculty_id: 53,
      },
      {
        department_name: 'FINE ARTS',
        faculty_id: 53,
      },
      {
        department_name: 'INFORMATION DESIGN',
        faculty_id: 53,
      },
      {
        department_name: 'VISUAL STUDIES',
        faculty_id: 53,
      },
      {
        department_name: 'TANGIBLE HERITAGE CONSERVATION',
        faculty_id: 53,
      },
      {
        department_name: 'INTERDISCIPLINARY AND MUSEUM STUDIES',
        faculty_id: 53,
      },
      {
        department_name: 'ART THERAPIES',
        faculty_id: 53,
      },
      {
        department_name: 'DIGITAL CULTURE & MEDIA',
        faculty_id: 53,
      },
      {
        department_name: 'ARTS OF AFRICA',
        faculty_id: 53,
      },
      // {"SCHOOL OF SOCIAL SCIENCES": "54"},
      {
        department_name: 'AFRICANS',
        faculty_id: 54,
      },
      {
        department_name: 'AFRICAN LANGUAGE',
        faculty_id: 54,
      },
      {
        department_name: 'ANCIENT AND MODERN LANGUAGES AND CULTURES',
        faculty_id: 54,
      },
      {
        department_name: 'ANTHROPOLOGY AND ARCHAEOLOGY',
        faculty_id: 54,
      },
      {
        department_name: 'ENGLISH',
        faculty_id: 54,
      },
      {
        department_name: 'HISTORICAL AND HERITAGE STUDIES',
        faculty_id: 54,
      },
      {
        department_name: 'PHILOSOPHY',
        faculty_id: 54,
      },
      {
        department_name: 'POLITICAL SCIENCES',
        faculty_id: 54,
      },
      {
        department_name: 'PSYCHOLOGY',
        faculty_id: 54,
      },
      {
        department_name: 'SOCIOLOGY',
        faculty_id: 54,
      },
      {
        department_name: 'SOCIAL WORKS AND CRIMINOLOGY',
        faculty_id: 54,
      },
      {
        department_name: 'SPEECH- LANGUAGE PATHOLOGY',
        faculty_id: 54,
      },
      // {"SCHOOL OF LAW": "55"},
      {
        department_name: 'CENTRE OF HUMAN RIGHTS',
        faculty_id: 55,
      },
      {
        department_name: 'JURISPRUDENCE',
        faculty_id: 55,
      },
      {
        department_name: 'MERCANTILE LAW',
        faculty_id: 55,
      },
      {
        department_name: 'PRIVATE LAW',
        faculty_id: 55,
      },
      {
        department_name: 'PROCEDURAL LAW',
        faculty_id: 55,
      },
      {
        department_name: 'PUBLIC LAW',
        faculty_id: 55,
      },
      // {"FACULTY OF NATURAL AND AGRICULTURAL SCIENCES": "56"},
      {
        department_name: 'ACTUARIAL SCIENCE',
        faculty_id: 56,
      },
      {
        department_name:
          'AGRICULTURAL ECONOMICS, EXTENSION AND RURAL DEVELOPMENT',
        faculty_id: 56,
      },
      {
        department_name: 'ANIMAL SCIENCES',
        faculty_id: 56,
      },
      {
        department_name: 'BIOCHEMISTRY, GENETICS AND MICROBIOLOGY',
        faculty_id: 56,
      },
      {
        department_name: 'CHEMISTRY',
        faculty_id: 56,
      },
      {
        department_name: 'CONSUME AND FOOD SCIENCE',
        faculty_id: 56,
      },
      {
        department_name: 'GEOGRAPHY, GEO INFORMATICS AND METEOROLOGY',
        faculty_id: 56,
      },
      {
        department_name: 'GEOLOGY',
        faculty_id: 56,
      },
      {
        department_name: 'MATHEMATICS AND APPLIED MATHEMATICS',
        faculty_id: 56,
      },
      {
        department_name: 'PHYSICS',
        faculty_id: 56,
      },
      {
        department_name: 'PLANT AND SOIL SCIENCE',
        faculty_id: 56,
      },
      {
        department_name: 'STATISTICS',
        faculty_id: 56,
      },
      {
        department_name: 'ZOOLOGY AND ENTOMOLOGY',
        faculty_id: 56,
      },
      // {"FACULTY OF THEOLOGY AND RELIGION": "43"},
      {
        department_name: 'OLD TESTAMENT AND HEBREW SCRIPTURES',
        faculty_id: 43,
      },
      {
        department_name: 'NEW TESTAMENT AND RELATED LITERATURE',
        faculty_id: 43,
      },
      {
        department_name: 'PRACTICAL THEOLOGY AND MISSION STUDIES',
        faculty_id: 43,
      },
      {
        department_name: 'RELIGION STUDIES',
        faculty_id: 43,
      },
      {
        department_name: 'SYSTEMATIC AND HISTORICAL THEOLOGY',
        faculty_id: 43,
      },
      // {"FACULTY OF VETERINARY SCIENCES": "33"},
      {
        department_name: 'ANATOMY AND PHYSIOLOGY',
        faculty_id: 33,
      },
      {
        department_name: 'COMPANION ANIMAL CLINICAL STUDIES',
        faculty_id: 33,
      },
      {
        department_name: 'PARA CLINICAL SCIENCES',
        faculty_id: 33,
      },
      {
        department_name: 'PRODUCTION ANIMAL STUDIES',
        faculty_id: 33,
      },
      {
        department_name: 'VETERINARY TROPICAL DISEASES',
        faculty_id: 33,
      },
    ]);
  });
};
