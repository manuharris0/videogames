import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Home = () => {
    return(
        <div>
            <SearchBar />
            <CardsContainer />
            <button>FILTRADO</button>
            <button>ORDENADO</button>
        </div>
    )
};