'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsToMany(models.Order, { through: models.OrderProduct });
    }
  };
  Product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};