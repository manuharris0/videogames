import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const DEFAULT_VALUES = 'DEFAULT_VALUES'; 
export const ERROR = 'ERROR';

export const getVideogames = () => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get('http://localhost:3001/videogames');
            dispatch({ type: GET_VIDEOGAMES, payload: data });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message })
        }
    }
};
export const getVideogameByName = (name) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/?name=${name}`);
            dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: data })
        } catch ({ response}) {
            dispatch({ type: ERROR, payload: response.data.err})
        }
    }
};
export const getGenres = (data) => {
    return function(dispatch) {
        dispatch({ type: GET_GENRES, payload: data })
    }
};
export const filterByGenre = (genre) => {
    return function(dispatch){
        dispatch({ type: FILTER_BY_GENRE, payload: genre })
    }
};
export const filterByOrigin = (dataType) => {
    return function(dispatch) {
        dispatch({ type: FILTER_BY_ORIGIN, payload: dataType })
    }
};
export const orderByName = (order) => {
    return function(dispatch) {
        dispatch({ type: ORDER_BY_NAME, payload: order })
    }
};
export const orderByRating = (order) => {
    return function(dispatch) {
        dispatch({ type: ORDER_BY_RATING, payload: order })
    }
};
export const cleanError = () => {
    return function(dispatch) {
        dispatch({type: ERROR})
    }
};
export const defaultValues = () => {
    return function(dispatch) {
        dispatch({ type: DEFAULT_VALUES })
    }
}