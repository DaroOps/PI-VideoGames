const express = require('express');

const videogameControllers = require('../controllers/videogamesController');
const gameDetailController = require('../controllers/gameDetailController');
const searchGameController = require('../controllers/searchGameController');
const gamePostController = require('../controllers/gamePostController');

const router = express.Router();

router.get('/', videogameControllers);

router.get('/:id', gameDetailController);

router.get('/name?', searchGameController);

router.post('/', gamePostController);

module.exports = router;