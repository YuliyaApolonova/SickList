/**
 * Created by user Jull on 03.08.17.
 */

require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

module.exports = {
    addList: (req, res) => {
        console.log('response from /add');
        if(!req.headers['authorization']){
            console.log('No authorisation header');
            res.status(401).json({
                "data": "",
                "message": "No authorisation header",
                "type": false

            })
        }
        else{
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
                        console.log('User id ' + decoded._id);
                        console.log('Authorised successfully');
                        const id = decoded._id;
                        let newSickLeave = req.body;
                        console.log(newSickLeave);
                        User.findByIdAndUpdate(
                            id,
                            {$push:
                                {"lists":
                                    {
                                        dateFrom: newSickLeave.dateFrom,
                                        dateTo: newSickLeave.dateTo,
                                        type: newSickLeave.type
                                    }
                                }
                            },
                            {new: true},
                            function(err, model){
                                if(err){
                                    console.log(err);
                                    res.status(501).json({
                                        "data": "",
                                        "message": "Creating new element failed",
                                        "type": false
                                    })
                                }
                                else{
                                    res.status(200).json({
                                        "data": req.body,
                                        "message": "data saved successfully",
                                        "type": "true"
                                    })
                                }
                            }
                        )
                    }
                }
            })
        }
    }
}
