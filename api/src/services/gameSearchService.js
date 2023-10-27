const axios = require("axios");
const {Videogames} = require('../db')
const { KEY } = require('../config/envs');

const APIURL= 'https://api.rawg.io/api/games';
;
const getSearchedGame = async (query)=>{
    try {
        const {rows, count} = await Videogames.findAndCountAll({where:{name:query},limit: 15})
        const response = await axios(`${APIURL}?search=${query}&key=${KEY}`);
        const mixedData = [response.data, ...rows];
    
        return mixedData;
        
    } catch (error) {
        throw new Error(`gameSearchService.js has recieved an error: ${error.message} & recieved query: ${query}`);
    }
   
};

module.exports={
    getSearchedGame
}

