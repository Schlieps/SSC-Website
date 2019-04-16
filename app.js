require('dotenv').config()

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.post("/contact", urlencodedParser, function(req, res){
    var email = `${req.body.mail}`
    const subject = `${req.body.subject}`
    const message = `
        Contact Details
            First Name: ${req.body.nameFirst}
            Last Name: ${req.body.nameLast}
            E-mail: ${req.body.mail}
            Phone #: ${req.body.number}

            Message: ${req.body.message}`
    ;

    let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: "seattlesocialcircle@gmail.com",
        clientId: process.env.CLIENTID,
        clientSecret: process.env.SECRET,
        refreshToken: process.env.TOKEN
    }
});

    var mail = {
        from: "seattlesocialcircle@gmail.com",
        to: "info@seattlesocialcircle.com",
        // to: "d.schlieps@gmail.com",
        subject: "SSC Website Form Submission",
        text: message
    };

    transporter.sendMail(mail, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent: " + info.response);
        }
        transporter.close();
    });

    res.render("contact-success", {data:req.body});
});

app.get("/events", function(req, res){
    res.render("events");
});

app.get("/artists", function(req, res){
    res.render("artists");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SSC Server Has Started");
});