const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  contactPhone: String,
});

const User = mongoose.model('User', userSchema);

function findByEmail({ email }) {
  return User.findOne({ email }).exec();
}

function insert(userInfo) {
  const newUser = new User(userInfo);
  return newUser.save(userInfo);
}

const usersDb = {
  findByEmail,
  insert,
};

exports.usersDb = usersDb;
