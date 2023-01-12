'use strict';
const {User} = require('../db')


const seedUsers = async() => {
  User.bulkCreate([
    {
      name: 'Jhon Doe',
      email: 'jhonD@gmail.com'
    },
    {
      name: 'Juan Doe',
      email: 'juanD@gmail.com'
    },
    {
      name: 'Jorge Luis Nadal',
      email: 'jorLN@gmail.com'
    },
    {
      name: 'Abderrahim Taboada',
      email: 'abdeTa@gmail.com'
    },
    {
      name: 'Tomas Solano',
      email: 'tomSol@gmail.com'
    },
    {
      name: 'Vicente Jose Gómez',
      email: 'vicentGo@gmail.com'
    },
    {
      name: 'Jaume Mata',
      email: 'jMata@gmail.com'
    },
    {
      name: 'Juan Pedro Sastre',
      email: 'juanPeter@gmail.com'
    },
    {
      name: 'Eulogio Calvo',
      email: 'euvo@gmail.com'
    },
    {
      name: 'Eusebio Heras',
      email: 'euras@gmail.com'
    },
    {
      name: 'Mamadou Fidalgo',
      email: 'Mamado@gmail.com'
    },
    {
      name: 'Leopoldo Cabello',
      email: 'leoCallo@gmail.com'
    },
    {
      name: 'Dario Gonzales',
      email: 'dago@gmail.com'
    },
    {
      name: 'Eloisa Rosado',
      email: 'Elosado@gmail.com'
    },
    {
      name: 'Marcelina Suarez',
      email: 'mares@gmail.com'
    },
    {
      name: 'Feliciana Palomino',
      email: 'felimino@gmail.com'
    },
    {
      name: 'Fatima Mena',
      email: 'fatna@gmail.com'
    },
    {
      name: 'Joaquina Palau',
      email: 'joalau@gmail.com'
    },
    {
      name: 'Rosa Ana Bustos',
      email: 'roana@gmail.com'
    },
    {
      name: 'Dionisia Tejedor',
      email: 'dionisia@gmail.com'
    },
    {
      name: 'Valeria Carballo',
      email: 'vallo@gmail.com'
    },
    {
      name: 'Claudia Muñiz',
      email: 'clauñiz@gmail.com'
    },
    {
      name: 'Estrella Castilla',
      email: 'estrellita@gmail.com'
    },
    {
      name: 'Mercedes Aguado',
      email: 'mercedez@gmail.com'
    },
    {
      name: 'Joaquina Escribano',
      email: 'joabano@gmail.com'
    },
    {
      name: 'Carlota Bosch',
      email: 'boslota@gmail.com'
    },
    {
      name: 'Maria Remedios Fidalgo',
      email: 'remediosxd@gmail.com'
    },
    {
      name: 'Manuela Fuertes',
      email: 'maneFuerte@gmail.com'
    }
  ])

}

module.exports = seedUsers;


