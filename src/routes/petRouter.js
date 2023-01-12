const { Router } = require("express");
const {
  get,
  getById,
  getLookingForPartner,
  create,
  update,
  remove,
  getPetsFromUser,
} = require("../controllers/petController");

const router = Router();

//Routes
router.get("/byUser/:userId", getPetsFromUser);
router.get("/looking-partner", getLookingForPartner);
router.get("/:id", getById);
router.get("/", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;
