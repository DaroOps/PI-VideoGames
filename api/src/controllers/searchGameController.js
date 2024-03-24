const {getSearchedGame} = require('../services/gameSearchService');
const catchedAsync = require('../utils/catchedAsync');

const searchGameController = catchedAsync( async (req, res) => {
   const {page} = req.query;
   const response =  await getSearchedGame(req.query.name, page);

   if(response){
      return res.status(200).json(response);
   }
   else{
      return res.status(401).json({error:"Can't find the desired game"})
   }
  
});

module.exports = searchGameController;
