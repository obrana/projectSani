const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./db');
const ProductsRoutes = require('./routes/products');


var app = express();
app.use(bodyParser.json());

app.use('/products', ProductsRoutes);


app.listen(3000);