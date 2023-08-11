import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_BY_ID = 'GET_VIDEOGAME_BY_ID';


export const getVideogames = () => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get('http://localhost:3001/videogames');
            
            dispatch({ type: GET_VIDEOGAMES, payload: data });
        } catch (error) {
            console.log(error);
        }
    }
};