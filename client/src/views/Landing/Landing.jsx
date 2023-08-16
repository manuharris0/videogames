import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css';
import { useEffect } from 'react';
import { getGenres, getVideogames } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export const Landing = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideogames());
        async function fetchData(dispatch) {
            try {
                const { data } = await axios.get('http://localhost:3001/genres');
                    dispatch(getGenres(data));
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData(dispatch)
    }, [dispatch]);

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>VideoJuegos</h1>    
            <NavLink to='/home' className={styles.buttonLink}>
                <button className={styles.button}>ENTRAR</button>
            </NavLink>
        </div>
    )
};