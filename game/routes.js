const { Router } = require('express');
// const bcrypt = require('bcrypt');
const Game = require('./model');
const router = new Router();
const bodyParser = require('body-parser')

// http :4000/games
router.get('/games', function (req, res, next) {
  const limit = req.query.limit || 9
  const offset = req.query.offset || 0
  Game.findAll({
    limit, offset
  })
    .then(games => {
      res.json(games)
    })
    .catch(err => next(err))
})

// http :4000/games/1
router.get('/games/:id', function (req, res, next) {
  const id = req.params.id
  Game.findByPk(id)
    .then(game => {
      if (!game) {
        return res.status(404).send({
          message: `Game does not exit`
        })
      }
      return res.send(game)
    })
    .catch(err => next(err))
})

// http :4000/quotes
router.get('/quotes', function (req, res, next) {
  const limit = req.query.limit || 9
  const offset = req.query.offset || 0
  Quote.findAll({
    limit, offset
  })
  .then(console.log('work'))
    .then(quotes => {
      res.json(quotes)
    })
    .catch(err => next(err))
})

router.use(bodyParser.json())

/*
Game.create({
  winner: "1",
  status: "Whatever"
}).then(game => console.log(`The Game was created. The ID = ${game.id}`));
*/

// http :4000/games winner=5 status=test 
router.post('/games', function (req, res, next) {
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


module.exports = router;