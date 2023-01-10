const { User } = require("../db");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({
      name,
      email,
    });
    res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUser = async(req,res) => {

}
module.exports = {
    createUser,
    getAllUser
}