require('dotenv').config();

const express = require('express');

const { initMongoose } = require('./db');
const { passportMiddlewares, sessionMiddleware } = require('./middlewares');

const { usersController } = require('./controllers');
const { errorsController } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.use(passportMiddlewares.initializeMiddleware);
app.use(passportMiddlewares.sessionMiddleware);

app.use('/api/signup', usersController.signup);
app.use('/api/signin', passportMiddlewares.authenticateMiddleware, usersController.signin);

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
