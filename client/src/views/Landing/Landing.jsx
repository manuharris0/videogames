import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css';

export const Landing = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>VideoJuegos</h1>    
            <NavLink to='/home' className={styles.buttonLink}>
                <button className={styles.button}>ENTRAR</button>
            </NavLink>
        </div>
    )
};