/**
 * Created by user on 21.07.17.
 */
const express = require('express');

const router = express.Router();

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});
