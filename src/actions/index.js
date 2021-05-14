const { passwordUtils } = require('../utils/password-utils');
const { ForbiddenError } = require('../utils/errors');
const { buildUsersActions } = require('./users-actions');
const { buildAdvertisementsActions } = require('./advertisements-actions');

const usersActions = buildUsersActions({ passwordUtils });
const advertisementsActions = buildAdvertisementsActions({ ForbiddenError });

module.exports = {
  usersActions,
  advertisementsActions,
};
