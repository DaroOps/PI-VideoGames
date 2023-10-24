const { postGame } = require("../services/gamePostService");
const catchedAsync = require("../utils/catchedAsync");

const gamePostController = catchedAsync(async(req, res)=>{
    const {name, description, platforms, image, releasedate, genres}=req.body;

    const postedGame = await postGame(name, description, platforms, image, releasedate, genres);
    console.log('POSTED GAME:' ,postedGame)
    if(postedGame){

        return res.status(200).json(postedGame)
    }
    else{
        return res.status(401).json({message:"can't post videogame"})
    }
});

module.exports = gamePostController;