"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDepartment = createDepartment;
exports.getDepartmentById = getDepartmentById;
exports.getAllDepartments = getAllDepartments;
exports.getAllDepartmentsByFacultyId = getAllDepartmentsByFacultyId;
exports.deleteDepartmentById = deleteDepartmentById;
exports.patchDepartmentById = patchDepartmentById;

var db = require('../db/config'); // module.exports = {
//   createDepartment,
//   getDepartmentById,
//   getAllDepartments,
//   deleteDepartmentById,
//   patchDepartmentById,
//   getAllDepartmentsByFacultyId,
// };
// DEPARTMENT


function createDepartment(data) {
  return db('departments').insert(data).returning('*');
}

function getDepartmentById(id) {
  return db('departments').where({
    id: id
  }).first();
}

function getAllDepartments() {
  return db('departments').join('faculties', 'faculties.id', '=', 'departments.faculty_id').join('schools', 'schools.id', '=', 'faculties.school_id').select('departments.id as id', 'departments.department_name as department', 'faculties.faculty_name as faculty', 'schools.school_name as school');
}

function getAllDepartmentsByFacultyId(id) {
  return db('departments').where('faculty_id', id).join('faculties', 'faculties.id', '=', 'departments.faculty_id').join('schools', 'schools.id', '=', 'faculties.school_id').select('departments.id as id', 'departments.department_name as department', 'faculties.faculty_name as faculty', 'schools.school_name as school');
}

function deleteDepartmentById(id) {
  return db('departments').where({
    id: id
  }).del();
}

function patchDepartmentById(id, data) {
  return db('departments').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=department.js.map