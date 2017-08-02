/**
 * Created by user on 01.08.17.
 */
/**
 * Created by user on 27.07.17.
 */
var express = require('express');
var passport = require('passport');
var user = require('../models/user');
var router = express.Router();

// router.post('/login', function(req, res) {
//     user.register(new user({ username : req.body.username }), req.body.password, function(err, account) {
//         if (err) {
//             return res.render('register', { account : account });
//         }
//
//         passport.authenticate('local')(req, res, function () {
//             res.redirect('/');
//         });
//     });
// });

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

router.post('/login', passport.authenticate('local'), {
    successRedirect: '/home',
    failureRedirect: '/login_failure',
    failureFlash: 'Invalid username or password'
    }
)

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/start');
});

module.exports = router;
