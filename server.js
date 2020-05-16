const express = require("express");
const bodyParser = require("body-parser");

const ProductsRoutes = require("./routes/products");

var app = express();
app.use(bodyParser.json());

app.use("/product", ProductsRoutes);

app.listen(4000);
