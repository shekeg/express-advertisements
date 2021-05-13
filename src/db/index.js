const { initMongoose } = require('./mongoose-service');
const { usersDb } = require('./users-db');
const { advertisementDb } = require('./advertisements-db');

module.exports = {
  initMongoose,
  usersDb,
  advertisementDb,
};
