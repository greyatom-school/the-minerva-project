const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    by: {
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    noOfComments: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    //todo add comments array peek
}, {
    versionKey: false,
    timeStamp: false
});

PostSchema.index({"createdAt": 1}, {unique: true});

module.exports = mongoose.model('Post', PostSchema);
