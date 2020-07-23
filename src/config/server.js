const express = require('express'); // () execute function express module return
const bodyParser = require('body-parser');
const userRoute = require('../routes/userRoute'); 
const app = express();

require('../routes/index')(app); //config routes in index by ref

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/service', userRoute);
app.set('view engine', 'ejs');
app.set('views', './src/views'); //the path starts from where this module will be used, in app.js. 

const redis = require('redis');
const redisClient = null;// = redis.createClient();
module.exports = { app, redisClient };