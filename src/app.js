//server
const express = require("express");
const cors = require("cors");
const pkg = require("../package.json");
const morgan = require("morgan");
const grocersRoutes = require("./routes/grocers.router");
const productsRoutes = require ('./routes/products.router')

const app = express();

// Middlewares
app.use(cors());
app.set("pkg", pkg);
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//router
//app.use('/', (req, res) => {
//res.json("welcome")
//})
app.use(productsRoutes);
app.use(grocersRoutes);
module.exports = app;
