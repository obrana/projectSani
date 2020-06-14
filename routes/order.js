var express = require('express');
var Router = express.Router();
var connection = require('../db'); 


Router.get('/orders', function (req, res){
    var query="SELECT * FROM orders";
connection.query(query, function (error, results) 
 {
  if(error) throw error;
    res.send(JSON.stringify(results));
})
});


Router.get('/orderdetail/:id', function (req, res) {
    var id = req.params.id;
    var query = `SELECT * FROM orders where orders.id = ${id}`;
    connection.query(query, function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});
 

Router.get('/orders/:id', function (req, res, next){
    
    connection.query('SELECT * FROM orders where id = ? ', req.params.id, function(err, rows, fields){
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


Router.delete('/orders/:id', function (req, res, next){  
    var id = req.params.id;
    
   connection.query(`DELETE FROM orders where id = '${id}'`, function(error, results, fields){
        if(error) throw error; 
        res.send(JSON.stringify(results)); 
    }); 
});



Router.post('/neworder', (req, res) => {
    var order_id = req.body.order_id;
    var name = req.body.name; 
    var address = req.body.address;
    var zip = req.body.zip;
    var city = req.body.city;
    var ordernumber = req.body.ordernumber; 
  
  
     var query = `INSERT INTO orders (order_id, name, address, zip, city, ordernumber) VALUES ("${order_id}", "${name}", "${address}", "${zip}", "${city}", "${ordernumber}")`;
   connection.query(query, (err, rows) => {
        if (!err) {
            console.log(query, rows);
            res.send(rows);

        } else { 
           // console.log(query);
            // res.redirect('/products')
            throw err;
        }
    });
});  

module.exports = Router;    