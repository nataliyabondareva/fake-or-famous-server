const { Router } = require('express');
const Quote = require('../game/quoteModel');
const Game = require('../game/model');
const bodyParser = require('body-parser')
const jwt = require('../auth/jwt')

console.log('routes Quote test:', Quote)

function quotesRouting(dispatch) {
  const router = new Router();

  // http :4000/quotes
  router.get('/quotes', function (req, res, next) {
    const limit = req.query.limit || 9
    const offset = req.query.offset || 0
    Quote.findAll({
      limit, offset
    })
      .then(quotes => {
        res.json(quotes)
      })
      .catch(err => next(err))
  })

  // http :4000/games/1
  router.get('/quotes/:id', function (req, res, next) {
    const id = req.params.id
    Quote.findByPk(id)
      .then(quote => {
        if (!quote) {
          return res.status(404).send({
            message: `Quote does not exit`
          })
        }
        return res.send(quote)
      })
      .catch(err => next(err))
  })

  router.use(bodyParser.json())

  // http POST :4000/quotes content='Be yourself; everyone else is already taken' author='Oscar Wilde' picture="https://en.wikiquote.org/wiki/Oscar_Wilde#/media/File:Oscar_Wilde_3g07095u-adjust.jpg"  real=true gameId=1
  router.post('/quotes', function (req, res, next) {
    console.log('req.body.user test:', req.body.user)
    const { userId } = jwt.toData(req.body.user)
    console.log('userId test:', userId)
    const quote = {
      content: req.body.content,
      gameId: req.body.gameId,
      userId,
      real: false
    }
    Quote
      .create(quote)
      .then(quote => {
        if (!quote) {
          return res.status(404).send({
            message: `Something went wrong`
          })
        }

        Game
          .findAll({ include: [{ model: Quote }] })
          .then(games => {
            console.log('games test:', games)
            dispatch('GAMES', games)
          })

        return res.status(201).send(quote)
      })
      .catch(err => next(err))
  })

  return router
}

module.exports = quotesRouting;