'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    role: DataTypes.ENUM('ADMIN', 'INSTRUCTOR', 'STUDENT'),
    numberOfLogins: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};