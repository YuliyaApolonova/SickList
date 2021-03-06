/**
 * Created by user Jull on 03.08.17.
 */

require('../models/User');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

module.exports = {
    getList: (req,res) => {
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
                        User.findById(id)
                            .exec((err, user) => {
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    let list = user.lists;
                                    console.log('list: ' + list);
                                    res.status(200).json({
                                        "data": list,
                                        "message": "Authorised",
                                        "type": true
                                    })
                                }
                            })
                    }
                }
            })
        }
    }
}

// const db = mongoose.connection;
//
// db.on('error', function (err) {
//     // Обрабатываем ошибку
// });
// db.once('open', function callback() {
//     // Соединение прошло успешно
// });
//
// var Schema = new mongoose.Schema({
//     _id: String,
//     username: String,
//     password: String,
//     lists: [
//         {dateFrom: String,
//         dateTo: String
//         }
//     ]
// })

// const id = '5982eae30b5618e2b440c970';

// const list = mongoose.model('list', Schema);

/*
module.exports = {
    getList: function(req, res) {
        list.findOne({}, function(err, doc){
            console.log('Your data: ' + JSON.stringify(doc.lists));
            /!*console.log *!/
            // Your data: {"_id":"598327bd0b5618e2b440de06",
            //     "lists":[{"dateFrom":"2017-04-03","dateTo":"2017-05-03"},
            //     {"dateFrom":"2017-04-03","dateTo":"2017-05-03"},
            //     {"dateFrom":"2017-04-03","dateTo":"2017-05-03"},
            //     {"dateFrom":"2017-04-03","dateTo":"2017-05-03"},
            //     {"dateFrom":"2018-04-03","dateTo":"2018-05-03"},
            //     {"dateFrom":"2018-04-03","dateTo":"2018-05-03"}]}
            res.send(JSON.stringify(doc.lists));
        })
    }
}*/
