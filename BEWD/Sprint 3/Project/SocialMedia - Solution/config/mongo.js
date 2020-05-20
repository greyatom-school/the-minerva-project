const mongoose = require('mongoose');
const DB_URL = process.env.MONGO_URI;

function loadModels() {
    require('../app/models/User');
    require('../app/models/Post');
    require('../app/models/Comment');
}

module.exports = () => {
    const connect = () => {
        mongoose.Promise = global.Promise;
        mongoose.connect(
            DB_URL,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            .catch(err => console.log(err.reason));
    };
    connect();

    loadModels();
};
