var express = require("express");
var bodyParser = require("body-parser");

var ProductsRoutes = require("./routes/products");
var cookieParser = require('cookie-parser');


var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get("/products", ProductsRoutes);
// app.get("/products/:id", ProductsRoutes);
// app.delete("/delete/:id", ProductsRoutes);
// app.put("/editproduct/:id", ProductsRoutes);
// app.post("/new", ProductsRoutes);
app.use(cookieParser());
if(process.env.NODE_ENV === "production"){
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}
app.use('/', ProductsRoutes);

app.use(function (req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });

app.listen(process.env.PORT || 3001, ()=> {
    console.log('go to http://localhost:3000/products to see the products');
}); 

