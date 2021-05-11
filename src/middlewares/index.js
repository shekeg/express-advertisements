const { passportMiddlewares } = require('./passport');
const { sessionMiddleware } = require('./session');

module.exports = {
  passportMiddlewares,
  sessionMiddleware,
};
