const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/categoryController')

Route
    .get('/', categoryController.getCategory)
    .get('/:id', categoryController.getCategoryById)
    .post('/', categoryController.addCategory)
    .delete('/:id', categoryController.deleteCategory)
    .patch('/:id', categoryController.updateCategory)

module.exports = Route