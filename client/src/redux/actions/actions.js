import flattenArray from '../../utils/flattenArray';
import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH, INCREASE_TARGET_PAGE } from './types'
import axios from 'axios'


const getGames = (page, target = 10, games = []) => {
   const endpoint = `http://localhost:3001/videogames/page/`;

   let stackGames = [...games];

   return async (dispatch) => {
      try {
         const requests = [];
         for (let i = page; i <= target; i++) {
            requests.push(axios.get(endpoint + i));
         }

         const responses = await Promise.all(requests);

         stackGames = responses.map((response) => response.data); // Mapear las respuestas a los datos.

         stackGames = flattenArray(stackGames);


         return dispatch({
            type: GET_GAMES,
            payload: stackGames,
         });
      } catch (error) {
         throw Error(error.message);
      }
   };
};


const getGenres = () => {
   const endpoint = 'http://localhost:3001/genres';

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         const names = data.map(item => item.name);

         dispatch({
            type: GET_GENRES,
            payload: names,
         });
      } catch (error) {
         throw Error(error.message);
      }
   };
};


const setPage = (page) => {
   return async (dispatch) => {
      return dispatch({
         type: SET_PAGE,
         payload: page

      });
   };
}

const setFilters = (genders) => {
   return (dispatch) => {
      return dispatch({
         type: FILTER,
         payload: genders
      });
   }
}

const order = (order) => {
   return {
      type: ORDER,
      payload: order
   }
}
const orderRating = (rating) => {
   return {
      type: ORDER_RATING,
      payload: rating
   }
}

const selectOrigin = (origin) => {

   return {
      type: ORIGIN,
      payload: origin
   }
}

const searchGame = (game) => {
   const endpoint = `http://localhost:3001/videogames/search?name=`;

   return async (dispatch) => {
      try {
         if (!game) {
            dispatch({
               type: SEARCH,
               payload: []
            });
         } else {
            const { data } = await axios.get(endpoint + game);
            dispatch({
               type: SEARCH,
               payload: data
            });
         }
      } catch (error) {
         throw Error(error.message);
      }
   };
};


const increaseTargetPage = () => {
   return async (dispatch) => {
      return dispatch({
         type: INCREASE_TARGET_PAGE,
      });
   }
}




export {
   getGames,
   getGenres,
   setPage,
   setFilters,
   order,
   orderRating,
   selectOrigin,
   searchGame,
   increaseTargetPage
}