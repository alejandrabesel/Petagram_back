const {Pet} = require('../db')

const seedPets = async() => {
  Pet.bulkCreate([
    {
      name: "Dodle",
      age: 2,
      image: "https://images.dog.ceo/breeds/beagle/n02088364_15036.jpg",
      looking_partner: false,
      raceId: 1,
      userId: 1,
      gender: "male"
    },
    {
      name: "Peras",
      age: 3,
      image: "https://images.dog.ceo/breeds/boxer/n02108089_1626.jpg",
      looking_partner: false,
      raceId: 2,
      userId: 1,
      gender: "male"
    },
    {
      name: "Ditache",
      age: 3,
      image: "https://images.dog.ceo/breeds/chow/n02112137_10762.jpg",
      looking_partner: false,
      raceId: 3,
      userId: 1,
      gender: "male"
    },
    {
      name: "Asky",
      age: 4,
      image: "https://images.dog.ceo/breeds/cockapoo/Guri5.jpg",
      looking_partner: false,
      raceId: 4,
      userId: 2,
      gender: "male"
    },
    {
      name: "Alta",
      age: 2,
      image: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
      looking_partner: false,
      raceId: 5,
      userId: 2,
      gender: "female"
    },
    {
      name: "Neigiry",
      age: 1,
      image: "https://images.dog.ceo/breeds/doberman/n02107142_34.jpg",
      looking_partner: false,
      raceId: 6,
      userId: 3,
      gender: "female"
    },
    {
      name: "Paty",
      age: 2,
      image: "https://images.dog.ceo/breeds/husky/n02110185_11409.jpg",
      looking_partner: false,
      raceId: 7,
      userId: 4,
      gender: "female"
    },
    {
      name: "Sloter",
      age: 3,
      image: "https://images.dog.ceo/breeds/maltese/n02085936_2422.jpg",
      looking_partner: false,
      raceId: 8,
      userId: 5,
      gender: "female"
    },
    {
      name: "Pavi",
      age: 4,
      image: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_2111.jpg",
      looking_partner: false,
      raceId: 9,
      userId: 5,
      gender: "female"
    },
    {
      name: "Rue",
      age: 5,
      image: "https://images.dog.ceo/breeds/papillon/n02086910_3991.jpg",
      looking_partner: false,
      raceId: 10,
      userId: 6,
      gender: "female"
    },
    {
      name: "Noden",
      age: 6,
      image: "https://images.dog.ceo/breeds/pitbull/pitbull_dog.jpg",
      looking_partner: false,
      raceId: 11,
      userId: 6,
      gender: "male"
    },
    {
      name: "Enchau",
      age: 3,
      image: "https://images.dog.ceo/breeds/pomeranian/n02112018_5860.jpg",
      looking_partner: false,
      raceId: 12,
      userId: 7,
      gender: "male"
    },
    {
      name: "Mebo",
      age: 3,
      image: "https://images.dog.ceo/breeds/pug/n02110958_14563.jpg",
      looking_partner: false,
      raceId: 13,
      userId: 7,
      gender: "male"
    },
    {
      name: "Moram",
      age: 2,
      image: "https://images.dog.ceo/breeds/rottweiler/n02106550_2082.jpg",
      looking_partner: false,
      raceId: 14,
      userId: 8,
      gender: "male"
    },
    {
      name: "Luca",
      age: 1,
      image: "https://images.dog.ceo/breeds/sharpei/noel.jpg",
      looking_partner: false,
      raceId: 15,
      userId: 9,
      gender: "male"
    },
    {
      name: "Suly",
      age: 1,
      image: "https://images.dog.ceo/breeds/beagle/n02088364_17534.jpg",
      looking_partner: false,
      raceId: 1,
      userId: 9,
      gender: "male"
    },
    {
      name: "Coper",
      age: 1,
      image: "https://images.dog.ceo/breeds/boxer/n02108089_2482.jpg",
      looking_partner: false,
      raceId: 2,
      userId: 9,
      gender: "male"
    },
    {
      name: "Naar",
      age: 2,
      image: "https://images.dog.ceo/breeds/chow/n02112137_5742.jpg",
      looking_partner: false,
      raceId: 3,
      userId: 10,
      gender: "female"
    },
    {
      name: "Kabo",
      age: 2,
      image: "https://images.dog.ceo/breeds/cockapoo/george-close-up.jpg",
      looking_partner: false,
      raceId: 4,
      userId: 11,
      gender: "female"
    },
    {
      name: "Habin",
      age: 2,
      image: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
      looking_partner: false,
      raceId: 5,
      userId: 12,
      gender: "female"
    },
    {
      name: "Sumag",
      age: 5,
      image: "https://cdn2.thecatapi.com/images/xnzzM6MBI.jpg",
      looking_partner: false,
      raceId: 16,
      userId: 13,
      gender: "female"
    },
    {
      name: "Facuit",
      age: 5,
      image: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
      looking_partner: false,
      raceId: 17,
      userId: 13,
      gender: "female"
    },
    {
      name: "Ruses",
      age: 5,
      image: "https://cdn2.thecatapi.com/images/d55E_KMKZ.jpg",
      looking_partner: false,
      raceId: 18,
      userId: 14,
      gender: "female"
    },
    {
      name: "Tao",
      age: 5,
      image: "https://cdn2.thecatapi.com/images/TBA3JzB9P.jpg",
      looking_partner: false,
      raceId: 19,
      userId: 14,
      gender: "female"
    },
    {
      name: "Abdor",
      age: 2,
      image: "https://cdn2.thecatapi.com/images/SCHe-SekW.jpg",
      looking_partner: false,
      raceId: 20,
      userId: 15,
      gender: "female"
    },
    {
      name: "Fuske",
      age: 1,
      image: "https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg",
      looking_partner: false,
      raceId: 21,
      userId: 15,
      gender: "female"
    },
    {
      name: "Vicoo",
      age: 1,
      image: "https://cdn2.thecatapi.com/images/z_k-oJ8xG.jpg",
      looking_partner: false,
      raceId: 22,
      userId: 15,
      gender: "female"
    },
    {
      name: "Tao",
      age: 6,
      image: "https://cdn2.thecatapi.com/images/_6x-3TiCA.jpg",
      looking_partner: false,
      raceId: 23,
      userId: 15,
      gender: "female"
    },
    {
      name: "Kowat",
      age: 6,
      image: "https://cdn2.thecatapi.com/images/DBmIBhhyv.jpg",
      looking_partner: false,
      raceId: 24,
      userId: 16,
      gender: "female"
    },
    {
      name: "Nene",
      age: 7,
      image: "https://cdn2.thecatapi.com/images/s42I_BL-a.jpg",
      looking_partner: false,
      raceId: 25,
      userId: 16,
      gender: "female"
    },
    {
      name: "Nula",
      age: 7,
      image: "https://cdn2.thecatapi.com/images/J2PmlIizw.jpg",
      looking_partner: false,
      raceId: 26,
      userId: 17,
      gender: "female"
    },
    {
      name: "Fade",
      age: 3,
      image: "https://cdn2.thecatapi.com/images/OhTkBTPnD.jpg",
      looking_partner: false,
      raceId: 27,
      userId: 17,
      gender: "female"
    },
    {
      name: "Naslo",
      age: 2,
      image: "https://cdn2.thecatapi.com/images/BkksyH95Z.jpg",
      looking_partner: false,
      raceId: 28,
      userId: 18,
      gender: "female"
    },
    {
      name: "Lasney",
      age: 1,
      image: "https://cdn2.thecatapi.com/images/7isAO4Cav.jpg",
      looking_partner: false,
      raceId: 29,
      userId: 19,
      gender: "male"
    },
    {
      name: "Bisne",
      age: 3,
      image: "https://cdn2.thecatapi.com/images/xNuSF5YWY.jpg",
      looking_partner: false,
      raceId: 30,
      userId: 20,
      gender: "male"
    },
    {
      name: "Yogotte",
      age: 2,
      image: "https://cdn2.thecatapi.com/images/N-94oSJ5T.jpg",
      looking_partner: false,
      raceId: 16,
      userId: 20,
      gender: "male"
    },
    {
      name: "Pono",
      age: 2,
      image: "https://cdn2.thecatapi.com/images/h19-vtIeX.jpg",
      looking_partner: false,
      raceId: 17,
      userId: 21,
      gender: "male"
    },
    {
      name: "Torno",
      age: 5,
      image: "https://cdn2.thecatapi.com/images/8r4M61iyS.jpg",
      looking_partner: false,
      raceId: 18,
      userId: 21,
      gender: "male"
    },
    {
      name: "Cata",
      age: 4,
      image: "https://cdn2.thecatapi.com/images/zeKI28A21.jpg",
      looking_partner: false,
      raceId: 19,
      userId: 21,
      gender: "male"
    },
    {
      name: "Todu",
      age: 4,
      image: "https://cdn2.thecatapi.com/images/8NdgktL3E.jpg",
      looking_partner: false,
      raceId: 20,
      userId: 22,
      gender: "male"
    },
    
  ])
}

module.exports = seedPets;