/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/sick_count', function(req, res){
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorisedError: private profile"
        });
    }
    else{
        User
            .findById(req.payload._id)
            .exec(function(err, user){
                res.status(200).json(user);
            });
    }
})

            /*working variant*/
// const sickLists = 12;

// router.get('/sick_count', auth, (req, res) => {
//     res.send(JSON.stringify(sickLists));
//     console.log('response from /sick_count');
// });

module.exports = router;