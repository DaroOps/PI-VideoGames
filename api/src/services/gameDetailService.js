const axios = require("axios");

const {Videogames} = require('../db')

const { KEY } = require('../config/envs');

const isValidUUID = require("../utils/isValidUUID");

const APIURL= 'https://api.rawg.io/api/games';

const getGameDetail = async (id) =>{
    const isUUID = isValidUUID(id);

    if(isUUID){
       const [videogames] = await Videogames.findOne({ where: { id: id } });

       return videogames;
    }
    else{
        const response = await axios(`${APIURL}/${id}?key=${KEY}`);
        return response.data;
    }   
}

module.exports= {
     getGameDetail
}

