require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.SERVER_PORT || 5000

const mysql = require('mysql')
const conn = mysql.createConnection({ // conect to database
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME|| 'Book_Management'
})

app.listen(port, () => {
    console.log(`\n App listening on ${port} \n`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

// Read
app.get('/', (req, res) => {
    sql = "select * from library"
    conn.query(sql, (err,result) => {
        if(err) throw err
        if(result){
            res.send(result)
        }
    })
})

// Create
app.post('/', (req,res) => {
    const data = {
        name : req.body.name,
        writer : req.body.writer,
        location : req.body.location,
        category : req.body.category
    }
    var sql = `select * from library where name = '${req.body.name}'`
    conn.query(sql, (err,result) => {
        if(result.length > 0){
            if(err) throw err
            res.send('Book already exist')
        } else {
            var sql2 = `insert into library set ?`
            conn.query(sql2, data, (err,result1) => {
                if(err) throw err
                res.send(result1)
            })
        }  
    })
})

// Update
app.patch('/:id', (req,res) => {
    const id = req.params.id

    const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category
    }

    conn.query('UPDATE library SET ? WHERE id = ?', [data, id], (err, result) => {
        if (err) console.log(err)
        res.json(result) //di ubah datanya ke bentuk JSON
    })
})

// Delete
app.delete('/:id', (req,res) => {
    var sql = `delete from library where id = ${req.params.id}`
    conn.query(sql, (err,result) => {
        if(err) throw err
        res.send(result)
    })

})


