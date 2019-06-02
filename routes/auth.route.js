const router = require('express').Router()
const { authController } = require('../controllers')

const {
  postAuth,
} = authController

router.route('/signup')
  .post(postAuth)

module.exports = router