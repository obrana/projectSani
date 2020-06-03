var express = require("express");
var bodyParser = require("body-parser");

var ProductsRoutes = require("./routes/products");


var app = express();
app.use(bodyParser.json());

// app.get("/products", ProductsRoutes);
// app.get("/products/:id", ProductsRoutes);
// app.delete("/delete/:id", ProductsRoutes);
// app.put("/editproduct/:id", ProductsRoutes);
// app.post("/new", ProductsRoutes);

app.use('/', ProductsRoutes);

app.listen(3001);
 