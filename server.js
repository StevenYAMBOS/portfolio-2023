const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'stevenyambos@gmail.com',
    pass: 'mukblxfxanwqozxw' // Enter here password for email account from which you want to send emails
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderEmail = req.body.from;
  let messageSubject = req.body.subject;
  let messageText = req.body.message;

  let mailOptions = {
    to: ['stevenyambos@gmail.com'], // Enter here the email address on which you want to send emails from your customers
    from: senderEmail,
    subject: messageSubject,
    text: messageText,
  };

  if (senderEmail === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
      // res.end('error');
    } else {
      console.log('Message envoyé: ', response);
      // res.end('sent');
      res.status(200).json({ message: 'Email envoyé avec succès lol' });
    }
  });
});

app.listen(port, function () {
  console.log('Le serveur est lançé sur le port: ', port);
});