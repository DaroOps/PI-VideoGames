const axios = require("axios");

const { KEY } = require('../config/envs');

const APIURL= 'https://api.rawg.io/api/games';

const getvideoGames = async ()=>{
    try {
        const {data} = await axios(`${APIURL}?key=${KEY}`);  
        return data.results;
    } catch (error) {
        throw new Error(`videogamesService.js has recieved an error: ${error.message}`);
    }
   
};

module.exports={
    getvideoGames
}