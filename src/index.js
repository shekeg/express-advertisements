const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json('ok');
})

startServer()

async function startServer() {
  try {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`=== start server PORT ${PORT} ===`);
    });
  } catch (err) {
    console.log(err);
  }
}
