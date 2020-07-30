'use strict';

const Repository = require('../repositories/userRepository');
var {redisClient} = require('../config/db');

exports.get = (req, res, next) => {

    redisClient.get('all', (err, reply) => {
        if (reply) {
            console.log('Get data from Redis Cache');
            res.send(reply);
        } else {
            console.log('Get data from DB')
            Repository.getAll()
                .then(user => {
                    redisClient.set('all', JSON.stringify(user));
                    redisClient.expire('all', 20);
                    res.status(200).send(user);
                })
                .catch(err => res.status(500).send(err));

        }
    })

};


exports.getById = (req, res, next) => {
    Repository.getById(req.params.id)
        .then(user => res.status(200).send(user))
        .catch(err => res.status(500).send(err));
};



exports.post = (req, res, next) => {
    const newUser = req.body;

    Repository.create(newUser)
        .then(user => res.status(200).send(user))
        .catch(err => res.status(500).send(err));
};


exports.put = (req, res, next) => {
    const u = req.body;

    Repository.update(req.params.id, u)
        .then(user => res.status(201).send(user))
        .catch(err => res.status(500).send(err));
};

exports.delete = (req, res, next) => {
      Repository.delete(req.params.id)
        .then(user => res.status(200).send('delete succeeded!'))
        .catch(err => res.status(500).send(err));
};