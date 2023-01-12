const { Pet, User, Race } = require("../db");

const get = async (req, res) => {
  try {
    const { name, raceId } = req.query;
    const result = name
      ? await getByName(name)
      : raceId
      ? await getByRace(raceId)
      : await getAll();
    res.status(200).json(result);
  } catch (error) {}
};

const getAll = async () => {
  try {
    const pets = await Pet.findAll();
    return pets;
  } catch (error) {}
};

const getPetsFromUser = async (req, res) => {
  const pets = await Pet.findAll({
    where: {
      userId: req.params.userId,
    },
  });
  res.send(pets);
};
const getById = async (req, res) => {
  try {
    const pet = await Pet.findByPk(req.params.id);
    res.status(200).json(pet);
  } catch (error) {}
};

const getByName = async (name) => {
  const pets = await Pet.findAll({
    where: {
      name: name.toLowerCase(),
    },
  });
  return pets;
};

const getByRace = async (raceId) => {
  const pets = await Pet.findAll({
    where: {
      raceId: raceId,
    },
  });
  return pets;
};

const getLookingForPartner = async (req, res) => {
  try {
    const pets = await Pet.findAll({
      where: {
        looking_partner: true,
      },
    });
    res.status(200).json(pets);
  } catch (error) {}
};

const create = async (req, res) => {
  try {
    const { name, age, image, looking_partner, gender, userId, raceId } =
      req.body;

    const newPet = await Pet.create({
      name: name.toLowerCase(),
      age,
      image,
      looking_partner,
      gender,
    });

    const user = await User.findByPk(userId);
    const race = await Race.findByPk(raceId);
    newPet.setUser(user);
    newPet.setRace(race);

    res.status(200).json(newPet);
  } catch (error) {}
};

const update = async (req, res) => {
  const { name, age, image, looking_partner, gender, userId, raceId } =
    req.body;
  const pet = await Pet.findByPk(req.params.id);
  await pet.update({ name, age, image, looking_partner, gender });

  await pet.save();

  if (userId) {
    const user = await User.findByPk(userId);
    pet.setUser(user);
  }

  if (raceId) {
    const race = await Race.findByPk(raceId);
    pet.setRace(race);
  }

  res.status(200).json(pet);
};

const remove = async (req, res) => {
  try {
    await Pet.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(`pet de id ${req.params.id} eliminado`);
  } catch (error) {}
};

module.exports = {
  get,
  getById,
  getLookingForPartner,
  create,
  update,
  remove,
  getPetsFromUser,
};
