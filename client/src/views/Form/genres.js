// import { useState } from "react";

const Genres = ({ generos }) => {

    // const [genres, setGenres] = useState([])

    return(
        generos.map(gen => {
            return(
                <div>
                    <label>{gen.name}</label>
                    <input
                    key={gen.id}
                    name={gen.name}
                    // onChange={handleChange}
                    placeholder="Géneros..."
                    type="text"
                />
                {/* incompleto */}
                </div>
            )
        })
    )
};

export default Genres;