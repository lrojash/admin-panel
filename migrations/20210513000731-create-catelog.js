'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('catelogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseId: {
        type: Sequelize.INTEGER,
        field: 'course_id'
      },
      courseName: {
        type: Sequelize.STRING,
        field: 'course_name'
      },
      courseEnrolled: {
        type: Sequelize.INTEGER,
        field: 'course_enrolled'
      },
      courseLimit: {
        type: Sequelize.INTEGER,
        field: 'course_limit'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'create_at',
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('catelogs');
  }
};