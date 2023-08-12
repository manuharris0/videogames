import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../../redux/actions";

const SearchBar = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setName(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getVideogameByName(name));
    };

    return(
        <div>
            <section>
                {
                    name ? <p>Mostrando resultados de la busqueda: {name}</p> : null
                }
            </section>
            <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Buscar por nombre"
                        value={name}
                        onChange={handleChange}
                    />
                    <input type="submit" value='BUSCAR' />
                </form>
        </div>
    )
};

export default SearchBar;