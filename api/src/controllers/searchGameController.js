const {getSearchedGame} = require('../services/gameSearchService');
const catchedAsync = require('../utils/catchedAsync');

const searchGameController = catchedAsync( async (req, res) => {
   const response =  await getSearchedGame(req.params.name);
   
   if(response){
      return res.status(200).json(response);
   }
   else{
      return res.status(401).json({error:'Can not find the desired game'})
   }
  
});

module.exports = searchGameController;
