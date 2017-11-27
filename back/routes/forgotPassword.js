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

router.post('/forgot-password', urlencodedParser, function(req, res) {

    console.log('Checking email...');

    // console.log(req.body);
    //
    // const email = req.body.email;
    let message = {
        "message": "success"
    };
      // res.status(200).json({
      //         "data":"",
      //         "message": 'success',
      //         "type": true
      //     });
    console.log(message);
    res.send(message);
    // const message = name + '! Thank you for registration. \n Your login: '  + username + '\n Your password: ' + password;
    // const transporter = nodemailer.createTransport(smtpTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'juliyaapl2602@gmail.com', // my mail
    //         pass: 'melodika14'
    //     }
    // }));
    //
    // const mailOptions = {
    //     from: 'juliyaapl2602@gmail.com', // sender address
    //     to: recipient, // list of receivers 'yuliyaapl@mail.ru'
    //     subject:  'Thanks for registration', // Subject line
    //     text: message //, // plaintext body
    //     // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    // };
    //
    // transporter.sendMail(mailOptions, function(error, info){
    //     if(error){
    //         console.log(error);
    //         res.json({yo: 'error'});
    //     }else{
    //         console.log('Message sent: ' + info.response);
    //         // res.json({yo: info.response});
    //         res.redirect('/home');
    //     };
    // });

});

router.get('/forgot-password', function(req,res){
    res.send(message);
})
module.exports = router;