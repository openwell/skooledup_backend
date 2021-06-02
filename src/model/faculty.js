const db = require('../db/config');

module.exports = {
  createFaculty,
  getFacultyById,
  getAllFaculties,
  deleteFacultyById,
  patchFacultyById,
  getAllFacultiesBySchoolId,
};

// FACULTY
function createFaculty(data) {
  return db('faculties').insert(data).returning('*');
}
function getFacultyById(id) {
  return db('faculties').where({ id }).first();
}
function getAllFaculties() {
  return db('faculties')
    .join('schools', 'schools.id', '=', 'faculties.school_id')
    .select(
      'faculties.id as id',
      'faculties.faculty_name as faculty',
      'schools.school_name as school'
    );
}
function getAllFacultiesBySchoolId(id) {
  return db('faculties')
    .where('school_id', id)
    .join('schools', 'schools.id', '=', 'faculties.school_id')
    .select(
      'faculties.id as id',
      'faculties.faculty_name as faculty',
      'schools.school_name as school'
    );
}
function deleteFacultyById(id) {
  return db('faculties').where({ id }).del();
}
function patchFacultyById(id, data) {
  return db('faculties').where({ id }).update(data).returning('*');
}
