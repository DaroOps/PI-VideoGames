const { Router } = require('express');

const videogamesRouter = require('./videogamesRouter') 
//routers;


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRouter)


module.exports = router;
