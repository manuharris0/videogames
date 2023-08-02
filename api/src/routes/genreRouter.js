const { Router } = require('express');
const getGenres = require('../handlers/genresHandlers/getGenres');

const genreRouter = Router();

genreRouter.get('/', getGenres);

module.exports = genreRouter;