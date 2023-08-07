import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Home = () => {
    return(
        <div>
            <p>PROXIMAS TAREAS: Usar redux para, que con un useEfect, poder guardar en un estado global los videojuegos, asi poder renderizar el HOME</p>
            <SearchBar />
            <CardsContainer />
            <button>FILTRADO</button>
            <button>ORDENADO</button>
        </div>
    )
};