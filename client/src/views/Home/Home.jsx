import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getVideogameByName } from '../../redux/actions';

import { CardsContainer } from "../../components/CardsContainer/CardsContainer";

export const Home = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch]);
       
    const videogames = useSelector(state => state.videogames)
    if(videogames.length < 1) return <img src="/loading.gif" alt="loading..." />

    const handleChange = (event) => {
        setName(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getVideogameByName(name));
        setName('')
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Buscar por nombre"
                    value={name}
                    onChange={handleChange}
                />
                <input type="submit" value='BUSCAR' />
                {/* Falta poder volver a buscar cuando no se encuentra el videojuego */}
            </form>
            <select>
                <option value="">ASCENDENTE</option>
                <option value="">DESDENDENTE</option>
            </select>

            <CardsContainer />
            <button>FILTRADO</button>
            <button>ORDENADO</button>
        </div>
    )
};