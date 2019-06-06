// const { Router } = require('express');
// // const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser')
// const Author = require('./model');
// const router = new Router();

// // http :4000/authors
// router.get('/authors', function (req, res, next) {
//   const limit = req.query.limit || 9
//   const offset = req.query.offset || 0
//   Author.findAll({
//     limit, offset
//   })
//     .then(authors => {
//       res.json(authors)
//     })
//     .catch(err => next(err))
// })

// // http :4000/author/1
// router.get('/authors/:id', function (req, res, next) {
//   const id = req.params.id
//   Author.findByPk(id)
//     .then(author => {
//       if (!author) {
//         return res.status(404).send({
//           message: `Author does not exit`
//         })
//       }
//       return res.send(author)
//     })
//     .catch(err => next(err))
// })

// router.use(bodyParser.json())

// /*
// Author.create({
//   name: "Oscar Wilde",
//   picture: "https://en.wikiquote.org/wiki/Oscar_Wilde#/media/File:Oscar_Wilde_3g07095u-adjust.jpg"
// })
//   .then(author => console.log(`The Author was create witd ID = ${author.id}`))
// */

// router.post('/authors', function (req, res, next) {
//   Author
//     .create(req.body)
//     .then(author => {
//       if (!author) {
//         return res.status(404).send({
//           message: `Something went wrong`
//         })
//       }
//       return res.status(201).send(author)
//     })
//     .catch(err => next(err))
// })

// module.exports = router;