
/**
 * Created by user on 01.08.17.
 */

/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
const addHandler = require('../handlers/addHandler');

router.post('/add', addHandler.addList);

module.exports = router;