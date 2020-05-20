const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 4;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: /^[a-z0-9]/
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', function (next) {
    const that = this;
    if (!that.isModified('password')) return next();
    try {
        const salt = bcrypt.genSaltSync(saltRounds);
        that.password = bcrypt.hashSync(that.password, salt);
        next();
    } catch (e) {
        next(e.message)
    }
});

UserSchema.methods.comparePassword = function (passwordAttempt) {
    return bcrypt.compareSync(passwordAttempt, this.password);
};

UserSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

module.exports = mongoose.model('User', UserSchema);
