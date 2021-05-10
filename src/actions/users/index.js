const { buildUsersActions } = require('./users-actions');

const usersActions = buildUsersActions();

module.exports = {
  usersActions,
};
