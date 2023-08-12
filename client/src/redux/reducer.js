import { GET_VIDEOGAMES, GET_VIDEOGAME_BY_NAME, ERROR } from "./actions";

const initialState = {
    videogames: [],
    error: null
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {...state, videogames: action.payload};
        case GET_VIDEOGAME_BY_NAME:
            return {...state, videogames: action.payload};
        case ERROR:
            return {...state, error: action.payload}
        default:
            return {...state};
    };
};

export default rootReducer; 