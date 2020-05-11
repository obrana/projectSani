const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:'localhost', 
    user:'newuser',
    password:'password1234',
    database :'sani',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if(!err){

        console.log("connected");
    }
    else{
        console.log("connection failed");
    }
});

module.exports = mysqlConnection;