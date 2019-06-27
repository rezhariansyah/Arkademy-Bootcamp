const db = require('../configs/db')

module.exports = {
    getCategory : (callback) => {
        db.query(`SELECT * FROM category`, (err, result) => {
            if (err) console.log(err)

            callback(err, result)
        })
    },

    getCategoryById : (id) => {
        return new Promise((resolve, reject) => {
            let sql = `select * from category where id = ?`
            db.query(sql, id, (err, res) => {
                if (!err) resolve(res)
                reject(new Error(err))
            })
        })
    },
    
    addCategory : (data) => {
        return new Promise((resolve, reject) => {
            let sql = `insert into category set ? `
            db.query(sql, [data], (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    deleteCategory : (id) => {
        return new Promise((resolve, reject) => {
            let sql = `delete from category where id = ? `
            db.query(sql, id, (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    updateCategory : (data, id) => {
        return new Promise((resolve, reject) => {
            let sql = `update category set ? where id = ?`
            db.query(sql, [data, id], (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    }
}