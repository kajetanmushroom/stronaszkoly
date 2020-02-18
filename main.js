const express = require('express')
const app = express()
app.use(express.static('public'))

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "remotemysql.com",
  user: "VvFC5qfVuc",
  password: "QRL0XkaF2O",
  database: "VvFC5qfVuc"
})

app.get('/api/schools', (req, res) => {
    let limit = 10;
    if(req.query.limit) limit = parseInt(req.query.limit);
    console.log(limit);
    
    con.query('SELECT * FROM schools ORDER BY ID DESC LIMIT ?', [limit], (err, result) => {
        if(err) return console.log(err);
        console.log(result);
        
        res.send(JSON.stringify(result));
    });
    
});

app.get('/api/school', (req, res) => {
    let schoolID = req.query.schoolID;
    con.query('SELECT * FROM schools WHERE ID = ?', [schoolID], (err, result) => {
        if(err) return console.log(err);
        console.log(result[0]);
        
        res.send(JSON.stringify(result[0]));
    });
});

app.listen(8000, () => {
    console.log('http://localhost:8000')
})
