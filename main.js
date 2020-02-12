const express = require('express')
const app = express()
app.use(express.static('public'))

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "remotemysql.com",
  user: "W5ocH6y7sc",
  password: "jZCT6D8Ex4",
  database: "W5ocH6y7sc"
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

app.listen(8000, () => {
    console.log('http://localhost:8000')
})
