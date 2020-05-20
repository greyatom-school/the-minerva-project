const {getToken} = require("../middleware/util");

const User = require("../models/User");
const {createError} = require("../../util");

const userNameExists = async (username) => await User.findOne({username});

const registerUser = async req => {
    const body = req.body;
    const exists = await userNameExists(body.username);
    if (exists == null) {
        return userToResponse(await new User({
            name: body.name,
            username: body.username,
            password: body.password
        }).save())
    } else throw {errorCode: 422, message: 'username already exists'}

};

const userToResponse = (user) => ({
    name: user.name,
    username: user.username
});

const findUser = async username => {
    const [err, user] = await User.findOne({username}).then(v => [null, v], err => [err, null]);
    if (err) throw createError(422, err.message);
    if (!user) throw createError(404, "User Not found");
    else return user;
};

exports.login = async (req, res) => {
    try {
        const body = req.body;
        const user = await findUser(body.username);
        const matches = user.comparePassword(body.password);
        if (matches) return res.status(200).json(await getToken(user));
        else { // noinspection ExceptionCaughtLocallyJS
            throw createError(401, "Username password combination doesn't exist")
        }
    } catch (e) {
        res.status(e.errorCode).json({message: e.message})
    }
};

exports.register = async (req, res) => {
    try {
        const registered = await registerUser(req);
        const token = await getToken(registered);
        return res.status(201).json(token);
    } catch (e) {
        return res.status(e.errorCode).json({message: e.message})
    }
};

exports.me = async (req, res) => {
    const id = req.id;
    const user = await User.findOne({_id: id});
    return res.status(200).json(user);
};
