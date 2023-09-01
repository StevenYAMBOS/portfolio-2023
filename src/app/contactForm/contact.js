var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require ('nodemailer');

var app = express();
var server = http.Server(app);
var port = 8000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, response) { 
    response.sendFile(path.join(__dirname, "src/app/contactForm/contact.component.html"));
})

app.post("/send-email", function(req, response) {
    var from = req.body.from;
    var to = "stevenyambos@gmail.com";
    var subject = req.body.subject;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stevenyambos@gmail.com',
            password: 'mukblxfxanwqozxw'
        }
    });


    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error)
        } else {
            console.log("Email Send: " + info.response)
        }
        response.redirect("/")
    })

})

server.listen(port, function(){
    console.log("Le serveur est lançé port: " + port)
}
)