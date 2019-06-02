const dbPool = 'A pool of connections to your DB'

const bcrypt = require('bcrypt')
const mongo = require('mongoose')
const env = require('dotenv').config().parsed

mongo.connect(env.mongoDB, { useNewUrlParser: true });

module.exports = {
  dbPool,
  mongo,
}
