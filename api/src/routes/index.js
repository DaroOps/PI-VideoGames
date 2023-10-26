const { Router } = require('express');

const videogamesRouter = require('./videogamesRouter') 

const router = Router();

router.use('/videogames', videogamesRouter)


module.exports = router;
