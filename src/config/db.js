/** MONGO **/
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/db_users", {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var User = mongoose.model('User', userSchema);

/** REDIS **/
var redis = require('redis');
var redisClient = redis.createClient();

/** MYSQL **/
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'bau_talentos'
});

conn.connect((err) => {
    console.log('error to connect!', err);
});

module.exports = {User, redisClient, conn};