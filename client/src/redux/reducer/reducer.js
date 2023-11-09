import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH, INCREASE_TARGET_PAGE } from '../actions/types';

const initialState = {
    games: [],
    search:[],
    filtered: [],
    genres: [],
    targetPage: 10,
    page: 1,
    sortOrder: 'asc',    // Orden inicial (ascendente o descendente)
    orderRating: false,
    selectedOrigin: null,
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
        case FILTER:
            const targetArray = state.filtered.length > 0 ? state.search.length>0? state.search:state.games : state.games;

            const filterByGenres = action.payload.length > 0
                ? targetArray.filter((game) => {
                    const gameGenres = game.genres.map((genre) => genre.name);
                    return action.payload.some((selectedGenre) => gameGenres.includes(selectedGenre));
                })
                : targetArray;

            return {
                ...state,
                filtered: filterByGenres,
            };
        case ORDER:
            // Ordenar por algún criterio (ascendente o descendente)
            return {
                ...state,
                sortOrder: action.payload,
            };
        case ORDER_RATING:
            // Ordenar por rating
            return {
                ...state,
                orderRating: action.payload,
            };
        case ORIGIN:
            // Filtrar por origen
            return {
                ...state,
                selectedOrigin: action.payload,
            };
        case SEARCH:
            return {
                ...state,
                search: action.payload,

            };
        case INCREASE_TARGET_PAGE:
            return {
                ...state,
                targetPage: state.targetPage + 10
            }
        default:
            return { ...state }
    }

}


export default reducer;