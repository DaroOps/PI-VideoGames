import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH } from './types'
import axios from 'axios'


const getGames = (page = 1) => {
   const endpoint = `http://localhost:3001/videogames/page/${page}`;

   return async (dispatch) => {
      try {
         const { data } = await axios.get(endpoint);
         return dispatch({
            type: GET_GAMES,
            payload: data,
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
         return dispatch({
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
   return {
      type: SEARCH,
      payload: game
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
   searchGame
}