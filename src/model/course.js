const db = require('../db/config');

module.exports = {
  createCourse,
  getCourseById,
  getAllCourses,
  deleteCourseById,
  patchCourseById,
  getAllCoursesByDepartDeg,
};

// COURSE
function createCourse(data) {
  return db('courses').insert(data).returning('*');
}
function getCourseById(id) {
  return db('courses').where({ id }).first();
}
function getAllCourses() {
  return db('courses')
    .join('departments', 'departments.id', '=', 'courses.department_id')
    .join('faculties', 'faculties.id', '=', 'departments.faculty_id')
    .join('schools', 'schools.id', '=', 'faculties.school_id');
}
function getAllCoursesByDepartDeg({ department_id, degree_id }) {
  return db('courses')
    .where({ department_id: department_id, degree_id: degree_id })
    .join('departments', 'departments.id', '=', 'courses.department_id')
    .join('faculties', 'faculties.id', '=', 'departments.faculty_id')
    .join('schools', 'schools.id', '=', 'faculties.school_id');
}
function deleteCourseById(id) {
  return db('courses').where({ id }).del();
}
function patchCourseById(id, data) {
  return db('courses').where({ id }).update(data).returning('*');
}
