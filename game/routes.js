const { Router } = require('express');
// const bcrypt = require('bcrypt');
const Game = require('./model');
const router = new Router();
const bodyParser = require('body-parser')
const User = require('../users/model')
const auth = require('../auth/middleware');
const Quote = require('../quotes/model')


// http :4000/games
router.get('/games', function (req, res, next) {
  const limit = req.query.limit || 9
  const offset = req.query.offset || 0
  Game.findAll({
    limit,
    offset,
    include: [{ model: User }, { model: Quote }]
  })
    .then(games => {
      res.json(games)
    })
    .catch(err => next(err))
})

// http :4000/games/1
router.get('/games/:id', function (req, res, next) {
  const id = req.params.id
  console.log('id test:', id)
  Game.findByPk(id, { include: [{ model: User }, { model: Quote }] })
    .then(game => {
      console.log('get game test:', game)
      if (!game) {
        return res.status(404).send({
          message: `Game does not exit`
        })
      }
      console.log('game test:', game)
      return res.send(game)
    })
    .catch(err => next(err))
})

router.use(bodyParser.json())

// http :4000/games winner=5 status=test 
router.post('/games', function (req, res, next) {
  req.body.status = `lobby`
  Game
    .create(req.body)
    .then(game => {
      if (!game) {
        return res.status(404).send({
          message: `Something went wrong`
        })
      }
      return res.status(201).send(game)
    })
    .catch(err => next(err))
})

// Join game
router.put('/games/:id', auth, function (req, res, next) {
  console.log('req.user test:', req.user)
  const gameId = req.params.id

  Game
    .findByPk(gameId)
    .then(game => {
      if (!game) {
        return res.status(404).send({
          message: `Something went wrong`
        })
      }

      req.user
        .setGame(game)
        .then(user => {
          game
            .addUser(user)
            .then(() => {
              Game
                .findByPk(gameId, { include: [{ model: User }, { model: Quote }] })
                .then(game => {
                  console.log('game test:', game)
                  return res.status(201).send(game)
                })
            })
        })
    })
    .catch(err => next(err))
})

module.exports = router;