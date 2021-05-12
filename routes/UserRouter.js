const Router = require('express').Router();
//controller
const UserController = require('../controllers/UserController');
// requiring middle ware
const {
    getToken,
    createToken,
    verifyToken,
} = require('../middleware/JwtHandler')

//Routers for login
Router.post('/login', UserController.SignInUser, createToken);
// route to create a new use
Router.post('/register', UserController.CreateUser);
// route to get all users in db
Router.get('/allusers', UserController.GetAllUsers);
// Route to delete a user
Router.delete('/removeUser', UserController.DeleteUser);
// Route to update user,
Router.put('/modifyUser', UserController.UpdateUser);
// route to check session
Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
)


module.exports = Router;