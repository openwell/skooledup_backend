"use strict";

var db = require('../db/config');

module.exports = {
  createFaculty: createFaculty,
  getFacultyById: getFacultyById,
  getAllFaculties: getAllFaculties,
  deleteFacultyById: deleteFacultyById,
  patchFacultyById: patchFacultyById,
  getAllFacultiesBySchoolId: getAllFacultiesBySchoolId
}; // FACULTY

function createFaculty(data) {
  return db('faculties').insert(data).returning('*');
}

function getFacultyById(id) {
  return db('faculties').where({
    id: id
  }).first();
}

function getAllFaculties() {
  return db('faculties').join('schools', 'schools.id', '=', 'faculties.school_id').select('faculties.id as id', 'faculties.faculty_name as faculty', 'schools.school_name as school');
}

function getAllFacultiesBySchoolId(id) {
  return db('faculties').where('school_id', id).join('schools', 'schools.id', '=', 'faculties.school_id').select('faculties.id as id', 'faculties.faculty_name as faculty', 'schools.school_name as school');
}

function deleteFacultyById(id) {
  return db('faculties').where({
    id: id
  }).del();
}

function patchFacultyById(id, data) {
  return db('faculties').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=faculty.js.map