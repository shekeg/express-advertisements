const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { usersDb } = require('../db');
const { passwordUtils } = require('../utils/password-utils');

const customFields = {
  usernameField: 'email',
  passwordField: 'password',
};

const verifyCallback = (email, password, done) => {
  usersDb.findByEmail({ email })
    .then((user) => {
      if (!user) { return done(null, false); }

      const isValid = passwordUtils.validatePassword(password, user.passwordHash);

      if (isValid) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => done(err));
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  usersDb.findById({ id: userId })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});

const authenticateMiddleware = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) { return next(err); }
    if (!user) { throw new Error('Неверный логин или пароль'); }
    return req.logIn(user, (loginError) => {
      if (err) { return next(loginError); }
      return next();
    });
  })(req, res, next);
};

exports.authenticateMiddleware = authenticateMiddleware;
