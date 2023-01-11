const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    },
    looking_partner: {
      type: DataTypes.BOOLEAN
    },
    gender:{
      type: DataTypes.INTEGER
    }
  });
};
