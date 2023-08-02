const { Router } = require('express');
const getGenres = require('../handlers/genresHandlers/getGenres');
const postGenre = require('../handlers/genresHandlers/postGenre');

const genreRouter = Router();

genreRouter.get('/', getGenres);
// genreRouter.post('/', postGenre);

module.exports = genreRouter;