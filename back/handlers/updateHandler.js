/**
 * Created by user on 12.10.17.
 */
require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const url = require('url');

module.exports = {

    updateList: (req, res) => {
        console.log('Hello, i will update your cell');
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
                        let index = url.parse(req.url, true).query.index;
                        console.log('Index of sickLeave: ' + index);
                        let updatedSickLeave = req.body;
                        console.log(updatedSickLeave);
                        // User.findByIdAndUpdate(id,
                        //     {
                        //         $set: {
                        //             "lists[index]": {
                        //                 dateFrom: updatedSickLeave.dateFrom,
                        //                 dateTo: updatedSickLeave.dateTo,
                        //                 type: updatedSickLeave.type
                        //             }
                        //         }
                        //     },
                        //     {
                        //         new: true
                        //     },
                        //     function(err, doc){
                        //         if(err){
                        //             console.log(err);
                        //         }
                        //     }
                        // )

                        User.findById(id, function(err, doc){
                            if(err){
                                console.log(err);
                            }
                            else{
                                doc.lists[index].type = updatedSickLeave.type;
                                doc.lists[index].dateFrom = updatedSickLeave.dateFrom;
                                doc.lists[index].dateTo = updatedSickLeave.dateTo;
                                doc.markModified('lists');
                                doc.save(function(err, user){
                                    if(err){
                                        console.log(err);
                                        res.status(501).json({
                                            "data": "",
                                            "message": "Updating element failed",
                                            "type": false
                                        })
                                    }
                                    else{
                                        console.log(user);
                                        console.log('data updated successfully');
                                        res.status(200).json({
                                            "data": "",
                                            "message": "data updated successfully",
                                            "type": "true"
                                        })
                                    }
                                });
                            }
                        });

                    }
                }
            })
        }
    }
}
