const axios = require("axios");
const {Videogames} = require('../db')
const { KEY } = require('../config/envs');
const flattenArray = require('../utils/flattenArray');

const APIURL= 'https://api.rawg.io/api/games';

const getSearchedGame = async (query)=>{
    try {
        const localGames = await Videogames.findAll({
            where: {
              name: `${query}`
            },
            limit: 15
          });
        
        const response = await axios(`${APIURL}?search=${query}&key=${KEY}`);
        const mixedData = [...localGames,(response.data).results];
        
        const res = flattenArray(mixedData);

        return res;
        
    } catch (error) {
        throw new Error(`gameSearchService.js has recieved an error: ${error.message} & recieved query: ${query}`);
    }
   
};

module.exports={
    getSearchedGame
}

