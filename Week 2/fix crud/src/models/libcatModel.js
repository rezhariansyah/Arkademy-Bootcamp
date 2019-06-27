const db = require('../configs/db')

module.exports = {
    getAll : (callback) => {
        let sql = `select library.id, library.book_title, library.writer, library.location, category.category
                from library inner join category
                on library.id_category = category.id
                where library.id;`
        db.query(sql, (err, result) => {
            if (err) console.log(err)

            callback(err, result)
        })
    },

    filter : (location, category) => {
        return new Promise((resolve, reject) => {
            let sql = `select library.id, library.book_title, library.writer, library.location, category.category 
                    from library
                    inner join category
                    on library.id_category = category.id`
                    console.log(sql)
            if(location === undefined && category === undefined) {
                sql = sql
            } else if (location || category === undefined) {
                sql += ` where location like '%${location}%'`
            } else if (location === undefined || category) {
                sql += ` where category like '%${category}%'`        
            }
            db.query(sql, (err, res) => {
                if (!err) resolve(res)
                reject(new Error(err))
            })
        })
    }
}