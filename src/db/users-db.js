const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  contactPhone: String,
});

const User = mongoose.model('User', userSchema);

function insert(userInfo) {
  const newUser = new User(userInfo);
  return newUser.save(userInfo);
}

const usersDb = {
  insert,
};

exports.usersDb = usersDb;
