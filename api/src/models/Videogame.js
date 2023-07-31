const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
      // Fijarse si hay pocas opciones y hacer un ENUM
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    relased: {
      type: DataTypes.STRING,
      // Cambiar luego a DATE
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
      // Ver de poner un rango
    }
  },
  {timestamps: false});
};
