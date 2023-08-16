const axios = require('axios');

const { Genre } = require('../db');

require('dotenv').config();
const { API_KEY } = process.env;

class genresService {
    
    constructor() {};

    async find() {
        try {
            const genres = await Genre.findAll();
            return genres;
        } catch (error) {
            throw new Error(error.message)
        }
    };

    async generate() {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            const genres = data.results.map(result => {
                return {
                    name: result.name,
                    id: result.id
                }
            })
            await Genre.bulkCreate(genres);
            return this.find();
        } catch (error) {
            throw new Error(error.message)
        }
    }
};

module.exports = genresService;