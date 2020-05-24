var express = require("express");
var bodyParser = require("body-parser");

var ProductsRoutes = require("./routes/products");

var app = express();
app.use(bodyParser.json());

app.get("/products", ProductsRoutes);
app.get("/products/:id", ProductsRoutes);
app.delete("/products/:id", ProductsRoutes);
app.post("/new", ProductsRoutes);

app.listen(3001);
