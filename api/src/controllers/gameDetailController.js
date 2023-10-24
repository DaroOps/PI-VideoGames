const {getGameDetail} = require('../services/gameDetailService');
const catchedAsync = require('../utils/catchedAsync');

const gameDetailController = catchedAsync( async (req, res) => {
   const response =  await getGameDetail(req.params.id);
 
   return res.status(200).json(response);
  
});

module.exports = gameDetailController;
