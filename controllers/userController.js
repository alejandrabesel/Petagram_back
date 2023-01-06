const Sequelize     = require('sequelize');
const user       = require('../models').user;
module.exports = {
 create(req, res) {
    return user
        .create ({
             username: req.params.username,
             status: req.params.status
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return user.findAll({})
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error))
 },
 find (req, res) {
     return user.findAll({
         where: {
             username: req.params.username,
         }
     })
     .then(user => res.status(200).send(user))
     .catch(error => res.status(400).send(error))
  },
};