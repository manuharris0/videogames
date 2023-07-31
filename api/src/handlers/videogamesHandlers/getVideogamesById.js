// Acá requiero la función del servicio
// Acá instancio el nuevo servicio

const getVideogamesById = async (req, res) => {
    res.send('emulo que traigo el videojuego de id: ${id}')
};

module.exports = getVideogamesById;