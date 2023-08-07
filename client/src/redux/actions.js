import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';

export const getVideogames = () => {
    return async function(dispatch) {
        try {
            const { apiData } = await axios.get('https://localhost:3000');
            const videoGames = apiData.data;
            dispatch({ type: GET_VIDEOGAMES, payload: videoGames });
        } catch (error) {
            window.alert('Error, luego mejorar')
        }
    }
}