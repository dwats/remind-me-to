require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const { Types: { ObjectId } } = require('mongoose');
const { user, reminder } = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
