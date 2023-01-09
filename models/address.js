'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsToMany(models.User, {through: 'user_address'})
    }
  }
  Address.init({
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    locality: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};