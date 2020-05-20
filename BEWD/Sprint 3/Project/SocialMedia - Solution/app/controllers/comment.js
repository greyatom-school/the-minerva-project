const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const {createError} = require("../../util");

const getUser = async (id) => await User.findOne({_id: id}).select('username name');

const checkIfPostExists = async (id) => await Post.exists({_id: id});

const getCommentsForPost = async (postId, pageSize, pageNo) =>
    await Comment.find({postId: postId}).select('-postId')
        .limit(pageSize)
        .skip(pageSize * pageNo)
        .sort({'createdAt': -1});

const isAuthorizedToDelete = async (userId, commentId) => {
    const callerP = User.findOne({_id: userId}).select('username')
        .then(u => u.username);
    const commentP = Comment.findOne({_id: commentId}).select('by.username postId');
    const username = await callerP;
    const comment = await commentP;
    const postId = comment.postId;
    const postOwnerP = Post.findOne({_id: postId}).select('by.username')
        .then(p => p.by.username);
    const postOwner = await postOwnerP;
    return comment.by.username === username || username === postOwner;
};

const commentExists = (commentId) => Comment.exists({_id: commentId});

exports.addComment = async (req, res) => {
    try {
        const userId = req.id;
        const postId = req.params['postId'];
        const comment = req.body.comment;
        if (await checkIfPostExists(postId) === false)
            throw createError(404, "Post doesn't exists");
        const user = await getUser(userId);
        const [err, savedComment] = await new Comment({
            comment: comment,
            by: {username: user.username, name: user.name},
            postId: postId,
        }).save().then(v => [null, v], err => [err, null]);
        if (err) throw createError(422, err.message);
        res.status(200).json({message: 'Comment added'})
    } catch (e) {
        if (!e.errorCode)
            e.errorCode = 400;
        else res.status(e.errorCode).json({message: e.message})
    }
};

exports.removeComment = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        if (commentExists(commentId) === false)
            throw createError(404, "Comment Doesn't exist");
        if (await isAuthorizedToDelete(req.id, commentId) === false)
            throw createError(403, "You're not authorized to delete this comment");
        const deleted = await Comment.deleteOne({_id: commentId});
        if (deleted.n === 1)
            res.status(200).json({message: "Comment Removed"});
        else throw createError(400, "Something went wrong, comment could not be deleted")
    } catch (e) {
        if (!e.errorCode) e.errorCode = 400;
        res.status(e.errorCode).json({message: e.message})
    }
};

exports.getComments = async (req, res) => {
    try {
        const postId = req.params.postId;
        let body = req.body;
        if (!body.perPage) body.perPage = 30;
        if (!body.page) body.page = 0;
        if (await checkIfPostExists(postId) === false)
            throw createError(404, "Post doesn't exist by that id");
        const comments = await getCommentsForPost(postId, body.perPage, body.page);
        res.status(200).json({comments: comments})
    } catch (e) {
        if (!e.errorCode) e.errorCode = 400;
        else res.status(e.errorCode).json({message: e.message})
    }
};
