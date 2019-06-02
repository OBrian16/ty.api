
const { exampleService } = require('../services')

const { DataStoreError } = require('../lib/errors')

const {
  addNewExample,
  getExistingExample,
  updateExistingExample,
  deleteExistingExample,
} = exampleService

// Success 
const success = true

// handle POST / request for example
const postExample = (req, res, next) => {
  const data = req.body.data

  addNewExample(data)
    .then( () => {
      res.status(201).json({
        success
      })
    })
    .catch( (error) => {
      next(new DataStoreError(error.message, error.detail))
    })
}

// handle GET /:id request for example
const getExample = (req, res, next) => {
  const id = req.params.id

  getExistingExample('id', id)
    .then( result => {
      const data = result
      res.status(200).json({
        success,
        data
      })
    })
    .catch( (error) => {
      next(new DataStoreError(error.message, error.detail))
    })
}

// handle PUT /:id request for example
const putExample = (req, res, next) => {

  const data = req.body.data
  const id = req.params.id

  updateExistingExample(id, data)
    .then( () => {
      res.status(200).json({
        success
      })
    })
    .catch( (error) => {
      next(new DataStoreError(error.message, error.detail))
    })
}

// handle DELETE /:id request for example
const deleteExample = (req, res, next) => {

  const id = req.params.id

  deleteExistingExample(id)
    .then( () => {
      res.status(200).json({
        success
      })
    })
    .catch( (error) => {
      next(new DataStoreError(error.message, error.detail))
    })
}

module.exports = {
  getExample,
  postExample,
  putExample,
  deleteExample,
}