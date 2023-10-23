const express = require('express');
const videogameControllers = require('../controllers/videogamesController');
const router = express.Router();

router.get('/gamelist', videogameControllers);

module.exports = router;