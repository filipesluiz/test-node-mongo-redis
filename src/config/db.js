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
// });

module.exports = {User, redisClient, PoolConnections};