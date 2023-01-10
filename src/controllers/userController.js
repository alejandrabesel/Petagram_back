const {User} = require('../db')

const createUser = async(req, res) =>{
  try {
    const { name, email } = req.body;
    console.log(name);
    const newUser = await User.create({
      name,
      email,
    });
    console.log(newUser);
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const getAllUser = async(req,res) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
} 
}
module.exports = {
    createUser,
    getAllUser
}