/**
 * Created by user on 01.08.17.
 */
/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const passport = require('passport');
// const user = require('../models/user');
const router = express.Router();

router.post('/login', function(req, res){
    passport.authenticate('local', function(err, user, info){
        let token;
        // If Passport throws/catches an error
        if (err) {
            console.log('passport err:' + err);
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if(user){
            token = user.generateJwt();
            console.log('token:' + token);
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);
})

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

// router.post('/login',  passport.authenticate('local', {
//     successRedirect: '/login_success',
//     failureRedirect: '/login_failure', // /login_failure
//     failureFlash: 'Invalid username or password',
//     successFlash: 'welcome!'
//     })
//
// );

// router.get('/login_success', function(req, res){
//     res.send('All is Ok');
// })
//
// router.get('/login_failure', function(req, res){
//     res.send('authorisation failed');
// })


                  /*working variant*/

// router.post('/login', function(req, res){
//     // console.log(req.body);
//     /*result*/
//     //{ username: 'Vasya', password: 'Vasya' }
//     res.send(true);
// });
//
// router.get('/logout', function(req, res, next) {
//     req.logout();
//     if(req.session){
//         req.session.destroy(function(err){
//             if(err){
//                 console.log('Destroy session error');
//                 return next(err);
//             }
//             else{
//                 console.log('Session successfully destroyed');
//             }
//         })
//     }
//     res.send('Good bye');
//     // Here must be redirect to /start page
// });

module.exports = router;
