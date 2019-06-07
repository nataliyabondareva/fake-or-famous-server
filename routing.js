const express = require('express')

module.exports = function routing (dispatch, messages) {
  const router = express.Router()

  return router.post('/quotes', (request, response) => {
    const { quote } = request.body

    console.log('quote test:', quote)

    quote.push(quote)

    dispatch(quote)

    response.status(201).send(quote)
  })
}