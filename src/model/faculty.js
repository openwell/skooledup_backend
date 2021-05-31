const db = require('../db/config');

module.exports = {
  createFaculty,
  getFacultyById,
  getAllFaculties,
  deleteFacultyById,
  patchFacultyById,
};

// FACULTY
function createFaculty(data) {
  return db('faculties').insert(data).returning('*');
}
function getFacultyById(id) {
  return db('faculties').where({ id }).first();
}
function getAllFaculties() {
  return db('faculties');
}
function deleteFacultyById(id) {
  return db('faculties').where({ id }).del();
}
function patchFacultyById(id, data) {
  return db('faculties').where({ id }).update(data).returning('*');
}
