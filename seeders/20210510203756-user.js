'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Seymore',
          last_name: 'Skynner',
          username: 'SSkynner',
          password_digest: 'password123',
          city: 'Denver',
          state: 'CO',
          role: 'ADMIN',
          number_of_logins: 0,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
