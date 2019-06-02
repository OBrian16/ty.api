
const router = require('express').Router()
const { exampleController } = require('../controllers')

const {
  postExample,
  getExample,
  putExample,
  deleteExample,
} = exampleController
 
router.route('/')
  .post(postExample)
router.route('/:id')
  .get(getExample)
  .put(putExample)
  .delete(deleteExample)
 
module.exports = router