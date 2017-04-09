var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = 7777;

//controllers
var betController = require("./controllers/betController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json())
app.use("/api", betController);

app.listen(port,function(){
    console.log("Started listening on port", port);
})

// Connect to mongodb database
mongoose.connect("mongodb://localhost/betsie");