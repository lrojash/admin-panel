const Router = require('express').Router();
const UserRouter = require('./UserRouter');

// User Routes
Router.use('/user', UserRouter);

module.exports = Router;