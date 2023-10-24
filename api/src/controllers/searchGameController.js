const {getSearchedGame} = require('../services/gameSearchService');
const catchedAsync = require('../utils/catchedAsync');

const searchGameController = catchedAsync( async (req, res) => {
   const response =  await getSearchedGame(req.params.name);
 
   return res.status(200).json(response);
  
});

module.exports = searchGameController;
