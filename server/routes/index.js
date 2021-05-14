var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var connection = require('../data/connectDB')

// router.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

var jsonParser = bodyParser.json();

router.post('/login', jsonParser, function (req, res, next) {
	let usr = req.body.Username;
    let pwd = req.body.Password;

    const studentID = 18094

    console.log(usr);
    console.log(pwd);

    if (usr === pwd) 
        if (usr == studentID) {
            res.status(200).send({
                UserID: studentID
            })
            return;
        }
    res.status(403).send();
});

router.get('/courses', function (req, res, next) {
    connection.query("SELECT CourseName FROM lab7.course", (err, result, field) => {
        if (err) {
            console.log(err);
            return;
        }
        courseNames = []
        result.forEach(row => {
            courseNames.push(row.CourseName)
        });

        console.log(courseNames);
        res.status(200).send({
            courseNames: courseNames
        })
    })
});

module.exports = router;
