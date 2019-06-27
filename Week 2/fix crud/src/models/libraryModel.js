const db = require('../configs/db')

module.exports = {
    getBooks: (callback) => {
        db.query(`SELECT * FROM library`, (err, result) => {
            if (err) console.log(err)

            callback(err, result)
        })
    },
    
    getBookById: (idBook) => {
        return new Promise((resolve, reject) => {
            let sql = `select library.id, library.book_title, library.writer, library.location, category.category
                        from library inner join category
                        on library.id_category = category.id
                        where library.id = ?`
            db.query(sql, idBook, (err, res) => {
                if (!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    addBook : (book) => {
        return new Promise((resolve, reject) => {
            let sql = `insert into library set ? `
            db.query(sql, book, (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    deleteBook : (book) => {
        return new Promise((resolve, reject) => {
            let sql = `delete from library where id = ? `
            db.query(sql, book, (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    },

    updateBook : (book, idBook) => {
        return new Promise((resolve, reject) => {
            let sql = `update library set ? where id = ?`
            db.query(sql, [book, idBook], (err, res) => {
                if(!err) resolve(res)
                reject(new Error(err))
            })
        })
    }
}