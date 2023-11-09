const axios = require("axios");

const { KEY } = require('../config/envs');

const APIURL= 'https://api.rawg.io/api/games';

const getvideoGames = async (page = 1)=>{
    try {
        const {data} = await axios(`${APIURL}?key=${KEY}&page=${page}`); 
        const info = {
            count: data.count,
            next: !!data.next, 
            previous: !!data.previous, 
            data: data.results
          };
        return info;
    } catch (error) {
        return new Error(`videogamesService.js has recieved an error: ${error.message}`);
    }
   
};

module.exports={
    getvideoGames
}