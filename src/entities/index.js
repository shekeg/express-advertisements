const { passwordUtils } = require('../utils/password-utils');
const { buildMakeUser } = require('./user');

const makeUser = buildMakeUser({ passwordUtils });

module.exports = {
  makeUser,
};
