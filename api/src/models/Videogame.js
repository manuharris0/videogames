const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      validate: {
        min: 0,
        max: 5
      }
    }
  },
  {timestamps: false});
};
