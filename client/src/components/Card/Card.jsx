import { NavLink } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({ image, name, genres, id}) => {
    return(
            <div className={styles.card}>
                <NavLink to={`/detail/${id}`} className={styles.cardLink}>
                    <img className={styles.cardImage} src={image} alt={name}/>
                    <h3 className={styles.cardTitle}>{name}</h3>
                    <ul className={styles.cardGenres}>
                        {
                            genres?.map((genre, index) => {
                                return(
                                    <li key={index} className={styles.cardGenre}>{genre.name}</li>
                                )
                            })
                        }
                    </ul>
                </NavLink>
            </div>
    )
};
export default Card;