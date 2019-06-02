const { DataStoreError } = require('../lib/errors')
const MongoDatastore = require('../datastores/mongo.datastore')

const {
  signupUser,
} = MongoDatastore

const addNewUser = data => signupUser(data).save()
  .then(result => true)
  .catch((error) => {
    const ErrorMessage = 'Failed to add new User.'
    console.error(error.message)
    console.error(error.detail)

    return new DataStoreError(ErrorMessage)
  })

module.exports = {
  addNewUser,
}
