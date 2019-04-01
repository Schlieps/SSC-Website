var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/events", function(req, res){
    res.render("events");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SSC Server Has Started");
});