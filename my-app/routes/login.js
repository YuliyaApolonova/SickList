/**
 * Created by user on 21.07.17.
 */
const express = require('express');
const passport = require('passport');
// var Account = require('../models/account');


const router = express.Router();

router.post('/login', passport.authenticate('local',  { successRedirect: '/home',
  failureRedirect: '/login' }), function(req, res) {
  res.redirect('/home');
});


module.exports = router;
