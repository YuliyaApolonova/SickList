/**
 * Created by user on 01.08.17.
 */
/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();

const lists = [
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'},
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'},
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'},
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'},
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'},
    {dateFrom: '2017-04-03', dateTo: '2017-05-03'}
]

router.get('/list', (req, res) => {
    res.send(JSON.stringify(lists));
    console.log('response from /list');
});

module.exports = router;