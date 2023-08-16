import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getVideogameByName, filterByOrigin, orderByName, orderByRating, filterByGenre, getGenres, cleanError, defaultValues } from '../../redux/actions';
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import styles from './Home.module.css';

export const Home = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPag = 15;

    const genres = useSelector(state => state.genres)
    const videogames = useSelector(state => state.videogames);
    
    useEffect(() => {
        if(videogames.length < 1) dispatch(getVideogames());
        dispatch(cleanError())
        setLoading(false)
    }, [dispatch]);


    const handleChange = (event) => {
        setName(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(name === '') {
            dispatch(getVideogames())
        }
        dispatch(getVideogameByName(name));
        setName('')
    };
    const handleGenre = (event) => {
        if(event.target.value) {
            dispatch(filterByGenre(event.target.value))
            setCurrentPage(1);
        }
    };
    const handleOrigin = (event) => {
        if(event.target.value) {
            dispatch(filterByOrigin(event.target.value))
            setCurrentPage(1)
        }
    };
    const handleDefault = () => {
        dispatch(defaultValues())
    };
    const handleOrderByName = (event) => {
        dispatch(orderByName(event.target.value))
    };
    const handleOrderByRating = (event) => {
        dispatch(orderByRating(event.target.value))
    };
    const hanldePrev = () => {
        setCurrentPage(currentPage -1)
    };
    const hanldeNext = () => {
        setCurrentPage(currentPage +1)
    };

    if(loading) return(
        <div className={styles.loadingContainer}>
            <img className={styles.loadingImg} src='https://thumbs.gfycat.com/LittleBestAmoeba-size_restricted.gif' alt="loading..." />
        </div>
    )
    else if(videogames.length < 1) {
        return(
            <div className={styles.error}>
                <h4>No se encontraron coincidencias.</h4>
                <NavLink to='/form' className={styles.buttonLink}>
                    <button className={styles.button}>CREAR JUEGO</button>
                </NavLink>
                <div className={styles.errorContainer}>
                    <h3>O, espera a que carguen los videojuegos</h3>
                    <img className={styles.loadingImg} src='https://thumbs.gfycat.com/LittleBestAmoeba-size_restricted.gif' alt="loading..." />
                </div>
            </div>
        )    
    }

    return(
        <div className={styles.container}>

            <header>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Buscar por nombre"
                        value={name}
                        onChange={handleChange}
                    />
                    <input type="submit" value='BUSCAR' />
                </form>
            </header>

            <div className={styles.filters}>

                <span>Ordenar por: </span>
                <select onChange={handleOrderByRating}>
                    <option value='N'>Rating:</option>
                    <option value='A'>ASCENDENTE</option>
                    <option value='D'>DESCENDENTE</option>
                </select>

                <select onChange={handleOrderByName}>
                    <option value="N">Nombre:</option>
                    <option value='A'>ASCENDENTE</option>
                    <option value='D'>DESCENDENTE</option>
                </select>

                <span>Filtrar por género: </span>
                <select onChange={handleGenre}>
                    <option></option>
                    {
                        genres.map((genre) => {
                            return(
                                <option value={genre.name} key={genre.id}>{genre.name}</option>
                            )
                        })
                    }
                </select>

                <span>Filtrar por Origen: </span>
                <select onChange={handleOrigin}>
                    <option></option>
                    <option value='number'>API</option>
                    <option value='string'>Base de datos</option>
                </select>

                <button className={styles.defaultButton} onClick={handleDefault}>RESTABLECER</button>

                <h4><span>Crea tu juego <NavLink to='/form'>AQUÍ</NavLink></span></h4>
            </div>
            
            <CardsContainer 
                games={videogames.slice((currentPage - 1) * gamesPerPag, currentPage * gamesPerPag)}
            />

            <footer className={styles.footer}>
                    <button
                        onClick={hanldePrev}
                        disabled={currentPage === 1}
                    >ANTERIOR</button>
                    <span>Página {currentPage}</span>
                    <button
                        onClick={hanldeNext}
                        disabled={currentPage === Math.ceil(videogames.length / gamesPerPag)}
                    >SIGUIENTE</button>
            </footer>
        </div>
    )
};