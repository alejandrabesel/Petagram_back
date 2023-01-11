const {Address, User} = require('../db.js')

const getAddressById = async(req,res) => {
    try {
        const { id } = req.params;
        const address = await Address.findByPk(id);
        res.json(address);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const getAddressByUserId = async(req,res) => {
    try {
        const { userId } = req.params;
        const address = await Address.findOne({ where: { userId }});
        res.json(address);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const addAddress = async(req, res) => {
  try {
    const { country, province, locality, street, number, userId } = req.body;
    const newAddress = await Address.create({
        country,
        province,
        locality,
        street,
        number
    });

    const user = await User.findByPk(userId);
    newAddress.setUser(user);

    res.json(newAddress);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

const updateAddress = async(req,res) => {
    try {
        const { country, province, locality, street, number } = req.body;
        const address = await Address.findByPk(req.params.id);
        await address.update({ country, province, locality, street, number });
        await address.save();
        res.json(address);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const removeAddress = async(req,res) => {
    try {
        await Address.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.status(200).send(`Address de id ${req.params.id} eliminado correctamente`);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getAddressById,
    getAddressByUserId,
    addAddress,
    updateAddress,
    removeAddress
}