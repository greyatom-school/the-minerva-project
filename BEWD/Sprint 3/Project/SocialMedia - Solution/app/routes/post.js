const postController = require('../controllers/post');
const validator = require('../controllers/validators/post');
const commentRoute = require('./comment');
const router = require('express').Router();
const {requireAuth} = require('../middleware/util');

router.route('/')
    .all(requireAuth)
    .post(validator.createPost, postController.createPost)
    .get(postController.getPosts);

router.route('/:postId').all(requireAuth)
    .get(postController.getPost)
    .delete(postController.deletePost);

commentRoute(router.route('/:postId/comments').all(requireAuth));

module.exports = router;
