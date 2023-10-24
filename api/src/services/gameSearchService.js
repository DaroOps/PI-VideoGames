const axios = require("axios");

const { KEY } = require('../config/envs');
const catchedAsync = require("../utils/catchedAsync");

const APIURL= 'https://api.rawg.io/api/games';

const getSearchedGame = async (query)=>{
    
    const response = await axios(`${APIURL}?search=${query}&page_size=15&key=${KEY}`);
    return response.data;
};

module.exports={
    getSearchedGame
}

