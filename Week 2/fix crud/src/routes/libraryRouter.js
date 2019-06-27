const express = require('express')
const Route = express.Router()

const bookController = require('../controllers/bookController')

Route
  .get('/', bookController.getBooks)
  .get('/:id', bookController.getBookById)
  .post('/', bookController.addBook)
  .delete('/:id', bookController.deleteBook)
  .patch('/:id', bookController.updateBook)

module.exports = Route
