// const mysql = require('mysql');

// var mysqlConnection = mysql.createConnection({
//     host:'198.54.115.44',
//     user:'avocgocd_sanijew',
//     password:'Stellar!!11',
//     database :'avocgocd_sanitest',
//     multipleStatements: true
// });

// mysqlConnection.connect((err) => {
//     if(!err){

//         console.log("connected");
//     }
//     else{
//         console.log("connection failed");
//     }
// });

// module.exports = mysqlConnection;
const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  connectionLimit: 10,
  host: "198.71.225.62",
  user: "NepalUser",
  password: "$Els59c0",
  database: "NepalDB",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("connection failed");
  }
});

module.exports = mysqlConnection;
