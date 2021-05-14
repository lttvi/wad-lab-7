const express = require('express')
const app = express()

const mysql = require('mysql')
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '123456789',
    database: 'student_management',
})

app.get('/register-course', (req, res) => {
    const courseName = `DM`
    db.query(`INSERT INTO course (CourseName) VALUES (?)`,
    [courseName],
    (err, result) => {
        if (err){
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3001, () => {
  console.log('server runing')  
})