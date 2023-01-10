const { Router } = require("express");
// Importar todos los routers;
const userRouter = require("./userRouter");
const petRouter = require("./petRouter");
const specieRouter = require("./specieRouter");
const raceRouter = require("./raceRouter");
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
router.use("/user", userRouter);
router.use("/pet", petRouter);
router.use("/specie", specieRouter);
router.use("/race", raceRouter);
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
