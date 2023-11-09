import { SET_PAGE, GET_GAMES, GET_GENRES, FILTER, ORDER, ORDER_RATING, ORIGIN, SEARCH, SET_SEARCH_QUERY, SET_SEARCH_STATE } from '../actions/types';

const initialState = {
    games: [],
    genres: [],
    filtered: [],
    auxiliar: [],
    searchQuery: "",
    lastSearchQuery: "",
    next: true,
    previous: false,
    isSearching: false,
    gamesCount: 0,
    page: 1,
    sortOrder: 'A',
    orderRating: false,
    selectedOrigin: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload.data,
                next: action.payload.next,
                previous: action.payload.previous,
                gamesCount: action.payload.count
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
        case SET_SEARCH_QUERY:
            return {
                ...state,
                lastSearchQuery: state.searchQuery,
                searchQuery: action.payload
            };
        case SET_SEARCH_STATE:
            return {
                ...state,
                isSearching: action.payload
            };
        case FILTER:

            let filterByGenres = action.payload.length > 0 ?
                state.games.filter((game) => {
                    const gameGenres = game.genres.map((genre) => genre.name);
                    return action.payload.every((selectedGenre) => gameGenres.includes(selectedGenre));
                })
                : [];

            if (action.payload.length > 0 && filterByGenres.length === 0) {
                filterByGenres = ['not-found']
            }
            else if (action.payload.length === 0) {
                filterByGenres = [];
            }

            return {
                ...state,
                auxiliar: filterByGenres,
                filtered: filterByGenres
            };
        case ORDER:
            const orderedAux = action.payload === "A"
                ? [...state.auxiliar].sort((gameA, gameB) => gameA.name.localeCompare(gameB.name))
                : action.payload === "D" ? [...state.auxiliar].sort((gameA, gameB) => gameB.name.localeCompare(gameA.name)) : state.games

            const orderedGames = action.payload === "A"
                ? [...state.games].sort((gameA, gameB) => gameA.name.localeCompare(gameB.name))
                : action.payload === "D" ? [...state.games].sort((gameA, gameB) => gameB.name.localeCompare(gameA.name)) : state.games


            if (state.auxiliar.length > 0) {

                return {
                    ...state,
                    auxiliar: orderedAux,
                    filtered: orderedAux

                }
            }

            return {
                ...state,
                auxiliar: orderedGames,
                filtered: orderedGames
            }


        case ORDER_RATING:

            const orderedAuxR = action.payload === "AR"
                ? [...state.auxiliar].sort((gameA, gameB) => gameA.rating - gameB.rating)
                : action.payload === "DR" ? [...state.auxiliar].sort((gameA, gameB) => gameB.rating - gameA.rating) : state.games

            const orderedGamesR = action.payload === "AR"
                ? [...state.games].sort((gameA, gameB) => gameA.rating - gameB.rating)
                : action.payload === "DR" ? [...state.games].sort((gameA, gameB) => gameB.rating - gameA.rating) : state.games


            if (state.auxiliar.length > 0) {

                return {
                    ...state,
                    auxiliar: orderedAuxR,
                    filtered: orderedAuxR

                }
            }

            return {
                ...state,
                auxiliar: orderedGamesR,
                filtered: orderedGamesR
            }
        case ORIGIN:
            // Filtrar por origen
            return {
                ...state,
                selectedOrigin: action.payload,
            };
        case SEARCH:
            return {
                ...state,
                games: action.payload.data,
                next: action.payload.next,
                previous: action.payload.previous,
                gamesCount: action.payload.count,
                isSearching: action.status
            };
        default:
            return { ...state }
    }

}


export default reducer;