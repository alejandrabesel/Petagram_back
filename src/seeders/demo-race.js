const {Race} = require('../db')

const seedRaces = async() => {
  Race.bulkCreate([
    {name: "beagle", specieId: 1},
    {name: "boxer", specieId: 1},
    {name: "chow", specieId: 1},
    {name: "cockapoo", specieId: 1},
    {name: "dalmatian", specieId: 1},
    {name: "doberman", specieId: 1},
    {name: "husky", specieId: 1},
    {name: "maltese", specieId: 1},
    {name: "bull mastiff", specieId: 1},
    {name: "papillon", specieId: 1},
    {name: "pitbull", specieId: 1},
    {name: "pomeranian", specieId: 1},
    {name: "pug", specieId: 1},
    {name: "rottweiler", specieId: 1},
    {name: "sharpei", specieId: 1},
    {name: "Abyssinian", specieId: 2},
    {name: "Aegean", specieId: 2},
    {name: "American Bobtail", specieId: 2},
    {name: "American Curl", specieId: 2},
    {name: "American Shorthair", specieId: 2},
    {name: "American Wirehair", specieId: 2},
    {name: "Arabian Mau", specieId: 2},
    {name: "Australian Mist", specieId: 2},
    {name: "Balinese", specieId: 2},
    {name: "Bambino", specieId: 2},
    {name: "Bengal", specieId: 2},
    {name: "Birman", specieId: 2},
    {name: "Bombay", specieId: 2},
    {name: "British Longhair", specieId: 2},
    {name: "British Shorthair", specieId: 2},
  ])
}

module.exports = seedRaces;