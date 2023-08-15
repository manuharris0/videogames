import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

export const Card = ({ image, name, genres, id}) => {
    return(
        <div className={styles.container}>
            <NavLink to={`/detail/${id}`}>
                <img src={image} alt={name} className={styles.img}/>
                <h3>{name}</h3>
                <ul>
                    {
                        genres?.map((genre, index) => {
                            return(
                                <li key={index}>{genre.name}</li>
                            )
                        })
                    }
                </ul>
            </NavLink>
        </div>
    )
};