const {getvideoGames} = require('../services/videogamesService');
const catchedAsync = require('../utils/catchedAsync');

const videogameControllers = catchedAsync( async (req, res) => {
   
   const {page} = req.params;

   const response = await getvideoGames(page);
 
   if(response){
      return res.status(200).json(response);
   }
   else{
      return res.status(401).json({error:"can't get a list of games"});
   }
   
});

module.exports = videogameControllers;
