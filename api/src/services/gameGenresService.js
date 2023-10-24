const axios = require("axios");
const { KEY } = require('../config/envs');
const hasData  = require("../utils/hasData");
const { Genres } = require("../db");

const APIURL = 'https://api.rawg.io/api/genres';

const getGameGenres = async () => {
    try {
        const hasInfo = await hasData(Genres);

        if (!hasInfo) {
            const response = await axios.get(APIURL, {
                params: { key: KEY }
            });

            const results = response.data.results;

            for (const genre of results) {
                await Genres.findOrCreate({
                    where: {
                        name: genre.name,
                    }
                });
            }
        } else {
            const response = await Genres.findAll({ attributes: ['name'] });
            return response;
        }
    } catch (error) {
        throw Error('error in gameGenresService.js', error);
    }
};

module.exports = {
    getGameGenres
};
