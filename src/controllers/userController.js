const {User} = require('../db')

const createUser = async(req, res) =>{
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
}

const getAllUser = async(req,res) => {
  try{
    const allUser = await User.findAll()
    res.status(200).json(allUser)
  } catch{
    return res.status(500).json({ message: error.message });
  }
}

const getUser = async(req,res) => {
  try{
    const {id} = req.params
    const user = await User.findOne({where: {id:id}})
    res.status(200).send(user)
  } catch{
    return res.status(500).json({ message: error.message });
  }
}

const updateUser = async(req,res) => {
  try{
    const {id} = req.params
    const {name, email} = req.body
    await User.update({name:name, email:email}, {where:{id:id}})
    res.status(200).send("user update")
  } catch{
    return res.status(500).json({ message: error.message });
  }
}

const deleteUser = async(req,res) => {
  try{
    const {id} = req.params
    await User.destroy({where: {id:id}})
    res.status(200).send("user delete")
  } catch{
    return res.status(500).json({ message: error.message });
  }
}
module.exports = {
    createUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}