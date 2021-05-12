const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const getToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    res.locals.token = token;
    next();
}
const verifyToken = (req, res, next) => {
    let token = res.locals.token
    jwt.verify(token, secretKey, (err, t) => {
        if (err) {
            return res.statues(401).jsont({ msg: 'Invalid Token ' });
        }
        return next();
    })
}
const createToken = (req, res, next) => {
    const token = jwt.sign(res.locals.payload, secretKey);
    res.send({ user: res.locals.payload, token });
}

module.exports = {
    createToken,
    verifyToken,
    getToken,
}