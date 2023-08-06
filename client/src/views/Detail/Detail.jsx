import { useParams } from 'react-router'

export const Detail = () => {
    const { id } = useParams();
    return(
        <div>
            <p>{`Emulo que muestro el detalle del videojuego de ID: ${id}`}</p>
        </div>
    )
};