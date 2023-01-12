const {Specie} = require('../db')

const seedSpecies = async() => {
  Specie.bulkCreate([
    {name:"dog" },
    {name:"cat" },
  ])
}

module.exports = seedSpecies;