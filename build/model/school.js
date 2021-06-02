"use strict";

var db = require('../db/config');

module.exports = {
  createSchool: createSchool,
  getSchoolById: getSchoolById,
  getAllSchools: getAllSchools,
  deleteSchoolById: deleteSchoolById,
  patchSchoolById: patchSchoolById
}; // SCHOOL

function createSchool(data) {
  return db('schools').insert(data).returning('*');
}

function getSchoolById(id) {
  return db('users').where({
    id: id
  }).first();
}

function getAllSchools() {
  return db('schools');
}

function deleteSchoolById(id) {
  return db('schools').where({
    id: id
  }).del();
}

function patchSchoolById(id, data) {
  return db('schools').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=school.js.map