const db = require('../db/config');

module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
  deleteUserById,
  patchUserById,
};
// USER
function getUserByEmail(email) {
  return db('users').where({ email }).first();
}
function createUser(data) {
  return db('users').insert(data).returning('*');
}
function getAllUsers() {
  return db('users');
}
function getUserById(id) { 
  return db('users').where({ id }).first();
}
function deleteUserById(id) {
  return db('users').where({ id }).del();
}
function patchUserById(id, data) {
  return db('users').where({ id }).update(data).returning('*');
}
