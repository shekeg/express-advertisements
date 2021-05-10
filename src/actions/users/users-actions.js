const { makeUser } = require('../../entities');
const { usersDb } = require('../../db');

function buildUsersActions({ passwordUtils }) {
  function getUserByEmail({ email }) {
    return usersDb.findByEmail({ email });
  }

  function signup(userInfo) {
    return usersDb.findByEmail({ email: userInfo.email })
      .then((user) => {
        if (user !== null) {
          throw Error('email занят');
        }

        const newUser = makeUser(userInfo);
        newUser.password = passwordUtils.genPasswordHash(newUser.password);

        return usersDb.insert(newUser);
      });
  }

  function signin({ email, password }) {
    return usersDb.findByEmail({ email })
      .then((user) => {
        if (user === null) {
          throw Error('Неверный логин или пароль');
        }

        const isValidPassword = passwordUtils.validatePassword(password, user.password);

        if (!isValidPassword) {
          throw Error('Неверный логин или пароль');
        }

        return user;
      });
  }

  return {
    getUserByEmail,
    signup,
    signin,
  };
}

exports.buildUsersActions = buildUsersActions;
