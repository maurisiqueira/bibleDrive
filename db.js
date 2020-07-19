var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://transparencia-a8fzt.mongodb.net/bibledrive');
 
var userSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'users' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema }