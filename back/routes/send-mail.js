/**
 * Created by user on 07.09.17.
 */
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

router.post('/send-mail', urlencodedParser, function(req, res) {

    console.log('Sending email...');
    console.log(req.body);

    const formData = req.body.split('\r\n');

    const postData = [];
    for(let i=0;i < formData.length;i++) {
        let tmpArr = formData[i].split('=');
        postData.push({[tmpArr[0]]:tmpArr[1]});
    }
    const name = postData[0].name;
    const recipient = postData[2].email;
    const username = postData[4].username;
    const password = postData[5].password;
    const message = name + '! Thank you for registration. \n Your login: '  + username + '\n Your password: ' + password;
    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            user: 'juliyaapl2602@gmail.com', // my mail
            pass: 'melodika14'
        }
    }));

    const mailOptions = {
        from: 'juliyaapl2602@gmail.com', // sender address
        to: recipient, // list of receivers 'yuliyaapl@mail.ru'
        subject:  'Thanks for registration', // Subject line
        text: message //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            // res.json({yo: info.response});
            res.redirect('/home');
        };
    });

})
router.get('/send-mail', function(req, res){
    console.log('Email sent' + req.body);
})
module.exports = router;