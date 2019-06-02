const dbPool = 'MongoDB Connected Succefully'

const bcrypt = require('bcrypt')
const mongo = require('mongoose')
const env = require('dotenv').config().parsed

mongo.connect(env.mongoDB, { useNewUrlParser: true }).then(
    () => { console.log(dbPool)},
    err => { console.log('Can not connect to the database' + err) }
);

module.exports = {
    dbPool,
    mongo,
}
