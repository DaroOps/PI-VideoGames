const express = require('express');

const videogameControllers = require('../controllers/videogamesController');
const gameDetailController = require('../controllers/gameDetailController');
const searchGameController = require('../controllers/searchGameController');
const gamePostController = require('../controllers/gamePostController');

const router = express.Router();

router.get('/search', searchGameController);

router.get('/:id', gameDetailController);

router.get('/' , videogameControllers);

router.post('/', gamePostController);

module.exports = router;