const express = require('express');

const router = express.Router();

const genresController = require('../controllers/genresControllers');

router.get('/', genresController);

module.exports = router;