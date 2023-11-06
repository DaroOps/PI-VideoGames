import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH } from '../actions/types';

const initialState = {
    games: [],
    filtered: [],
    genres: [],
    page: 1,
    sortOrder: 'asc',    // Orden inicial (ascendente o descendente)
    orderRating: false,
    selectedOrigin: null,
    searchQuery: '',
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
            const filterByGenres = action.payload.length > 0
                ? state.games.filter((game) => {
                    const gameGenres = game.genres.map((genre) => genre.name);
                    return action.payload.some((selectedGenre) => gameGenres.includes(selectedGenre));
                })
                : state.games;
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
            const searchResult = state.games.filter((game) =>
                game.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                filtered: searchResult,
                searchQuery: action.payload,
            };

        default:
            return { ...state }
    }

}


export default reducer;