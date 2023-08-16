const validation = (data) => {
    // debo retornar un objeto donde cada propiedad tenga o no un valor de tipo string diciendome el error

    const imageRegex = new RegExp(/\.(jpeg|jpg|gif|png|bmp|webp)$/i);
    const descriptionRegex = new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.,\s]*$/);
    const ratingRegex = new RegExp(/^(0|([1-4](\.\d{1,2})?)|5(\.0{1,2})?)$/);
    const dateRegex = new RegExp(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[1,2])-(19|20)\d{2}/);

    let invalid = {};

    //! campos obligatorios
    if(!data.name || !data.image || !data.description || !data.platforms || !data.released || !data.rating || !data.genres) invalid.message = 'Todos los campos son obligatorios';

    //! name validator: 
    if(data.name.length > 255) invalid.name = 'Nombre demaciado largo';
    //! image validator:
    if(!imageRegex.test(data.image)) invalid.image = 'Debe ser un link de imagen válido';
    //! description validator:
    if(!descriptionRegex.test(data.description)) invalid.description = 'No se permiten caracteres especiales';
    //! platforms validator:
    // Por el momento no se necesita validar
    //! date validator:
    if(!dateRegex.test(data.released)) invalid.released = "Debe ser un formato válido: Día-Mes-Año";
    //! rating validator:
    if(isNaN(data.rating) || (data.rating < 0 || data.rating > 5 || data.rating === '')) invalid.rating = 'Debe ser un número entre 0 y 5';
    else if(!ratingRegex.test(data.rating)) invalid.rating = 'Debe tener máximo dos decimales';

    return invalid;
};

export default validation;