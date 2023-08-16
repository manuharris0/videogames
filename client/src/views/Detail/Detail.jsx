import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom'
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
    })

    if(loading) return(
        <div className={styles.loadingContainer}>
            <img className={styles.loadingImg} src='https://thumbs.gfycat.com/LittleBestAmoeba-size_restricted.gif' alt="loading..." />
        </div>
    )

    return(
        <div className={styles.container}>

            <span className={styles.id}>{game.id}</span>

            <h2 className={styles.title}>{game.name}</h2>
            
            <img src={game.image} alt={game.name} className={styles.img}/>

            <ul className={styles.platforms}>
                <h4>Plataformas:</h4>
                {
                    game.platforms.map((platform, index) => {
                        return(
                            <li key={index}>{platform}</li>
                        )
                    })
                }
            </ul>
            <section className={styles.description}>
                <p>{game.description}</p>
            </section>
            <p>Fecha de lanzamiento: {game.released}</p>

            <p className={styles.rating}>{game.rating}&#11088;</p>

            <div className={styles.genres}>
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
            </div>

            <NavLink to='/home' className={styles.buttonLink}>
                <button className={styles.button}>VOLVER</button>
            </NavLink>
        </div>
    )
};

export default Detail;