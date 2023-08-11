const validation = (data) => {
    // debo retornar un objeto donde cada propiedad tenga o no un valor de tipo string diciendome el error

    const imageRegex = new RegExp(/\.(jpeg|jpg|gif|png|bmp|webp)$/i);
    const descriptionRegex = new RegExp(/^[a-zA-Z0-9.,\s]*$/);
    const ratingRegex = new RegExp(/^\d+(\.\d{1})?$/);

    let invalid = {};

    //! campos obligatorios
    if(!data.name || !data.image || !data.description || !data.platforms || !data.released || !data.rating || !data.genres) invalid.message = 'Todos los campos son obligatorios';

    //! name validator: 
    if(data.name.length > 255) invalid.name = 'Nombre demaciado largo';
    //! image validator:
    if(!imageRegex.test(data.image)) invalid.image = 'Debe ser un link de imagen válido';
    //! description validator:
    if(!descriptionRegex.test(data.description)) invalid.description = 'No se permiten caracteres especiales'
    //! platforms validator:
    // Por el momento no se necesita validar
    //! date validator:
    // Por el momento no se necesita validar
    //! rating validator:
    if(isNaN(data.rating) || (data.rating < 0 || data.rating > 10)) invalid.rating = 'Debe ser un número entre 0 y 10'
    else if(!ratingRegex.test(data.rating)) invalid.rating = 'Debe tener máximo un decimal'




    return invalid;
};

export default validation;