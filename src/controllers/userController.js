'use strict';

const Repository = require('../repositories/userRepository');

exports.get = (req, res, next) => {
    Repository.getAll()
        .then(user => res.status(200).send(user))
        .catch(err => res.status(500).send(err));
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