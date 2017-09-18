/**
 * Created by user on 28.07.17.
 */
/**
 * Created by user on 20.07.17.
 */
const mongoose = require('mongoose');

// const passportLocalMongoose = require('passport-local-mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    telephone: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    lists: Array,
    // password: {
    //     type: String,
    //     required: true
    // },
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET");
};

// UserSchema.methods.validPassword = function(pwd) {
//     return (this.password === pwd);
// }

// UserSchema.plugin(passportLocalMongoose); // takes care of salting and hashing the password
//
// module.exports = mongoose.model('User', UserSchema);
mongoose.model('User', UserSchema);