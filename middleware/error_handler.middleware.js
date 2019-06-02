
const { APIError, DBError } = require('../lib/errors')

const errorHandler = (err, req, res) => {
  const success = false

  console.error(err.message)
  if (err.detail) console.error(err.detail)

  if (err instanceof APIError) {
    res.status(err.status).json({
      success,
      errors: [err.message],
    })
  } else if (err instanceof DBError) {
    res.status(err.status).json({
      success,
      errors: [err.detail],
    })
  } else {
    res.status(500).json({
      success,
      errors: ['Internal Server Error'],
    })
  }
}

module.exports = errorHandler
