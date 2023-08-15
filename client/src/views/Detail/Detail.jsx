import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom'
//? import { cleanDetail } from '../../redux/actions'
import axios from "axios";
import styles from './Detail.module.css';


const Detail = () => {

    const { id } = useParams()

    const [game, setGame] = useState({})
    const [loading, setLoading] = useState(true)

    // Función que trae el detalle del juego
    const bringGame = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/videogames/${id}`);
            setGame(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        bringGame();
    //? Por si cambia el dispatch del detail
        // return () => {
        //     dispatch(cleanDetail())
        // }
    })

    if(loading === true) return <img src="/loading.gif" alt="loading..." />

    return(
        <div className={styles.container}>
            <span>{game.id}</span>
            <h2>{game.name}</h2>
            <img src={game.image} alt={game.name} className={styles.img}/>

            <ul>
                <h4>Plataformas:</h4>
                {
                    game.platforms.map((platform, index) => {
                        return(
                            <li key={index}>{platform}</li>
                        )
                    })
                }
            </ul>
            <p>{game.description}</p>
            <p>{game.released}</p>
            <p>{game.rating}</p>
                <h4>Géneros:</h4>
            <ul>
                {
                    game.genres.map((genre, index) => {
                        return(
                            <li key={index}>{genre.name}</li>
                        )
                    })
                }
            </ul>

            <button><NavLink to='/home'>Volver</NavLink></button>
        </div>
    )
};

export default Detail;