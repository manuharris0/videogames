const { Router } = require('express');
const genreRouter = require('./genreRouter')
const videogameRouter = require('./videogameRouter');

const router = Router();

router.use('/videogames', videogameRouter);
router.use('/genres', genreRouter);

module.exports = router;
