const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../db');

Router.get('/products', (req, res) => {

mysqlConnection.query('SELECT * from product', (err, rows, fields) =>{
    if(!err){
        res.send(rows);
    }
    else{
        console.log(err);
    }
})

})

module.exports = Router; 