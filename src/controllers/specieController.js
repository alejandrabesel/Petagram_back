const { Specie } = require("../db");

const get = async (req, res) => {
  try {
    const species = await Specie.findAll();
    res.status(200).json(species);
  } catch (error) {}
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newSpecie = await Specie.create({
      name: name.toLowerCase(),
    });
    res.status(200).json(newSpecie);
  } catch (error) {}
};
module.exports = {
  get,
  create,
};
