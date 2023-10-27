const express = require('express');

const router = express.Router();

const genresController = require('../controllers/genresControllers');

router.get('/genres', genresController);

module.exports = router;