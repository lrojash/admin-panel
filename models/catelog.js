'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catelog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Catelog.init({
    courseId: DataTypes.INTEGER,
    courseName: DataTypes.STRING,
    courseEnrolled: DataTypes.INTEGER,
    courseLimit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Catelog',
    tableName: 'catelogs'
  });
  return Catelog;
};