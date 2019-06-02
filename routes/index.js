
const router = require('express').Router()

const { APIError } = require('../lib/errors')

// Routes
router.use('/examples', require('./example.route'))
router.use('/auth', require('./auth.route'))

router.get('/', (req, res) => {
  res.send('Ticketyangu API!')
})

// Handling 404 responses
// When all the above routes have not been matched
router.use((req, res, next) => {
  next(new APIError('Route does not exist', 404))
})

module.exports = router
