import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_NAME = 'GET_VIDEOGAME_BY_NAME';
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
