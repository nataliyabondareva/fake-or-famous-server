const { Router } = require('express');

const Quote = require('./model');
const bodyParser = require('body-parser')
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

//http POST :4000/quotes content='Be yourself; everyone else is already taken' authorId=1 real=true gameId=1
router.post('/quotes', function (req, res, next) {
  Quote
    .create(req.body)
    .then(quote => {
      if (!quote) {
        return res.status(404).send({
          message: `Something went wrong`
        })
      }
      return res.status(201).send(quote)
    })
    .catch(err => next(err))
})

module.exports = router;