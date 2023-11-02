const { postGame } = require("../services/gamePostService");
const catchedAsync = require("../utils/catchedAsync");

const gamePostController = catchedAsync(async(req, res)=>{
    const {name, description, platforms, image, releasedate, genres}=req.body;

    const postedGame = await postGame(name, description, platforms, image, releasedate, genres);
   
    if(postedGame && Object.keys(postedGame).length > 0){

        return res.status(201).json(postedGame)
    }
    else{
        return res.status(400).json({message:"can't post videogame"})
    }
});

module.exports = gamePostController;