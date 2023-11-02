import { GET_GAMES, GET_GENRES } from '../actions/types';

const initialState = {
    games: [],
    genres: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload
            };

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };

        default:
            return { ...state }
    }

}


export default reducer;