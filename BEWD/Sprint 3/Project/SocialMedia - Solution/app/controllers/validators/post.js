const {validationResult} = require("../../middleware/util");
const {body} = require("express-validator");

exports.createPost = [
    body('post')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validationResult(req, res, next)
    }
];
