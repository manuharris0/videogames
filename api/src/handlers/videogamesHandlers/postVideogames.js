const VideogamesService = require('../../services/videogamesService');
const service = new VideogamesService;

const postVideogame = async (req, res) => {
    try {

        const { name, description, platforms, image, released, rating, genres } = req.body

        if(!name || !description || !platforms || !image || !released || !rating || !genres) {
            throw new Error('Falta información para guardar el juego en la base de datos')
        }

        const newVideogame = await service.create({
            name,
            description,
            platforms,
            image,
            released,
            rating,
            genres
        });
        res.status(201).json(newVideogame)
    } catch (error) {
        res.status(400).json({err: error.message})
    }
};

module.exports = postVideogame;