/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
const removeHandler = require('../handlers/removeHandler');

router.delete('/remove', removeHandler.removeList);

module.exports = router;