const express = require('express')

const app = express()

// load the configurations
require('dotenv').config()

/*
  Middleware for express
*/

// Additional basic security for our app by setting various HTTP headers
const helmet = require('helmet')
// Compacting requests using GZIP middleware
const compression = require('compression')
// Body parser to parse incoming request bodies and available under the req.body property
const bodyParser = require('body-parser')
// Cors so that the api can be consumed by othe domains
const cors = require('cors')

/*
  Middleware for API
*/

const { errorHandler } = require('./middleware')

// Get the routes
const routes = require('./routes')

// Bind application-level middleware
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

// Load the routes
app.use(routes)

// Resolve finally with error handler
app.use(errorHandler)

const port = process.env.PORT 

app.listen(port, () => {
  console.info(`Ticketyangu API server listening on port ${port}!`)
})

module.exports = app
