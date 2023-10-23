const axios = require("axios");

const { KEY } = require('../config/envs');
const catchedAsync = require("../utils/catchedAsync");

const APIURL= 'https://api.rawg.io/api/games';

const getvideoGames = async ()=>{
    
    const response = await axios(`${APIURL}?key=${KEY}&page=1`);
    return response.data;
};

module.exports={
    getvideoGames
}