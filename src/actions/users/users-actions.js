const { makeUser } = require('../../entities');
const { usersDb } = require('../../db');

function buildUsersActions() {
  function getUserByEmail({ email }) {
    return usersDb.findByEmail({ email });
  }

  function addUser(userInfo) {
    const newUser = makeUser(userInfo);
    return usersDb.insert(newUser);
  }

  return {
    getUserByEmail,
    addUser,
  };
}

exports.buildUsersActions = buildUsersActions;
