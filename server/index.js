import Axios from './node_modules/axios';
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '123456789',
    database: 'student_management',
})

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    if (userName == password) {
        db.query(`SELECT * FROM student WHERE StudentID = ?`,
            [password],
            (err, result) => {
                if (err) {
                    res.send({ err: err });
                }
                if (result) {
                    // res.send(result.StudentID);
                    console.log(result);
                    Axios.post('http://localhost:3000/course-register', {
                        studentID: result.StudentID
                    }).then((Response) => {
                        console.log(Response);
                    });
                } else {
                    res.send({ message: 'Wrong username or password!' });
                }
            })
    }
    else {
        console.log('Wrong username or password!')
    }
})

app.get('/get-available-courses', (req, res) => {
    const userName = req.body.userName;
    db.query(`SELECT * FROM course`,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                res.send(result);

            } else {
                res.send({ message: 'Course list is empty!' });
            }
        })
})

app.get('/get-registered-course', (req, res) => {
    const studentID = req.body.studentID;
    const courseID = [];
    db.query(`SELECT CourseID FROM studentcourse WHERE StudentID = ?`,
        [studentID],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                courseID = result;
            } else {
                res.send({ message: 'No course was registered!' });
            }
        });
    db.query(`SELECT * FROM course WHERE CourseID = ?`,
        [courseID],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                res.send(result);
            } else {
                res.send({ message: 'No course was registered!' });
            }
        })
});

/*
 "Create  new api to update current user’s registered courses."
*/
app.get('/update-courses', (req, res) => {
    const oldCourseID = req.body.oldcourseID;
    const newCourseID = req.body.newcourseID;
    const studentID = req.body.studentID;

    db.query(`SELECT Id FROM studentcourse WHERE StudentID = ? AND CourseID = ?`,
        [StudentID, courseID],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                const Id = result;
                db.query(
                    `UPDATE studentcourse SET CourseID = ? WHERE (Id = ? AND)`,
                    [courseID, Id],
                    (err, result) => {
                        if (err) {
                            console.log(err)
                        }
                        res.send(result)
                    })
            } else {
                res.send({ message: 'No row with that StudentID and CourseID' });
            }
        })
});

app.get('/register-course', (req, res) => {
    const courseID = req.body.courseID;
    const studentID = req.body.studentID;
    db.query(`INSERT INTO studentcourse (StudentID, CourseID) VALUES (?, ?)`,
        [studentID, courseID],
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})



app.listen(3001, () => {
    console.log('server runing')
})