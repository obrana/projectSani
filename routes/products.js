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

Router.delete('/products/:id', function (req, res) {
    var id = req.params.id;
    var query = `DELETE FROM products WHERE id = ${id}`;
    connection.query(query, function (error, results) {  
       if(!err)
       res.send('Delete successfully');
       else
       console.log(err);
    });
});

// Router.post('/new',function (req, res){
//     var name = req.body.name;
//     var details = req.body.details;
//     var category = req.body.category;
//     var metal = req.body.metal;
//     var gender = req.body.gender;
//     var unit = req.body.unit;
//     var price = req.body.price; 
    

//      var query = `INSERT INTO products (name, price, details, metal, category, gender, unit, image) VALUES ("${name}", "${price}", ${details}"), "${metal}", "${category}", "${gender}", "${unit}", "${image}")`;
//     // var query = `call create_procedure ('${product_name}', '${product_details}', '${categories}', '${metal}', '${product_images}', '${price}', '${unit}', '${gender}')`;
//     connection.query(query, (err, rows) => {
//         if (!err) {
//             console.log(query, rows);
//             res.send(rows);
//         } else { 
//             console.log(query, rows);
//             throw err;
//         }
//     });
// });

Router.post('/new', function(req, res, next){
    res.locals.connection.query(`insert into products(name,price) values (''+req.body.name+'',''+req.body.price+'')`, function (error, results, fields){

    })
})

module.exports = Router;   