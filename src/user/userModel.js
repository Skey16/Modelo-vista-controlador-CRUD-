var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return this.model('user').findOne({ email: v })
                .then(user => !user); // Retorna false si el email ya existe en la base de datos
            },
            message: 'El correo electrónico ya está registrado'
          }
          
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }

});


module.exports = mongoose.model('users', userSchema);


