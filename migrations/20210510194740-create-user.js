'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
        required: true,
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
        required: true,
      },
      username: {
        type: Sequelize.STRING,
        field: 'username',
        required: true,
      },
      passwordDigest: {
        type: Sequelize.STRING,
        field: 'password_digest',
        required: true,
      },
      city: {
        type: Sequelize.STRING,
        required: true,
      },
      state: {
        type: Sequelize.STRING,
        required: true,
      },
      role: {
        type: Sequelize.ENUM('ADMIN', 'INSTRUCTOR', 'STUDENT'),
        required: true,
      },
      courses: {
        type: Sequelize.STRING,
      },
      numberOfLogins: {
        type: Sequelize.INTEGER,
        field: 'number_of_logins',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: new Date()
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
    await queryInterface.dropTable('users');
  }
};