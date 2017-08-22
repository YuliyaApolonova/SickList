/**
 * Created by user Jull on 03.08.17.
 */

const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', function (err) {
    // Обрабатываем ошибку
});
db.once('open', function callback() {
    // Соединение прошло успешно
});

var Schema = new mongoose.Schema({
    _id: String,
    username: String,
    password: String,
    lists: [
        {dateFrom: String,
        dateTo: String
        }
    ]
})

const id = '5982eae30b5618e2b440c970';

const list = mongoose.model('list', Schema);

module.exports = {
    getList: function(req, res) {
        list.findOne({}, function(err, doc){
            console.log('Your data: ' + JSON.stringify(doc.lists));
            /*console.log */
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
}