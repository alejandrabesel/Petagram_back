const { Router } = require("express");
// Importar todos los routers;

const userRouter = require("./userRouter");
const petRouter = require("./petRouter");
const specieRouter = require("./specieRouter");
const raceRouter = require("./raceRouter");
const postRouter = require('./postRouter');

// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers

router.use("/user", userRouter);
router.use("/pet", petRouter);
router.use("/specie", specieRouter);
router.use("/race", raceRouter);
router.use("/post", postRouter);

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;