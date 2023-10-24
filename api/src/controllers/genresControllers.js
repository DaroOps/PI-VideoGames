const { getGameGenres } = require('../services/gameGenresService');
const catchedAsync = require('../utils/catchedAsync');

const genresController = catchedAsync( async (req, res) => {
   const response =  await getGameGenres();
 
   return res.status(200).json(response);
  
});

module.exports = genresController;
