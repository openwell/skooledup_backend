const db = require('../db/config');

module.exports = {
  createDepartment,
  getDepartmentById,
  getAllDepartments,
  deleteDepartmentById,
  patchDepartmentById,
};

// DEPARTMENT
function createDepartment(data) {
  return db('departments').insert(data).returning('*');
}
function getDepartmentById(id) {
  return db('departments').where({ id }).first();
}
function getAllDepartments() {
  return db('departments');
}
function deleteDepartmentById(id) {
  return db('departments').where({ id }).del();
}
function patchDepartmentById(id, data) {
  return db('departments').where({ id }).update(data).returning('*');
}
