const { Router } = require('express');
// Importar todos los routers;
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();


// Configurar los routers
router.use('/user', userRouter);
// Ejemplo: router.use('/auth', authRouter);
router.use('/post', postRouter);

module.exports = router;
