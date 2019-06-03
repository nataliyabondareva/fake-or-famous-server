const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./users/routes');
const authRouter = require('./auth/routes');


const app = express();
const port = process.env.PORT || 4000;

app
  //sanity check cors goes before BODYPARSER

  .use(bodyParser.json())
  .use(usersRouter)
  .use(authRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
