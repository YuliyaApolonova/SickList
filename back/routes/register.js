/**
 * Created by user on 22.08.17.
 */
/**
 * Created by user on 01.08.17.
 */
/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const passport = require('passport');
const user = require('../models/user');
const router = express.Router();
const crypto = require('crypto');

router.post('/register', function(req, res, next) {
    console.log('Registering user:' + JSON.parse(req.body).username); //works
    res.status(200);
});

module.exports = router;
