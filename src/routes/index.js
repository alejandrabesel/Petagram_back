const { Router } = require('express');
// Importar todos los routers;
const userRouter = require('./userRouter')
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


// Configurar los routers
router.use('/user', userRouter)
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

