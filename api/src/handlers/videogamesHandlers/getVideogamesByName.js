const VideogamesService = require("../../services/videogamesService");
const service = new VideogamesService;

const getVideogameByName = async (req, res) =>  {
    const { name } = req.query
    if(name) {
        try {
            const videogame = await service.findOne(name)
            res.status(200).json(videogame);
        } catch (error) {
            res.status(404).json({err: error.message});
        };
    } else {
        try {
            const allVideogames = await service.findAll();
            res.status(200).json(allVideogames)
        } catch (error) {
            res.status(401).json({err: error.message});
        }
    }
};

module.exports = getVideogameByName;