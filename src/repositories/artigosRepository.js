var {conn} = require('../config/db');

module.exports = new class ArtigosRepositoty {
    findAll(){
        conn.query('select * from artigos', (error, result) => {
            return result;
        });
    }
}