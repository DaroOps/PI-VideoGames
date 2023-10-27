const {getGameDetail} = require('../services/gameDetailService');
const catchedAsync = require('../utils/catchedAsync');

const gameDetailController = catchedAsync( async (req, res) => {
   const response =  await getGameDetail(req.params.id);
   
   if(response){

      return res.status(200).json(response);
   }

   return res.status(401).json({error:"can't find details of provided game id."});
});

module.exports = gameDetailController;
