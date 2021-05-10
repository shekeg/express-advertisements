require('dotenv').config();

const express = require('express');
const passport = require('passport');

const { initMongoose } = require('./db');
const { sessionMiddleware } = require('./middlewares/session');
const { authenticateMiddleware } = require('./middlewares/passport');

const { usersController } = require('./controllers');
const { errorsController } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/signup', usersController.signup);
app.use('/api/signin', authenticateMiddleware, usersController.signin);

app.use(errorsController.notFoundHandler);
app.use(errorsController.unexpectedErrorHandler);

startServer();

function startServer() {
  initMongoose()
    .then(() => {
      const PORT = process.env.PORT || 3000;

      app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`=== start server PORT ${PORT} ===`);
      });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
}
