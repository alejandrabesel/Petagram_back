const { User } = require("../db");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({
      name,
      email,
    });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUser = async (req, res) => {
  res.status(200).json(await User.findAll());
};
module.exports = {
  createUser,
  getAllUser,
};
