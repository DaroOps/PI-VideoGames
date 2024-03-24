const { Videogames, Genres } = require("../db");

const { getGameGenres } = require("./gameGenresService");


const postGame = async (name, description, platforms, image, releasedate, genres, rating) => {
    try {
        const existingGame = await Videogames.findOne({
            where: {
                name: name
            }
        });

        if (existingGame) {
            throw Error("El juego ya existe.");
        }

        await getGameGenres();
        const newVideoGame = await Videogames.create({
            name,
            description,
            platforms,
            image,
            releasedate,
            rating
        });

        if (genres && Array.isArray(genres) && genres.length > 0) {

            const selectedGenres = await Genres.findAll({
                where: {
                    name: genres
                }
            });

            await newVideoGame.setGenres(selectedGenres);
        }

        return newVideoGame;

    } catch (error) {
        return Error(error.message);
    }
};

module.exports = {
    postGame
};
