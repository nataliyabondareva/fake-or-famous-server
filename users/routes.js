const { Router } = require('express');
const bcrypt = require('bcrypt');

const User = require('./model');

const router = new Router();


router.post('/users', function (req, res, next) {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }
  User
    .create(user)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User does not exist`
        })
      }
      return res.status(201).json(user)
    })
    .catch(err => next(err))
})

module.exports = router;
