import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ERROR, GET_GENRES, FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_RATING } from "./actions";

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: {},
    error: null
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {...state,
                videogames: action.payload,
                allVideogames: action.payload    
            };
        case GET_VIDEOGAME_BY_NAME:
            return {...state, videogames: action.payload};
        case GET_GENRES:
            return {...state, genres: action.payload};
        case ERROR:
            return {...state, error: action.payload};
        case FILTER_BY_GENRE:
            if(action.payload === 'default') {
                return {
                    ...state,
                    videogames: state.allVideogames
                }
            };
            return {
                ...state,
                videogames: state.videogames.filter(game => {
                    if(game.genresArray){
                        return game.genresArray.some(genre => genre.name === action.payload)
                    } else {
                        return game.genres.some(genre => genre.name === action.payload)
                    }
                })
            };
        case FILTER_BY_ORIGIN:
            if(action.payload === 'default') {
                return {
                    ...state,
                    videogames: state.allVideogames
                };
            };
            return {
                ...state,
                videogames: state.videogames.filter(game => typeof(game.id) === action.payload)
            };
        case ORDER_BY_NAME:
            if(action.payload === 'N') {
                return {...state}
            }
            let sorterNames = [...state.videogames].sort((a, b) => {
                if(action.payload === 'A') {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0
                } else {
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                    return 0
                }
            });
            return {
                ...state,
                videogames: sorterNames
            };
        case ORDER_BY_RATING:
            if(action.payload === 'N') {
                return {...state}
            }
            let sorterRatings = [...state.videogames].sort((a, b) => {
                if(action.payload === 'A') {
                    if(a.rating > b.rating) return 1;
                    if(a.rating < b.rating) return -1;
                    return 0
                } else {
                    if(a.rating < b.rating) return 1;
                    if(a.rating > b.rating) return -1;
                    return 0
                }
            });
            return {
                ...state,
                videogames: sorterRatings
            };
        default:
            return {...state};
    };
};

export default rootReducer; 