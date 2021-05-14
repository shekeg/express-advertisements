const { passportMiddlewares } = require('./passport');
const { sessionMiddleware } = require('./session');
const { multerMiddleware } = require('./multer');

module.exports = {
  passportMiddlewares,
  sessionMiddleware,
  multerMiddleware,
};
