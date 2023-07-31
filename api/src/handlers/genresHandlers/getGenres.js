const GenresService = require("../../services/genresService");
service = new GenresService();

const getGenres = async (req, res) => {
    try {
        const genres = await service.find();
        if(genres.length > 0) res.status(200).json(genres);
        else {
            const apiGenres = await service.generate();
            res.status(200).json(apiGenres);
        }
    } catch (error) {
        res.status(401).json(error.message);
    }
};

module.exports = getGenres;
