
const { DataStoreError } = require('../lib/errors')
const ExampleDatastore = require('../datastores/example.datastore')

const {
  addExample,
  getExample,
  updateExample,
  deleteExample,
} = ExampleDatastore

const addNewExample = (data) => {
  // business logic to add a new example
  return addExample(data)
    .then( result => {
      return result
    })
    .catch( error => {
      const error_message = 'Failed to add new Example'
      console.error(error.message)
      console.error(error.detail)
      
      return new DataStoreError(error_message)
    })
}

const getExistingExample = (property, value) => {
  // business logic to get an existing example
  return getExample(property, value)
    .then( result => {
      return result
    })
    .catch( error => {
      const error_message = 'Failed to get Example data'
      console.error(error.message)
      console.error(error.detail)
      
      return new DataStoreError(error_message)
    })
}

const updateExistingExample = (id, data) => {
  // business logic to update an existing example
  return updateExample(id, data)
    .then( result => {
      return result
    })
    .catch( error => {
      const error_message = 'Failed to update Example data'
      console.error(error.message)
      console.error(error.detail)
      
      return new DataStoreError(error_message)
    })
}

const deleteExistingExample = (id) => {
  // business logic to delete an existing example
  return deleteExample(id)
    .then( result => {
      return result
    })
    .catch( error => {
      const error_message = 'Failed to delete Example'
      console.error(error.message)
      console.error(error.detail)
      
      return new DataStoreError(error_message)
    })
}

module.exports = {
  addNewExample,
  getExistingExample,
  updateExistingExample,
  deleteExistingExample,
}
