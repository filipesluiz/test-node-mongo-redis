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

    create(User){
        return User.create(User);
    }

    update(id, User){
        const updateUser = Object.assign(User);
        return User.findByIdAndUpdate(id, updateUser, {new: true});
    }

    delete(id){
        return User.findByIdAndDelete(ie);
    }
}
