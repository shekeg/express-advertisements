const { passwordUtils } = require('../utils/password-utils');
const { buildMakeUser } = require('./user');
const { buildMakeAdvertisement } = require('./advertisement');

const makeUser = buildMakeUser({ passwordUtils });
const makeAdvertisement = buildMakeAdvertisement();

module.exports = {
  makeUser,
  makeAdvertisement,
};
