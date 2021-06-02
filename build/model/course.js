"use strict";

var db = require('../db/config');

module.exports = {
  createCourse: createCourse,
  getCourseById: getCourseById,
  getAllCourses: getAllCourses,
  deleteCourseById: deleteCourseById,
  patchCourseById: patchCourseById,
  getAllCoursesByDepartDeg: getAllCoursesByDepartDeg
}; // COURSE

function createCourse(data) {
  return db('courses').insert(data).returning('*');
}

function getCourseById(id) {
  return db('courses').where({
    id: id
  }).first();
}

function getAllCourses() {
  return db('courses').join('departments', 'departments.id', '=', 'courses.department_id').join('faculties', 'faculties.id', '=', 'departments.faculty_id').join('schools', 'schools.id', '=', 'faculties.school_id');
}

function getAllCoursesByDepartDeg(_ref) {
  var department_id = _ref.department_id,
      degree_id = _ref.degree_id;
  return db('courses').where({
    department_id: department_id,
    degree_id: degree_id
  }).join('departments', 'departments.id', '=', 'courses.department_id').join('faculties', 'faculties.id', '=', 'departments.faculty_id').join('schools', 'schools.id', '=', 'faculties.school_id');
}

function deleteCourseById(id) {
  return db('courses').where({
    id: id
  }).del();
}

function patchCourseById(id, data) {
  return db('courses').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=course.js.map