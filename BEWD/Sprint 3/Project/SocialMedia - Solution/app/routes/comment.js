const commentController = require('../controllers/comment');
const validator = require('../controllers/validators/comment');

module.exports = (router) => router
    .post(validator.createComment, commentController.addComment)
    .get(commentController.getComments);
