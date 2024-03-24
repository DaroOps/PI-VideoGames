const axios = require("axios");
const { Videogames } = require('../db')
const { KEY } = require('../config/envs');
const flattenArray = require('../utils/flattenArray');

const APIURL = 'https://api.rawg.io/api/games';
const MAX_RESULTS = 20;

const getSearchedGame = async (query, page = 1) => {
    try {
        const localGames = await Videogames.findAll({
            where: {
                name: `${query}`
            },
            limit: MAX_RESULTS / 2
        });

        const response = await axios(`${APIURL}?&key=${KEY}&page=${page}&search=${query}`);
        const apiResults = response.data.results;

        const localGamesCount = Math.min(MAX_RESULTS, localGames.length);
        const apiResultsCount = MAX_RESULTS - localGamesCount;

        let combinedResults = [
            ...localGames.slice(0, localGamesCount),
            ...apiResults.slice(0, apiResultsCount)
        ];

        combinedResults = flattenArray(combinedResults);

        const info = {
            count: response.data.count,
            next: !!response.data.next,
            previous: !!response.data.previous,
            data: combinedResults
        };
        console.log('backserach',page);
        return info

    } catch (error) {
        throw new Error(`gameSearchService.js encountered an error: ${error.message} & received query: ${query}`);
    }
};


module.exports = {
    getSearchedGame
}

