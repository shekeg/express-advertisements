const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  passwordHash: String,
  name: String,
  contactPhone: String,
});

const User = mongoose.model('User', userSchema);

function findById({ id }) {
  return User.findById(id).exec();
}

function findByEmail({ email }) {
  return User.findOne({ email }).exec();
}

function insert(userInfo) {
  const newUser = new User(userInfo);
  return newUser.save(userInfo);
}

const usersDb = {
  findById,
  findByEmail,
  insert,
};

exports.usersDb = usersDb;
