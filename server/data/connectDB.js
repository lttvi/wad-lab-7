const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    insecureAuth: true
});

connection.connect((err) => {
    if (err) console.log(err);
});

module.exports = connection;