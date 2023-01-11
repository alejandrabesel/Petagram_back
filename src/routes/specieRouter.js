const { Router } = require("express");
const { create, get } = require("../controllers/specieController");

const router = Router();

//Routes
router.get("/", get);
router.post("/", create);

module.exports = router;
