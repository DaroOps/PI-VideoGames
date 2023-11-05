import { SET_PAGE, GET_GAMES, GET_GENRES } from '../actions/types';

const initialState = {
    games: [],
    genres: [],
    page: 1,
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
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            };

        default:
            return { ...state }
    }

}


export default reducer;