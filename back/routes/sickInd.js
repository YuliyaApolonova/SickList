/**
 * Created by user on 27.07.17.
 */
const express = require('express');
const router = express.Router();
require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const leaves = 18;

router.get('/sick_count', (req, res) => {
    console.log(req.headers['authorization']);
    let token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, 'MY_SECRET', function(err, decoded){
        if(err){
            console.log(err);
        }
        else{
            console.log(decoded._id);
            // let id = decoded._id;
            // User.findById(id)
            //     .exec(function(err, user){
            //         res.status(200).json()
            //     });
        }
    })
    res.send(JSON.stringify(leaves));
    console.log('response from /sick_count');


     // console.log('req.payload ' + req.payload); //undefined
    // if(!req.payload._id){
//         console.log('unauthorised');
//         res.status(401).json({
//             "message": "UnauthorisedError: private profile"
//         });
//     }
//     else{
//         User
//             .findById(req.payload._id)
//             .exec(function(err, user){
//                 res.status(200).json(user);
//             });
//     }
})

            /*working variant*/
// const sickLists = 12;

// router.get('/sick_count', auth, (req, res) => {
//     res.send(JSON.stringify(sickLists));
//     console.log('response from /sick_count');
// });

module.exports = router;