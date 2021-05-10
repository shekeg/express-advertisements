const mongoose = require('mongoose');

function initMongoose() {
  const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/express-advertisements';
  return mongoose.connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}

exports.initMongoose = initMongoose;
