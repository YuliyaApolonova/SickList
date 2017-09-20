/**
 * Created by user on 01.08.17.
 */

const express = require('express');
const router = express.Router();
require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

router.get('/vac_count', (req, res) => {
    console.log(req.headers['authorization']);
    let token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, 'MY_SECRET', function(err, decoded){
        if(err){
            console.log(err);
            res.status(401).json({
                "data": "",
                "message": "Invalid token",
                "type": false

            })
        }
        else{
            if(!decoded._id){
                console.log('Unauthorised');
                res.status(401).json({
                    "data": "",
                    "message": "Unauthorised",
                    "type": false
                })
            }
            else{
                console.log(decoded._id);
                console.log('Authorised successfully');
                const id = decoded._id;
                User.findById(id)
                    .exec((err, user) => {
                        if(err){
                            console.log(err);
                        }
                        else{
                            var counter = 0;
                            let list = user.lists;
                            for(let i = 0; i < list.length; i++){
                                if(list[i].type === 'vacation'){
                                    counter++;
                                }
                            }
                            console.log('counter: ' + counter);
                            res.status(200).json({
                                "data": counter,
                                "message": "Authorised",
                                "type": true
                            })
                        }
                    })
            }
        }
    })
    console.log('response from /sick_count');
})

// const vacations = 14;
//
// router.get('/vac_count', (req, res) => {
//     res.send(JSON.stringify(vacations));
//     console.log('response from /vac_count');
// });

module.exports = router;