const VideogamesService = require('../../services/videogamesService');
const service = new VideogamesService;

const getVideogamesById = async (req, res) => {
    const { id } = req.params
    if(!isNaN(id)) {
        try {
            const videogame = await service.apiFind(id);
            res.status(200).json(videogame);
        } catch (error) {
            res.status(404).json({err: error.message})
        }
    } else {
        try {
            const videogame = await service.find(id);
            res.status(200).json(videogame);
        } catch (error) {
            res.status(400).json({err: error.message});
        }
    }
};

module.exports = getVideogamesById;