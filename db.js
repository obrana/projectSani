 
var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: '198.71.225.62',
    user: 'NepalUser',
    password: '$Els59c0',
    database: 'NepalDB'

});
connection.getConnection((err) => {
    if(!err){

        console.log("connected");
    }
    else{
        console.log("connection failed");
    }
});

module.exports = connection;