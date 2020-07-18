'useStrict';

var mongoose = require('mongoose');
var Person = require('../config/db');

module.exports = new class PersonRepositoty {
    getAll(){
        return Person.find();
    }

    getById(id){
        return Person.findById(id);
    }

    create(person){
        return Person.create(person);
    }

    update(id, person){
        const updatePerson = Object.assign(person);
        return Person.findByIdAndUpdate(id, updatePerson, {new: true});
    }

    delete(id){
        return Person.findByIdAndDelete(ie);
    }
}
