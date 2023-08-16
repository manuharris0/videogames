import axios from 'axios'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import validation from './validation';
import styles from './Form.module.css';

const Form = () => {
    // Objeto que se envía al .post()
    const [videogame, setVideogame] = useState({
        name: '',
        image: '',
        description: '',
        platforms: '',
        released: '',
        rating: '',
        genres: [],
        message: 'Todos los campos son obligatorios'
    });

    const [errors, setErrors] = useState({});
    const genres = useSelector(state => state.genres)

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { name, description, platforms, image, released, rating, genres } = videogame;
            const response = await axios.post('http://localhost:3001/videogames', {
            name,
            description,
            platforms,
            image,
            released,
            rating,
            genres
        });
        setVideogame({
            name: '',
            image: '',
            description: '',
            platforms: [],
            released: '',
            rating: '',
            genres: [],
            message: 'Videojuego creado con éxito',
        })
        console.log(response);
        } catch (error) {
            setErrors({
                message: error.response.data
            })
            console.log(error);
        }
    };

    const platformsChange = (event) => {
        // función que guarda las plataformas en un array
        const platforms = event.target.value.split(',')
        setVideogame({
            ...videogame,
            platforms: platforms,
            message: ''
        })
        setErrors(validation({
            ...videogame,
            platforms: platforms
        }))
    };

    const handleChange = (event) => {
        // Función que setea el estado local
        setVideogame({
            ...videogame,
            [event.target.name]: event.target.value,
            message: ''
        });
        // Validaciones
        setErrors(validation({
            ...videogame,
            [event.target.name]: event.target.value
        }))
    };

    const handleCheck = (event) => {
        // Función que agrega y quita géneros del estado
        const { checked, value } = event.target;
        if(checked) {
            setVideogame({
                ...videogame,
                genres: [...videogame.genres, Number(value)],
                message: ''
            });
        } else if(!checked) {
            const index = videogame.genres.indexOf(Number(value));
            videogame.genres.splice(index, 1);
            setVideogame({
                ...videogame,
                genres: videogame.genres,
                message: ''
            });
            //! Falta destildar los checkbox al hacer submit
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <NavLink to='/home' className={styles.buttonLink}>
                    <button className={styles.button}>VOLVER</button>
                </NavLink>

                <label>Nombre:</label>
                <input
                    name='name'
                    value={videogame.name}
                    onChange={handleChange}
                    placeholder="Ingrese el nombre del videojuego"
                    type="text"
                /> <br />
                { errors.name ? <span>{errors.name}</span> : null }
                <br />

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
                    onChange={platformsChange}
                    placeholder="Separadas por comas"
                    type="text"
                /> <br />

                <label>Fecha de lanzamiento:</label>
                <input
                    name='released'
                    value={videogame.released}
                    onChange={handleChange}
                    placeholder="DD-MM-AA"
                    type="text"
                /> <br />
                {
                    errors.released ? <span>{errors.released}</span> : null
                } <br />

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

                <label>GENEROS:</label>
                {
                    genres.map((gen, index )=> {
                        return(
                            <section key={index}>
                            <label key={index}>{gen.name}</label>
                            <input
                                id={gen.id}
                                key={gen.id}
                                value={gen.id}
                                name={gen.name}
                                onChange={handleCheck}
                                type="checkbox"
                            />
                            </section>
                        )           
                    })
                }
                {
                    errors.message || errors.name || errors.image || errors.description || errors.platforms || errors.released || errors.rating || errors.genres || videogame.message || videogame.genres.length < 1
                    ? <span className={styles.error}>{errors.message}</span>
                    : <input type="submit" />
                }
                {
                    videogame.message ? <span>{videogame.message}</span> : null
                }
            </form>
        </div>
    )
}


export default Form;