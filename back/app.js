"use strict";
const express = require('express');
const app = express();
const expressSession = require('express-session');

const path = require('path');
const http = require('http');
const fs = require('fs');
const favicon = require('serve-favicon');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const logger = require('morgan');

var port = process.env.port || 1337;

const router = express.Router();

const mongoose = require('mongoose');
const DB = "mongodb://localhost/sickLists";

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const index = require('./routes/index');
const getList = require('./routes/getList');

const User = require('./models/user');


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use('/', express.static(__dirname + '/../dist'));

app.set('views', path.join(__dirname, '../my-app/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.use(path.join(express.static(__dirname, 'my-app')));

app.use(expressSession({secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false}));

app.use(cors()); // later
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

//app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', route_index);

// app.use(login);

app.use(index);
app.use(getList);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// mongoose.connect(DB, function(err) {
//     if (err) {
//         return err;
//     } else {
//         console.log('Successfully connected to ' + DB);
//     }
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// router.get('*', (req,res) => {
//     res.sendFile('index.html', {root: '../my-app/src'}); // works, but not render components
// })

app.listen(port);
console.log('App running on port ' + port);

module.exports = app;