const { initMongoose } = require('./mongoose-service');
const { usersDb } = require('./users-db');

module.exports = {
  initMongoose,
  usersDb,
};
