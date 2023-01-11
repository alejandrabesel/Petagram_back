const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE
    },
    reactions: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    comments: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.BOOLEAN
  }
  });
};