const db = require('../db/config');

// module.exports = {
//   createDepartment,
//   getDepartmentById,
//   getAllDepartments,
//   deleteDepartmentById,
//   patchDepartmentById,
//   getAllDepartmentsByFacultyId,
// };

// DEPARTMENT
export function createDepartment(data) {
  return db('departments').insert(data).returning('*');
}
export function getDepartmentById(id) {
  return db('departments').where({ id }).first();
}
export function getAllDepartments() {
  return db('departments')
    .join('faculties', 'faculties.id', '=', 'departments.faculty_id')
    .join('schools', 'schools.id', '=', 'faculties.school_id')
    .select(
      'departments.id as id',
      'departments.department_name as department',
      'faculties.faculty_name as faculty',
      'schools.school_name as school'
    );
}
export function getAllDepartmentsByFacultyId(id) {
  return db('departments')
    .where('faculty_id', id)
    .join('faculties', 'faculties.id', '=', 'departments.faculty_id')
    .join('schools', 'schools.id', '=', 'faculties.school_id')
    .select(
      'departments.id as id',
      'departments.department_name as department',
      'faculties.faculty_name as faculty',
      'schools.school_name as school'
    );
}
export function deleteDepartmentById(id) {
  return db('departments').where({ id }).del();
}
export function patchDepartmentById(id, data) {
  return db('departments').where({ id }).update(data).returning('*');
}
