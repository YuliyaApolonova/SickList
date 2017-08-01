
/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();

const sickLists = 12;

router.get('/sick_count', (req, res) => {
    res.send(JSON.stringify(sickLists));
    console.log('response from /sick_count');
});

module.exports = router;