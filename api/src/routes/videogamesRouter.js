const express = require('express');
const videogameControllers = require('../controllers/videogamesController');
const gameDetailController = require('../controllers/gameDetailController');
const searchGameController = require('../controllers/searchGameController');

const router = express.Router();

router.get('/gamelist', videogameControllers);

router.get('/game/:id', gameDetailController);

router.get('/games/:name', searchGameController);

module.exports = router;