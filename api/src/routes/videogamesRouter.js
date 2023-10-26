const express = require('express');
const videogameControllers = require('../controllers/videogamesController');
const gameDetailController = require('../controllers/gameDetailController');
const searchGameController = require('../controllers/searchGameController');
const genresController = require('../controllers/genresControllers');
const gamePostController = require('../controllers/gamePostController');

const router = express.Router();

router.get('/', videogameControllers);

router.get('/game/:id', gameDetailController);

router.get('/games/:name', searchGameController);

router.get('/genres', genresController);

router.post('/gamepost', gamePostController);

module.exports = router;