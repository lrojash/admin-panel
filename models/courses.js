'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Courses.init({
    id: DataTypes.INTEGER,
    courseName: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    userRole: DataTypes.STRING,
    userFirstName: DataTypes.STRING,
    userLastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
    tableLName: 'courses',
  });
  return Courses;
};