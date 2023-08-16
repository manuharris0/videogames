import { useSelector } from "react-redux";
import  Card  from "../Card/Card";
import { NavLink } from "react-router-dom";
import styles from './CardsContainer.module.css';

export const CardsContainer = ({ games }) => {

    const videogames = useSelector(state => state.videogames);
    const error = useSelector(state => state.error);
    
    return(
        <div className={styles.container}>
            {
                error ? (
                    <div>
                        <p>{error}</p>
                        <h4>puedes crearlo <NavLink to='/form'>AQUÍ</NavLink></h4>
                    </div>
                ) : (
                    games.map(game => {
                        return(
                            <Card
                                key={game?.id}
                                id={game?.id}
                                image={game?.image}
                                name={game?.name}
                                genres={!game.genres? game.genresArray : game?.genres}
                                className={styles['card-in-container']}
                            />
                        );
                    })
                )
            }
        </div>
    );
};