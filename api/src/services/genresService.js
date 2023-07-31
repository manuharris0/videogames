const axios = require('axios');
const { Genre } = require('../db');
require('dotenv').config();
const { API_KEY } = process.env;
const URL = `https://api.rawg.io/api/genres?key=70fb68c409b1498c9b31df5d9287bb59`;

class genresService {
    
    constructor() {

    };

    async generate() {
        try {
            const { data } = await axios.get(URL);
            const genres = data.results.map(result => {
                return {
                    name: result.name,
                    id: result.id
                }
            })
            const dbGenres = await Genre.bulkCreate(genres);
            return dbGenres;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async find() {
        const genres = await Genre.findAll();
        return genres;
    }

    create(data) {
        // Acá voy a agregar un género a la base de datos
    }

};

module.exports = genresService;