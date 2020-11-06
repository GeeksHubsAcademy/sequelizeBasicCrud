'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsToMany(models.Product, { through: models.OrderProduct });
    }
  };
  Order.init({
    UserId: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    tracking: DataTypes.STRING,
    estado: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};