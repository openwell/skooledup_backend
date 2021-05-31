const db = require('../db/config');

module.exports = {
  createSchool,
  getSchoolById,
  getAllSchools,
  deleteSchoolById,
  patchSchoolById,
};

// SCHOOL
function createSchool(data) {
  return db('schools').insert(data).returning('*');
}
function getSchoolById(id) {
  return db('users').where({ id }).first();
}
function getAllSchools() {
  return db('schools');
}
function deleteSchoolById(id) {
  return db('schools').where({ id }).del();
}
function patchSchoolById(id, data) {
  return db('schools').where({ id }).update(data).returning('*');
}
