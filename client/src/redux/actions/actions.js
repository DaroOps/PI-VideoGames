import { SET_PAGE, GET_GAMES, GET_GENRES } from './types'
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
   return async (dispatch)=>{
      return dispatch({
         type: SET_PAGE,
         payload: page

      });
   };
}




export {
   getGames, getGenres, setPage
}