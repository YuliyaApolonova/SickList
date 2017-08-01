/**
 * Created by user on 01.08.17.
 */

const express = require('express');
const router = express.Router();

const vacations = 14;

router.get('/vac_count', (req, res) => {
    res.send(JSON.stringify(vacations));
    console.log('response from /vac_count');
});

module.exports = router;