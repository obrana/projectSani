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

Router.get('/products/:id', function (req, res, next){
    
    connection.query('SELECT * FROM products where id = ? ', req.params.id, function(err, rows, fields){
        if(!err)
        res.status(200).json({
            status: 'success',
            data: rows[0]
        })
        else
        res.status(502).json([{
            status:'failed',
            errMsg: 'Error while performing query.'
        }])
    });
});


Router.delete('/products/:id', function (req, res, next){
    
    connection.query('DELETE FROM products where id = ? ', req.params.id, function(err, rows, fields){
        if(!err)
        res.status(200).json({
            status: 'successuflly deleted' ,
            data: rows[0]
        })
        else
        res.status(502).json([{
            status:'failed',
            errMsg: 'Error while performing query.'
        }])
    });
});


Router.post('/new',function (req, res, next){
    var id = req.body.id;
    var name = req.body.name;
    var details = req.body.details;
    var category = req.body.category;
    var metal = req.body.metal;
    var gender = req.body.gender;
    var unit = req.body.unit;
    var price = req.body.price; 
     

     var query = `INSERT INTO products (id, name, price, details, metal, category, gender, unit) VALUES ("${id}", "${name}", "${price}", "${details}", "${metal}", "${category}", "${gender}", "${unit}")`;
    // var query = `call create_procedure ('${product_name}', '${product_details}', '${categories}', '${metal}', '${product_images}', '${price}', '${unit}', '${gender}')`;
    connection.query(query, function (err, rows) {
        if (!err) {
            console.log(query, rows);
            res.send(rows);
        } else { 
            console.log(query, rows);
            throw err;
        }
    });
});

module.exports = Router;   