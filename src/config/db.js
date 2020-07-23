var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/db_users");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;