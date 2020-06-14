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


Router.get('/orderdetail/:order_id', function (req, res) {
    var order_id = req.params.order_id;
    var query = `SELECT * FROM orders where orders.order_id = ${order_id}`;
    connection.query(query, function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});
 

Router.get('/orders/:order_id', function (req, res, next){
    
    connection.query('SELECT * FROM orders where order_id = ? ', req.params.order_id, function(err, rows, fields){
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

 
Router.delete('/orders/:order_id', function (req, res, next){  
    var order_id = req.params.order_id;
    
   connection.query(`DELETE FROM orders where order_id = '${order_id}'`, function(error, results, fields){
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
    var product_id = req.body.product_id;
  
  
     var query = `INSERT INTO orders (order_id, name, address, zip, city, ordernumber, product_id) VALUES ("${order_id}", "${name}", "${address}", "${zip}", "${city}", "${ordernumber}", "${product_id}")`;
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