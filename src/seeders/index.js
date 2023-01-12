const seedUsers = require('./demo-user')
const seedPets = require('./demo-pet')
const seedRaces = require('./demo-race')
const seedSpecies = require('./demo-specie')
const seedAdmin = require('./demo-admin')

const seedAll = async() => {
    seedAdmin()
    seedSpecies()
    seedRaces()
    seedUsers()
    seedPets()
}

module.exports = seedAll