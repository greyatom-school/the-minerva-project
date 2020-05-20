const {Types, Schema, model} = require("mongoose");
const Post = require('./Post');

const CommentSchema = new Schema({
    comment: {type: String, required: true},
    postId: {type: Types.ObjectId, ref: 'Post', index: true},
    by: {
        username: {type: String, required: true},
        name: {type: String, required: true}
    },
    createdAt: {type: Date, default: Date.now, index: true}
}, {
    version: false
});

CommentSchema.post('save', function (next) {
    Post.findAndModify({_id: this.postId}, {$inc: {noOfComments: 1}})
});

module.exports = model('Comment', CommentSchema);
