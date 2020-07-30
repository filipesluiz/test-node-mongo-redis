var mongoose = require('mongoose');
var redis = require('redis');
var redisClient = redis.createClient();

mongoose.connect("mongodb://127.0.0.1:27017/db_users", {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var User = mongoose.model('User', userSchema);
module.exports = {User, redisClient};