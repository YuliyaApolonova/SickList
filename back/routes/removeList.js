
/**
 * Created by user on 01.08.17.
 */

/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
const removeHandler = require('../handlers/removeHandler');

router.delete('/remove', (req, res) => {
    console.log('response from /remove');
    // removeHandler.removeList(req, res);
});

module.exports = router;