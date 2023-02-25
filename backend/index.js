import express from 'express'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Platanopower123",
    database: "book"
})

app.get("/", (req, res)=> {
    res.send("<h1>Hello World</h1>")
})

app.get("/books", (req, res)=> {
    const q = "SELECT * FROM books"
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/*", (req, res)=> {
    res.send("<h1>Page Not Found</h1>")
})



app.listen(3000, () => {
    console.log("Connected!")
})