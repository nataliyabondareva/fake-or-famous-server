const { Router } = require('express');
const bcrypt = require('bcrypt');

const User = require('./model');

const router = new Router();

/// endpoint working
//http :4000/users email=a@b.com password=123 password_confirmation=123
// http :4000/users email=b@a.com password=321 password_confirmation=321

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
