const express = require('express');
const { initMongoose } = require('./db');
const { usersRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);

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
