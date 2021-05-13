'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER,
      },
      courseName: {
        type: Sequelize.STRING,
        field: 'course_name'
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      userRole: {
        type: Sequelize.STRING,
        field: 'user_role'
      },
      userFirstName: {
        type: Sequelize.STRING,
        field: 'user_first_name'
      },
      userLastName: {
        type: Sequelize.STRING,
        field: 'user_last_name'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: new Date();
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courses');
  }
};