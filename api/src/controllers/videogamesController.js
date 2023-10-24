const {getvideoGames} = require('../services/videogamesService');
const catchedAsync = require('../utils/catchedAsync');

const videogameControllers = catchedAsync( async (req, res) => {

   const response =  await getvideoGames(req,res);
 
   return res.status(200).json(response);
  
});

module.exports = videogameControllers;
