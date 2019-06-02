const { authService } = require('../services')
const { DataStoreError } = require('../lib/errors')

const {
  addNewUser,
} = authService

// Success
const success = true

const postAuth = (req, res, next) => {
  const { data } = req.body

  addNewUser(data)
    .then(() => {
      res.status(201).json({
        success,
      })
    })
    .catch((error) => {
      next(new DataStoreError(error.message, error.detail))
    })
}

module.exports = {
  postAuth,
}
