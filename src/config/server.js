var app = require('express')(); // () execute function express module return
app.set('view engine', 'ejs');
app.set('views', './src/views'); //the path starts from where this module will be used, in app.js. 

var redis = require('redis');
var redisClient = redis.createClient();
module.exports = { app, redisClient };