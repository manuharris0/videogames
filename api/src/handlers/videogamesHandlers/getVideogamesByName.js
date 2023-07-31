// Acá requiero la función del servicio
// Acá instancio el nuevo servicio

const getVideogameByName = async (req, res) => {
    res.send('emulo que traigo al videojuego de nombre: ${name}, de no llegar, traer a todos')
};

module.exports = getVideogameByName;