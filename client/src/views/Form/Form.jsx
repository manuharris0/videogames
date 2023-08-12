import axios from 'axios'
import { useState } from "react";
import validation from './validation';
import Genres from './genres';
import { NavLink } from 'react-router-dom';

const Form = () => {

    //! HARDCODEO:
    const generos = [
        {id: 4, name:'Action'},
        {id: 51, name:'Indie'},
        {id: 3, name:'Adventure'},
        {id: 5, name:'RPG'}
    ];

    const [videogame, setVideogame] = useState({
        name: '',
        image: '',
        description: '',
        platforms: [],
        released: '',
        rating: '',
        genres: [],
        message: '',
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post('http://localhost:3001/videogames')
        console.log(response.data);
    };

    const handleChange = (event) => {
        setVideogame({
            ...videogame,
            [event.target.name]: event.target.value
        });
        setErrors(validation({
            ...videogame,
            [event.target.name]: event.target.value
        }))
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    name='name'
                    value={videogame.name}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre del videojuego"
                    type="text"
                /> <br />
                {
                    errors.name ? <span>{errors.name}</span> : null
                } <br />

                <label>Imagen:</label>
                <input 
                    name='image'
                    value={videogame.image}
                    onChange={handleChange}
                    placeholder="pegue el link de la imagen"
                    type="text"
                    /> <br />
                {
                    errors.image ? <span>{errors.image}</span> : null
                } <br />

                <label>Descripción:</label>
                <textarea 
                    name='description'
                    value={videogame.description}
                    onChange={handleChange}
                    placeholder="Agregue una descripción"
                    type="text"
                /> <br />
                {
                    errors.description ? <span>{errors.description}</span> : null
                } <br />

                <label>Plataformas:</label>
                <input
                    name='platforms'
                    value={videogame.platforms}
                    onChange={handleChange}
                    placeholder="agregue la/s plataforma/s (peradas por comas)"
                    type="text"
                />

                <label>Fecha de lanzamiento:</label>
                <input
                    name='released'
                    value={videogame.released}
                    onChange={handleChange}
                    placeholder="Fecha de lanzamiento"
                    type="date"
                />

                <label>Rating</label>
                <input
                    name='rating'
                    value={videogame.rating}
                    onChange={handleChange}
                    placeholder="rating..."
                    type="text"
                /> <br />
                {
                    errors.rating ? <span>{errors.rating}</span> : null
                } <br />

                {/* <label>Géneros</label>
                <input
                    name='genres'
                    value={videogame.genres}
                    onChange={handleChange}
                    placeholder="Géneros..."
                    type="text"
                /> */}
                <label>GENEROS:</label>
                <Genres generos={generos} />
                {/* definir el formato del input generos */}
                input

                {
                    errors.message
                    ? <span>{errors.message}</span>
                    : <input type="submit" />
                }
                

            </form>
            <button><NavLink to='/home'>VOLVER</NavLink></button>
        </div>
    )
};

export default Form;