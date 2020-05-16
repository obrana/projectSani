const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db");

// Get all products
router.get("/products", function (req, res) {
  var query = "SELECT * FROM products";
  connection.query(query, function (error, results) {
    if (error) throw error;
    res.json(results);
  });
});

// Router.get('/', (req, res) => {
// mysqlConnection.query('SELECT * FROM NepalDB.products', (err, rows, fields) =>{
//     if(!err){
//         res.send(rows);
//     }
//     else{
//         console.log(err);
//     }
// })
// });
module.exports = router;
