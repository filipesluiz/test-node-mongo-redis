var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_employees');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    mail: String,
    role: String
});

var Person = mongoose.model('Person', personSchema);
module.exports = Person;