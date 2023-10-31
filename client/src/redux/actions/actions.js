import { GET_GAMES } from './types'
import axios from 'axios'


 const getGames = () => {
   const endpoint = 'http://localhost:3001/videogames';
   
   return  async (dispatch) => {
      try {
         const {data} = await axios.get(endpoint);
         return dispatch({
            type: GET_GAMES,
            payload: data,
         });
      } catch (error) {
         throw Error(error.message);
      }
   };
};




export {
    getGames   
}