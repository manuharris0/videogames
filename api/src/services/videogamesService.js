const axios = require('axios');

const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize');

require('dotenv').config();
const { API_KEY } = process.env;

class videogamesService {
    
    constructor() {};

    async findAll() {
        try {
            let page = 1
            let allVideogames = []
            while (page <= 5) {
                try {
                    const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`);
            
                    const videogames = data.results.map(({ id, name, background_image, genres, rating}) => {
            
                        const genresArray = genres.map(genre => {
                            return {
                                id: genre.id,
                                name: genre.name
                            }
                        })
                        return {
                            id,
                            name,
                            image: background_image,
                            rating,
                            genresArray
                        };
                    });
                    videogames.map(game => {
                        allVideogames.push(game)
                    })
                    page++
                } catch (error) {
                    throw new Error(error.message)
                }
            };
            const dbVideogames = await Videogame.findAll({
                attributes: ['id', 'name', 'image', 'rating'],
                include: {
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            });
            return allVideogames.concat(dbVideogames);
        } catch (error) {
            throw new Error(error.message)
        }
    };

    async apiFind(id) {
        try {
            const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

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
            const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
            data.results.map(game => matchedVideogames.push(
                {
                    id: game.id,
                    name: game.name,
                    image: game.background_image,
                    genres: game.genres,
                    rating: game.rating
                }
            ))

            if (matchedVideogames.length === 0) throw new Error(`parece que no encontramos el videojuego que buscabas`) 
            matchedVideogames.splice(15)
            return(matchedVideogames);
        } catch (error) {
            throw new Error(error)
        }
    };

    async create({name, description, platforms, image, released, rating, genres}) {
        
        const match = await Videogame.findOne({ where: {name: name} })
        if(match) throw new Error('ya existe un videojuego con ese nombre')
        
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
        }
    };
};

module.exports = videogamesService;