var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
        unique:true,
        required: true
    },
    lastname: {
        type: String,
        unique:true,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        unique:true,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }

});

// Collection "users"
module.exports = mongoose.model('users', userSchema);