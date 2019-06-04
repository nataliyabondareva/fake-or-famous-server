const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./users/routes');
const authRouter = require('./auth/routes');
const quoteRouter = require('./quotes/routes')
const authorRouter = require('./author/routes')
const gameRouter = require('./game/routes')

const app = express();
const port = process.env.PORT || 4000;

app
  .use(bodyParser.json())
  .use(usersRouter)
  .use(authRouter)
  .use(quoteRouter)
  .use(authorRouter)
  .use(gameRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
