"use strict";

var db = require('../db/config');

module.exports = {
  createDegree: createDegree,
  getDegreeById: getDegreeById,
  getAllDegrees: getAllDegrees,
  deleteDegreeById: deleteDegreeById,
  patchDegreeById: patchDegreeById
}; // Degree

function createDegree(data) {
  return db('degrees').insert(data).returning('*');
}

function getDegreeById(id) {
  return db('degrees').where({
    id: id
  }).first();
}

function getAllDegrees() {
  return db('degrees');
}

function deleteDegreeById(id) {
  return db('degrees').where({
    id: id
  }).del();
}

function patchDegreeById(id, data) {
  return db('degrees').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=degree.js.map