var express = require("express");
var bodyParser = require("body-parser");

var ProductsRoutes = require("./routes/products");



var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get("/products", ProductsRoutes);
// app.get("/products/:id", ProductsRoutes);
// app.delete("/delete/:id", ProductsRoutes);
// app.put("/editproduct/:id", ProductsRoutes);
// app.post("/new", ProductsRoutes);

app.use('/', ProductsRoutes);

app.listen(process.env.PORT || 3001, ()=> {
    console.log('go to http://localhost:3000/products to see the products');
}); 

