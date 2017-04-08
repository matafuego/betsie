var express = require("express");
var path = require("path");
var port = 7777;

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(port,function(){
    console.log("Started listening on port", port);
})