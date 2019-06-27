const express = require('express')
const Route = express.Router()

const libcatController = require('../controllers/libcatController')

Route
  .get('/', libcatController.getAll)
  .get('/filter', libcatController.filter)

module.exports = Route