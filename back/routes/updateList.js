/**
 * Created by user on 12.10.17.
 */
/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
const updateHandler = require('../handlers/updateHandler');

router.put('/update', updateHandler.updateList);

module.exports = router;