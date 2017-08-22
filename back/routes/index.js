/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

router.get('/login', (req, res) => {
    res.send('it works');
    console.log('response from /login');
});

// router.get('/', function(req, res) {
//     res.render('index.html');
// });

module.exports = router;