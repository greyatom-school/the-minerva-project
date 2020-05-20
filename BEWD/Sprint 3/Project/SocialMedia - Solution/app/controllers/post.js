const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const {createError} = require("../../util");

const getPosts = async (pageSize, pageNo) =>
    await Post.find({})
        .select('_id noOfComments by post')
        .limit(pageSize)
        .skip(pageSize * pageNo)
        .sort({'createdAt': -1});

const findPost = async (postId) => {
    const postPromise = Post.findOne({_id: postId}).select('_id by post');
    const commentPromise = Comment.find({postId: postId})
        .select('comment by.name createdAt')
        .sort({'createdAt': -1})
        .limit(10);
    let [post, comments] = await Promise.all([postPromise, commentPromise]);
    return ({
        postId: post.postId,
        post: post.post,
        comments: comments
    })
};

const postExists = async (postId) => await Post.exists({_id: postId});

const canUserDeletePost = async (userId, postId) =>
    (await Post.findOne({_id: postId}).select('by.username')).by.username ===
    (await User.findOne({_id: userId}).select('username')).username;

const deletePost = async (postId) => await Post.deleteOne({_id: postId});

exports.createPost = async (req, res) => {
    try {
        const userPromise = User.findOne({_id: req.id}).select('name username').then(v => [null, v], err => [err, null]);
        const post = req.body.post;
        const [err, user] = await userPromise;
        if (err) throw createError(422, err.message);
        if (!user) throw createError(404, "User not found");
        const [e, postSaved] = await new Post({
            post: post,
            by: {username: user.username, name: user.name}
        }).save().then(v => [null, v], err => [err, null]);
        if (e) throw createError(422, e.message);
        return res.status(200).json(({postId: postSaved._id}))
    } catch (e) {
        res.status(e.errorCode).json({message: e.message})
    }
};

exports.getPosts = async (req, res) => {
    const body = req.body;
    if (!body.perPage) body.perPage = 30;
    if (!body.page) body.page = 0;
    try {
        const posts = await getPosts(body.perPage, body.page);
        res.status(200).json(posts)
    } catch (e) {
        res.status(422).json(e.message)
    }
};

exports.getPost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await findPost(postId);
        res.status(200).json(post)
    } catch (e) {
        res.status(400).json(e.message)
    }
};

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const userId = req.id;
        if (await postExists(postId) === false)
            throw createError(404, "Post not found");
        if (await canUserDeletePost(userId, postId) === false)
            throw createError(403, "You don't have the permission to delete this post");
        const deletedPost = await deletePost(postId);
        if (deletedPost.n === 1)
            res.status(200).json({message: "Post successfully taken down"});
        else throw createError(400, "Something went wrong")
    } catch (e) {
        const errorObj = {message: e.message};
        if (e.errorCode) res.status(e.errorCode).json(errorObj);
        else res.status(400).json(errorObj)
    }
};
