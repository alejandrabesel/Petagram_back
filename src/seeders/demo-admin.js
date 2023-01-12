const {Admin} = require('../db')

const seedAdmins = async() => {
  User.bulkCreate([
    {
      name: "admin"
    },
  ])
}

module.exports = seedAdmins;