"use strict";

var db = require('../db/config');

module.exports = {
  createUser: createUser,
  getUserByEmail: getUserByEmail,
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  deleteUserById: deleteUserById,
  patchUserById: patchUserById
}; // USER

function getUserByEmail(email) {
  return db('users').where({
    email: email
  }).first();
}

function createUser(data) {
  return db('users').insert(data).returning('*');
}

function getAllUsers() {
  return db('users');
}

function getUserById(id) {
  return db('users').where({
    id: id
  }).first();
}

function deleteUserById(id) {
  return db('users').where({
    id: id
  }).del();
}

function patchUserById(id, data) {
  return db('users').where({
    id: id
  }).update(data).returning('*');
}
//# sourceMappingURL=auth.js.map