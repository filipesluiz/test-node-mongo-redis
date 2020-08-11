var {PoolConnections} = require('../config/db');

module.exports = new class ArtigosRepositoty {
    findAll(callback){
        PoolConnections.query('select * from artigos').then((result) => {
            return callback(result);
        });
    }
}