/** MONGO **/
var mongoose = require('mongoose');
//mongoose.connect("mongodb://127.0.0.1:27017/db_users", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect("mongodb://10.61.47.233:27020/db_users"
, {useNewUrlParser: true, useUnifiedTopology: true, user:'oifibraappuser', pass:'t3mpor4ri4@19@'});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var User = mongoose.model('User', userSchema);

/** REDIS **/
var redis = require('redis');
//var redisClient = redis.createClient(6379, '10.61.47.238');
var redisClient = redis.createClient({
    host : '10.61.47.238',
    port : 6379,
    no_ready_check: true,
    auth_pass: 'oifibra@platapp_dev'                                                                                                                                                    
});
//redisClient.auth('oifibra@platapp_dev', () => console.log('Redis Connected!!!'));
redisClient.on('error', err => {
    console.log("Erro Redis", err);
});


/** MYSQL **/
/*var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'bau_talentos'
});

//using wrapper with js object
const PoolConnections = ( function(){
    async function execute (query){
        return await new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err)
                    reject(err);
        
                connection.query(query, (error, result) => {
                    connection.release();
                    if(error)
                        throw error;
                    console.log('Query result:', result);
                    resolve(result);
                });
            });
        })
    }

    return {
        query: execute
    }

})();
    
 

// conn.connect((err) => {
//     if(err)
//         console.log('error to connect!', err);
// });*/

//module.exports = {User, redisClient, PoolConnections};
module.exports = {User, redisClient};