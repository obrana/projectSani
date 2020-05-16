var express = require('express');
var Router = express.Router();
var connection = require('../db'); 


Router.get('/products', function (req, res){
    var query="SELECT * FROM products";
connection.query(query, function (error, results) 
 {
  if(error) throw error;
    res.send(JSON.stringify(results));
})
});

module.exports = Router;   