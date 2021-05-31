const db = require('../db/config');

module.exports = {
  createCourse,
  getCourseById,
  getAllCourses,
  deleteCourseById,
  patchCourseById,
};

// COURSE
function createCourse(data) {
  return db('courses').insert(data).returning('*');
}
function getCourseById(id) {
  return db('courses').where({ id }).first();
}
function getAllCourses() {
  return db('courses');
}
function deleteCourseById(id) {
  return db('courses').where({ id }).del();
}
function patchCourseById(id, data) {
  return db('courses').where({ id }).update(data).returning('*');
}
