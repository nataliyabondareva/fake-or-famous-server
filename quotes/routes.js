const { Router } = require('express');
const Quote = require('./model');
const Game = require('../game/model');
const User = require('../users/model')
const bodyParser = require('body-parser')
const router = new Router();
const auth = require('../auth/middleware')

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

//get single quote
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
router.post('/quotes', auth, function (req, res, next) {
  console.log('req.body test:', req.body)
  console.log('req.user test:', req.user)
  req.body.quote.gameId = req.body.gameId
  req.body.quote.userId = req.user.id
  console.log('req.body.quote test:', req.body.quote)
  Quote
    .create(req.body.quote)
    .then(quote => {
      if (!quote) {
        return res.status(404).send({
          message: `Something went wrong`
        })
      }
      Game
        .findByPk(req.body.gameId, { include: [{ model: User }, { model: Quote }]}, req.body.userId)
        .then(game => {
          return res.status(201).send(game)
        })
    })
    .catch(err => next(err))
})

module.exports = router;