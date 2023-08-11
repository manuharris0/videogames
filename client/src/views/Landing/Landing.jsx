import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Landing = () => {

    useEffect(() => {
        axios.get('http://localhost:3001/genres')
            .then()
            .catch(error => console.log(error))
    })
    
    return(
        <div>
            <Link to='/home'>
                <button>ENTRAR</button>
            </Link>
        </div>
    )
};