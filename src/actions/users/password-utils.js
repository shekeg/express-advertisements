const crypto = require('crypto');

const salt = process.env.PASSWORD_SALT;

const createHash = (password) => crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

function genPasswordHash(password) {
  if (!salt) {
    throw new Error('PASSWORD_SALT is not set');
  }

  return createHash(password);
}

function validatePassword(password, hash) {
  const hashVerify = createHash(password);
  return hash === hashVerify;
}

const passwordUtils = {
  genPasswordHash,
  validatePassword,
};

exports.passwordUtils = passwordUtils;
