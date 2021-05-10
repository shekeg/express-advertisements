const { passwordUtils } = require('../../utils/password-utils');
const { buildUsersActions } = require('./users-actions');

const usersActions = buildUsersActions({ passwordUtils });

module.exports = {
  usersActions,
};
