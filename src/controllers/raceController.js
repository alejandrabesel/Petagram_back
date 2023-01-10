const { Race, Specie } = require("../db");

const get = async (req, res) => {
  try {
    const races = await Race.findAll();
    res.status(200).json(races);
  } catch (error) {}
};

const create = async (req, res) => {
  try {
    const { name, specieId } = req.body;
    const newRace = await Race.create({
      name: name.toLowerCase(),
    });

    const specie = await Specie.findByPk(specieId);

    newRace.setSpecie(specie);
    res.status(200).json(newRace);
  } catch (error) {}
};
module.exports = {
  get,
  create,
};
