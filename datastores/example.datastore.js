// Get the database adapter
const db = require('./db')

// Examples are given for a relational model

const addExample = (data) => {
  // construct an insert query
  const query = {
    text: `
      INSERT INTO example(attribute1, attribute2) VALUES($1, $2)
    `,
    values: [data.attribute1, data.attribute2]
  }

  // run the query
  return db.query(query)
            
}

const getExample = (property, value) => {
  // construct a select query
  const query ={
    text: `SELECT * FROM example WHERE ${property} = $1`,
    values: [value]
  }
  
  // run the query
  return db.query(query)

}

const updateExample = (id, data) => {
  // construct an update query
  const query ={
    text: `
      UPDATE example SET (attribute1, attribute2) = ($1, $2) WHERE id = $3
    `,
    values: [data.attribute1, data.attribute2, id]

  }

  // run the query
  return db.query(query)

}

const deleteExample = (id) => {
  // construct a delete query
  const query ={
    text: `
      DELETE FROM company WHERE id = $1
    `,
    values: [id]

  }

  // run the query
  return db.query(query)

}

module.exports = {
  addExample,
  getExample,
  updateExample,
  deleteExample,
}

