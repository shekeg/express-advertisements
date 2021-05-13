const { passwordUtils } = require('../utils/password-utils');
const { buildUsersActions } = require('./users-actions');
const { buildAdvertisementsActions } = require('./advertisements-actions');

const usersActions = buildUsersActions({ passwordUtils });
const advertisementsActions = buildAdvertisementsActions();

module.exports = {
  usersActions,
  advertisementsActions,
};
