const axios = require("axios");

const { KEY } = require('../config/envs');

const APIURL= 'https://api.rawg.io/api/games';

const getvideoGames = async ()=>{
    try {
        const response = await axios(`${APIURL}?key=${KEY}`);
        return response.data;
    } catch (error) {
        throw new Error(`videogamesService.js has recieved an error in: ${error.message}`);
    }
   
};

module.exports={
    getvideoGames
}