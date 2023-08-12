import { useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { NavLink } from "react-router-dom";

export const CardsContainer = () => {

    const videogames = useSelector(state => state.videogames);
    const error = useSelector(state => state.error);
    
    
    return(
        <div>
            {
                error ? (
                    <div>
                        <p>{error}</p>
                        <h4>puedes crearlo <NavLink to='/form'>aqui</NavLink></h4>
                    </div>
                ) : (
                
                    videogames.map(game => {
                        return(
                            <Card 
                                key={game?.id}
                                id={game?.id}
                                image={game?.image}
                                name={game?.name}
                                genres={!game.genres? game.genresArray : game?.genres}
                            />
                        );
                    })
                )
            };
        </div>
    );
};