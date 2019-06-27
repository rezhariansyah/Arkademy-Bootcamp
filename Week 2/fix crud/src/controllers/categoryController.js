const categoryModels = require('../models/categoryModel')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getCategory : (req, res) => {
        categoryModels.getCategory((err, result) => {
            if (err) console.log(err)

            MiscHelper.response(res, result, 200)
        })
    },

    getCategoryById : (req, res) => {
        let id = req.params.id

        categoryModels.getCategoryById(id)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    addCategory : (req, res) => {
        let data = {
            category : req.body.category
        }

        categoryModels.addCategory(data)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    deleteCategory : (req, res) => {
        let id = req.params.id

        categoryModels.deleteCategory(id)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    updateCategory : (req, res) => {
        let id = req.params.id

        let data = {
            category : req.body.category
        }

        categoryModels.updateCategory(data, id)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}