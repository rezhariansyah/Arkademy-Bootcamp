const libcatModels = require('../models/libcatModel')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getAll : (req, res) => {
        libcatModels.getAll((err, result) => {
            if (err) console.log(err)

            MiscHelper.response(res, result, 200)
        })
    },

    filter : (req, res) => {
        let location = req.query.location
        let category = req.query.category

        libcatModels.filter(location, category)
        .then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}