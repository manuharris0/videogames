import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getGenres } from '../../redux/actions';

export const Landing = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(dispatch) {
            try {
                const { data } = await axios.get('http://localhost:3001/genres');
                dispatch(getGenres(data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData(dispatch)
    }, [dispatch])
    
    return(
        <div>
            <Link to='/home'>
                <button>ENTRAR</button>
            </Link>
        </div>
    )
};