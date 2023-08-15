import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getVideogameByName, filterByOrigin, orderByName, orderByRating, filterByGenre } from '../../redux/actions';
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import styles from './Home.module.css';

export const Home = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    
    const genres = useSelector(state => state.genres)
    const videogames = useSelector(state => state.videogames)
    
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);
    
    if(videogames.length < 1) return <img className={styles.loadingImg} src='https://thumbs.gfycat.com/LittleBestAmoeba-size_restricted.gif' alt="loading..." />

    const handleChange = (event) => {
        setName(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getVideogameByName(name));
        setName('')
    };
    const handleGenre = (event) => {
        dispatch(filterByGenre(event.target.value))
    };
    const handleOrigin = (event) => {
        dispatch(filterByOrigin(event.target.value))
    };
    const handleOrderByName = (event) => {
        dispatch(orderByName(event.target.value))
    };
    const handleOrderByRating = (event) => {
        dispatch(orderByRating(event.target.value))
    };

    return(
        <div className={styles.container}>

            <header>
                <form onSubmit={handleSubmit}>
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
                    <option value='default'>Todos</option>
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
                    <option value='default'>Todos</option>
                    <option value='number'>API</option>
                    <option value='string'>Base de datos</option>
                </select>
                {/* Solo falta mensaje adecuado cuando el filtro no encuentra coincidencias */}
            </div>
            <CardsContainer />

        </div>
    )
};