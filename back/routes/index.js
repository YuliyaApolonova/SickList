/**
 * Created by user on 27.07.17.
 */
var express = require('express');
var router = express.Router();

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