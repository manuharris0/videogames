import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const CardsContainer = () => {

    const videogames = useSelector(state => state.videogames)
    
    return(
        <div>
            {
                videogames.map(game => {
                    return(
                        <Card 
                            key={game.id}
                            id={game.id}
                            image={game.image}
                            name={game.name}
                            genres={!game.genres? game.genresArray : game.genres}
                        />
                    );
                })
            };
        </div>
    );
};