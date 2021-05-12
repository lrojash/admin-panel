const { request } = require('express');
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const {
    checkPassword,
    generatePassword,
} = require('../middleware/PasswordHandler');


const CreateUser = async (req, res) => {
    try {
        console.log('inside create user: ', req.body);
        const body = req.body
        console.log('after: ', body)
        console.log('password: ', body.password);
        const password_digest = await generatePassword(body.password);
        console.log('password digest: ', password_digest)
        const user = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            role: body.role,
            city: body.city,
            state: body.state,
            role: body.role,
            id: Math.floor(Math.random() * 10000),
            passwordDigest: password_digest,
            numberOfLogins: 0,
        })
        user.save();
        res.send(user);
    } catch (error) {
        throw error
    }
}

const SignInUser = async (req, res, next) => {
    try {
        console.log('req.body:  ', req.body.username)
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        console.log('this is user: ', user.passwordDigest);
        if (user && (await checkPassword(req.body.password, user.passwordDigest))) {
            const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role,
                numberOfLogins: user.numberOfLogins,
            }
            res.locals.payload = payload;
            return next();
        }
        res.status(401).send({ msg: 'Unauthorized' });
    } catch (error) {
        throw error
    }
}

const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const DeleteUser = async (req, res) => {
    try {
        console.log('params: ', req.body);
        const { id } = req.body
        console.log('id: ', id.id);
        await User.destroy({
            where: {
                id: id.id
            },
        })
        res.send({ message: `Deleted User with id: ${id.id}` });
    } catch (error) {
        throw error;
    }
}

const UpdateUser = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (user) {
            let updateUser = await User.update(req.body, {
                where: {
                    id: user.id
                },
            })
        }
        res.send(updateUser);
    } catch (error) {
        throw error;
    }
}

const FindUser = async (req, res) => {
    console.log('reaching controller: ', req);
    try {
        let user = await User.findOne({
            where: {
                username: req.body.username
            },
        })
        if (user) {
            return res.send(user);
        }
        return res.send(false);
    } catch (error) {
        throw error
    }
}

const RefreshSession = (req, res) => {
    try {
        const token = res.locals.token;
        res.send({
            user: jwt.decode(token),
            token: res.locals.token,
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateUser,
    SignInUser,
    RefreshSession,
    GetAllUsers,
    DeleteUser,
    UpdateUser,
    FindUser,
}