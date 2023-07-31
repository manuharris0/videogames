const { Router } = require('express');
const getVideogamesById = require('../handlers/videogamesHandlers/getVideogamesById');
const getVideogamesByName = require('../handlers/videogamesHandlers/getVideogamesByName');
const postVideogames = require('../handlers/videogamesHandlers/postVideogames');

const videogameRouter = Router();

videogameRouter.get('/', getVideogamesByName);
videogameRouter.get('/:id', getVideogamesById);
videogameRouter.post('/', postVideogames);


module.exports = videogameRouter;