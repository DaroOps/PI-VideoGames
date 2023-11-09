import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH, INCREASE_TARGET_PAGE, SET_SEARCH_QUERY, SET_SEARCH_STATE } from './types'
import axios from 'axios'


const getGames = (page) => {
   const endpoint = `http://localhost:3001/videogames/page/`;


   return async (dispatch) => {
      try {
         const { data } = await axios(endpoint + page);

         console.log('response', data)

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
   return async (dispatch) => {
      return dispatch({
         type: FILTER,
         payload: genders
      });
   }
}

const setSearchQuery = (searchQuery) => {
   return async (dispatch) => {
      return dispatch({
         type: SET_SEARCH_QUERY,
         payload: searchQuery
      });
   };
}

const setSearchState = (state) => {
   return async (dispatch) => {
      return dispatch({
         type: SET_SEARCH_STATE,
         payload: state
      });
   };
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

const searchGame = (game, page) => {
   const endpoint = `http://localhost:3001/videogames/search?name=`;

   return async (dispatch) => {
      try {

         const { data } = await axios.get(endpoint + game + "&page=" + page);
         dispatch({
            type: SEARCH,
            payload: data,
            status: true
         });
      }
      catch (error) {
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
   increaseTargetPage,
   setSearchQuery,
   setSearchState
}