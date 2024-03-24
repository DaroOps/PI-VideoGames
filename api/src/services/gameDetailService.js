const axios = require("axios");

const { Videogames } = require('../db')

const { KEY } = require('../config/envs');

const isValidUUID = require("../utils/isValidUUID");

const APIURL = 'https://api.rawg.io/api/games';

const getGameDetail = async (id) => {
    const isUUID = isValidUUID(id);
    try {
        if (isUUID) {
            const videogame = await Videogames.findOne({ where: { id: id } });
            const gamegenres = await videogame.getGenres();
        
            const genreNames = gamegenres.map(genre => genre.name);
        
            const videogameWithGenres = { ...videogame.dataValues, genres: genreNames };
            
            console.log('dtetectet UUID:', videogameWithGenres);
            return videogameWithGenres;
        }

        const response = await axios(`${APIURL}/${id}?key=${KEY}`);
        return response.data;


    } catch (error) {
        throw new Error(`gameDetailService.js has recieved an error: ${error.message}`);
    }

}

module.exports = {
    getGameDetail
}

