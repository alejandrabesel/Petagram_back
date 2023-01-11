const { Router } = require('express');
const {getAddressById, getAddressByUserId, addAddress, updateAddress, removeAddress} = require('../controllers/addressController')

const router = Router();

//Routes
router.get("/:id", getAddressById);
router.get("/:userId", getAddressByUserId);
router.post("/:userId", addAddress);
router.put("/:id", updateAddress);
router.delete("/:id", removeAddress);


module.exports = router;