const { makeUser } = require('../../entities');
const { usersDb } = require('../../db');

function buildUsersActions({ passwordUtils }) {
  function getUserByEmail({ email }) {
    return usersDb.findByEmail({ email });
  }

  function signup(userInfo) {
    const newUser = makeUser(userInfo);
    newUser.password = passwordUtils.genPasswordHash(newUser.password);

    return usersDb.insert(newUser);
  }

  function signin({ email, password }) {
    return usersDb.findByEmail({ email })
      .then((user) => passwordUtils.validatePassword(password, user.password));
  }

  return {
    getUserByEmail,
    signup,
    signin,
  };
}

exports.buildUsersActions = buildUsersActions;
