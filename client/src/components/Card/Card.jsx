import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({ image, name, genres, id}) => {
    return(
        <div>

            <img src={image} alt={name} className={styles.img}/>

            <NavLink to={`/detail/${id}`}>
                {name}
            </NavLink>

                <ul>
                    {
                        genres?.map((genre, index) => {
                            return(
                                <li key={index}>{genre.name}</li>
                            )
                        })
                    }
                </ul>
        </div>
    )
};