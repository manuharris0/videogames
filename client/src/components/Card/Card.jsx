import { NavLink } from 'react-router-dom';

export const Card = ({ image, name, genres, id}) => {
    return(
        <div>

            <img src={image} alt={name} />

            <NavLink to={`/detail/${id}`}>
                {name}
            </NavLink>

                <ul>
                    {
                        genres.map((genre, index) => {
                            return(
                                <li key={index}>{genre.name}</li>
                            )
                        })
                    }
                </ul>
        </div>
    )
};