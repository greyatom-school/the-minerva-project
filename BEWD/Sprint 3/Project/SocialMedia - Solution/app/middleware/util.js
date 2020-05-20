const {validationResult} = require("express-validator");

const jwt = require('jsonwebtoken');
const ALGORITHM = 'HS256';

const EXPIRATION_IN_SECONDS = 60 * process.env.JWT_EXPIRATION_IN_MINUTES;

const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async id => Promise.resolve(jwt.sign({_id: id},
    JWT_SECRET, {
        algorithm: ALGORITHM, expiresIn: EXPIRATION_IN_SECONDS
    }));

exports.getToken = async (user) => ({
    token: await generateToken(user._id),
});

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

exports.requireAuth = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({message: 'No token provided.'});
    try {
        req.id = verifyToken(token)._id;
        next()
    } catch (e) {
        res.status(401).json({message: "Invalid Token"})
    }
};

exports.validationResult = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next()
    } catch (err) {
        return res.status(422).json({errors: err.array()})
    }
};
