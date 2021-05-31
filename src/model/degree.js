const db = require('../db/config');

module.exports = {
  createDegree,
  getDegreeById,
  getAllDegrees,
  deleteDegreeById,
  patchDegreeById,
};

// Degree
function createDegree(data) {
  return db('degrees').insert(data).returning('*');
}
function getDegreeById(id) {
  return db('degrees').where({ id }).first();
}
function getAllDegrees() {
  return db('degrees');
}
function deleteDegreeById(id) {
  return db('degrees').where({ id }).del();
}
function patchDegreeById(id, data) {
  return db('degrees').where({ id }).update(data).returning('*');
}
