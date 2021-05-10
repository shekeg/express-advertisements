const { makeUser } = require('../entities');
const { usersDb } = require('../db');

function getUserByEmail({ email }) {
  return usersDb.findByEmail({ email });
}

function addUser(userInfo) {
  const newUser = makeUser(userInfo);
  return usersDb.insert(newUser);
}

const usersActions = {
  getUserByEmail,
  addUser,
};

exports.usersActions = usersActions;
