const { Router } = require('express');
const {createUser, getAllUser, getUser, updateUser, deleteUser} = require('../controllers/userController')

const router = Router();

//Routes
router.post("/", createUser);
router.get("/", getAllUser)
router.get("/:id", getUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)


module.exports = router;