'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Order);
    }
  };
  User.init({
    name: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    birth: DataTypes.DATE,
    card: DataTypes.INTEGER,
    role: DataTypes.ENUM('Admin', 'Guest')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};