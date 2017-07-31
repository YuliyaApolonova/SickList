/**
 * Created by user on 21.07.17.
 */
const express = require('express');

const router = express.Router();

router.get('/vacationList', function(req, res) {
  // res.redirect('/home');
  var lists = [
    {dateFrom: 'dateFrom', dateTo: 'dateTo', type: 'vacation'},
    {dateFrom: 'dateFrom2', dateTo: 'dateTo2', type: 'vacation'}
  ];
  res.json(lists);
});


module.exports = router;
