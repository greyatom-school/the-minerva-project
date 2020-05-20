require('dotenv-safe').config();
const express = require('express');
const loginRouter = require('./app/routes/auth');
const postRouter = require('./app/routes/post');
const commentRouter = require('./app/routes/comment');

const initMongo = require('./config/mongo');

const app = express();

app.use(express.json());

app.use('/user', loginRouter);
app.use('/posts', postRouter);

app.use((req, res) => {
    res.status(404).json({
        errors: {
            msg: 'URL_NOT_FOUND'
        }
    })
});

app.set('port', process.env.PORT || '3000');
app.listen(app.get('port'));

initMongo();

module.exports = app;
