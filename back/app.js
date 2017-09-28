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

let port = process.env.port || 1337;

const router = express.Router();

const mongoose = require('mongoose');

const DB = "mongodb://localhost/sickLists";
const MongoStore = require('connect-mongo')(expressSession);

const index = require('./routes/index');
const getList = require('./routes/getList');
const vacationInd = require('./routes/vacationInd');
const sickInd = require('./routes/sickInd');
const login = require('./routes/login');
const register = require('./routes/register');
const addList = require('./routes/addList');
const sendMail = require('./routes/send-mail');

// const User = require('./models/user');

const jwt = require('express-jwt');

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
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
// res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
// res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

//app.use(express.static(path.join(__dirname, 'public')));

app.use(index);
app.use(getList);
app.use(vacationInd);
app.use(sickInd);
app.use(login);
app.use(register);
app.use(sendMail);
app.use(addList);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

                                             /*passport*/
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
require('./config/passport');
// passport.use(new LocalStrategy({passReqToCallback : true},
//     function(username, password, done) {
//         User.findOne({ username: username }, function(err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username.' });
//             }
//             if (!user.validPassword(password)) {
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, user);
//         });
//     }
// // ));
//
// passport.use(new LocalStrategy({passReqToCallback : true}, User.authenticate));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//

app.use(passport.initialize());
// app.use(passport.session());
app.use(express.Router());

mongoose.connect(DB, function(err) {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('Successfully connected to ' + DB);
    }
});

// error handler
app.use(function (err, req, res, next) {
    if(err.name === 'UnauthorisedError'){
        res.status(401);
        res.json({"message": err.name + ":" + err.message});
    }
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

// router.get('*', (req,res) => {
//     res.sendFile('index.html', {root: '../my-app/src'}); // works, but not render components
// })

app.listen(port);
console.log('App running on port ' + port);

module.exports = app;