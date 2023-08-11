import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';

import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";


export const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch]);

    const videogames = useSelector(state => state.videogames)
    if(videogames.length < 1) return <img src="/loading.gif" alt="loading..." />

    return(
        <div>
            <select>
                <option value="">ASCENDENTE</option>
                <option value="">DESDENDENTE</option>
            </select>
            <SearchBar />

            
            <p>parece que no encontramos el videojuego que buscabas, puedes crearlo <NavLink to='/form'>aqui</NavLink></p>
            
            <CardsContainer />
            <button>FILTRADO</button>
            <button>ORDENADO</button>
        </div>
    )
};