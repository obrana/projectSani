const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../db'); 


Router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM NepalDB.products', (err, rows, fields) =>{
    if(!err){
        res.send(rows);
    }
    else{
        console.log(err);
    }
})
});
module.exports = Router; 