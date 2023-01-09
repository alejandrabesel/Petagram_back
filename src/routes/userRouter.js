const { Router } = require('express');
const {createUser, getAllUser} = require('../controllers/userController')

const router = Router();

//Routes
router.post("/", createUser);
router.get("/", getAllUser)


module.exports = router;