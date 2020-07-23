'useStrict';

var mongoose = require('mongoose');
var User = require('../config/db');

module.exports = new class UserRepositoty {
    getAll(){
        return User.find();
    }

    getById(id){
        return User.findById(id);
    }

    create(user){
        return User.create(user);
    }

    update(id, user){
        const updateUser = Object.assign(user);
        return User.findByIdAndUpdate(id, updateUser, {new: true});
    }

    delete(id){
        return User.findByIdAndDelete(ie);
    }
}
