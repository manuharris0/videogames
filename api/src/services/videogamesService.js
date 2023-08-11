const axios = require('axios');

const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');

require('dotenv').config();
const { API_KEY } = process.env;


class videogamesService {
    
    constructor() {

    };

    async findAll() {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);

            const videogames = data.results.map(({ id, name, background_image, genres}) => {

                const genresArray = genres.map(genre => {
                    return {
                        name: genre.name
                    }
                })
                return {
                    id,
                    name,
                    image: background_image,
                    genresArray
                };
            });

            const dbVideogames = await Videogame.findAll({
                attributes: ['id', 'name', 'image'],
                include: {
                    model: Genre,
                    attributes: ['name'],
// Arreglar para que el array de generos se muestre igual si es de la base de datos o la api
                    through: {
                        attributes: []
                    }
                }
            });
            return videogames.concat(dbVideogames);
        } catch (error) {
            throw new Error(error.message)
        } 
    };

    async apiFind(id) {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=70fb68c409b1498c9b31df5d9287bb59`);

            const platforms = data.platforms.map(plat => plat.platform.name);
            const genres = data.genres.map(genre => {
                return {
                    id: genre.id,
                    name: genre.name
                }
            })

            const videogameDetail = {
                id: data.id,
                name: data.name,
                description: data.description,
                platforms,
                image: data.background_image,
                released: data.released,
                rating: data.rating,
                genres,
            }
            return videogameDetail;
            
        } catch (error) {
            throw new Error(`No se econtró videojuego con ID: ${id}`)
        }
    }

    async find(id) {
        const videogame = await Videogame.findByPk(id, {
            include: {
                
                model: Genre,

                through: {
                    attributes: []
                }    
            }
        });
        if(!videogame) throw new Error(`No se econtró videojuego con ID: ${id}`);

        return videogame
    };

    async findOne(name) {

        const matchedVideogames = [];

        const videogames = await Videogame.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            attributes: ['id', 'name', 'image', 'rating']
        });

        videogames.map(game => matchedVideogames.push(game));

        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=70fb68c409b1498c9b31df5d9287bb59`);
            data.results.map(game => matchedVideogames.push(
                {
                    id: game.id,
                    name: game.name,
                    image: game.background_image,
                    rating: game.rating
                }
            ))

            if (matchedVideogames.length === 0) throw new Error(`No se econtró videojuego que contenga '${name}' em su nombre`) 
            matchedVideogames.splice(15)
            return(matchedVideogames);
        } catch (error) {
            throw new Error(error)
        }
    };

    async create({name, description, platforms, image, released, rating, genres}) {
        try {
            const newVideogame = await Videogame.create({
                name,
                description,
                platforms,
                image,
                released,
                rating
            });
            newVideogame.addGenres(genres);
    
            return {
                status: 'Created',
                'New videogame: ': {
                    id: newVideogame.id,
                    name
                }
            };
        } catch (error) {
            throw new Error({err: error.message})
            // Falta envíar error cuando no se cumplen las condiciones para la base de datos
        }
    };
};

module.exports = videogamesService;