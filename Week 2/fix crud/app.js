require('dotenv').config() // Initialize dotenv config

const express = require('express') // Import express
const bodyParser = require('body-parser') // Import body-parses
const app = express() // Create method
const port = process.env.SERVER_PORT || 5000 // Default PORT

app.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
}) // Create listening app

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

// routing
app.use('/library', require('./src/routes/libraryRouter'))
app.use('/category', require('./src/routes/categoryRouter'))
app.use('/libcat', require('./src/routes/libcatRouter'))
