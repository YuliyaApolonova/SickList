/**
 * Created by user on 24.10.17.
 */
/**
 * Created by user on 07.09.17.
 */
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

router.post('/forgot-password', function(req, res) {

    const email = req.body.email;

     const message = 'Your link for changing password: ' + 'http://localhost:4200/change-password' ;

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            user: 'juliyaapl2602@gmail.com', // sender address
            pass: '' // sender password
        }
    }));

    const mailOptions = {
        from: 'juliyaapl2602@gmail.com', // sender address
        to: email, // list of receivers
        subject:  'Restoring password', // Subject line
        text: message //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.status(401).json({
                "message": 'sending mail error',
                "data": "",
                "type": false
            });
        }else{
            console.log('Message sent: ' + info.response);
            // res.redirect('/home');
            res.status(200).json({
                "message": "letter was send",
                "data": message,
                "type": true
            })
        };
    });

});

module.exports = router;

// v ar  hbs = require('nodemailer-express-handlebars'),
//     email = process.env.MAILER_EMAIL_ID || 'auth_email_address@gmail.com',
//     pass = process.env.MAILER_PASSWORD || 'auth_email_pass'
// nodemailer = require('nodemailer');
//
// var smtpTransport = nodemailer.createTransport({
//     service: process.env.MAILER_SERVICE_PROVIDER || 'Gmail',
//     auth: {
//         user: email,
//         pass: pass
//     }
// });
