const librariesModels = require('../models/libraryModel')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getBooks : (req, res) => {
        librariesModels.getBooks((err, result) => {
            if (err) console.log(err)

            MiscHelper.response(res, result, 200)
        })
    },

    getBookById : (req, res) => {
        let idBook = req.params.id

        librariesModels.getBookById(idBook)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    addBook : (req, res) => {
        let book = {
            book_title : req.body.book,
            writer : req.body.writer,
            location : req.body.location,
            id_category : req.body.id_category
        }

        librariesModels.addBook(book)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    deleteBook : (req, res) => {
        let book = req.params.id

        librariesModels.deleteBook(book)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    }, 

    updateBook : (req, res) => {
        let idBook = req.params.id

        let book = {
            book_title : req.body.book,
            writer : req.body.writer,
            location : req.body.location,
            id_category : req.body.id_category
        }

        librariesModels.updateBook(book, idBook)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}