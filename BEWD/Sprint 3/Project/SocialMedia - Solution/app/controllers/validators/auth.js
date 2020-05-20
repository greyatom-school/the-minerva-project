const {body} = require('express-validator');
const {validationResult} = require('../../middleware/util');

exports.register = [
    body('username')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    body('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    body('password')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY')
        .isLength({
            min: 8,
        }).withMessage('PASSWORD_TOO_SHORT_MIN_8')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/)
        .withMessage('Password must contain one of lower case, higher case and number'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
];

exports.login = [
    body('username')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    body('password')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty(),
    (req, res, next) => {
        validationResult(req, res, next)
    }
];
