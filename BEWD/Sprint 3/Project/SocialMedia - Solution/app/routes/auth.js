const controller = require('../controllers/auth');
const router = require('express').Router();
const validator = require('../controllers/validators/auth');

router.post('/login', validator.login, controller.login)
    .post('/register', validator.register, controller.register);

module.exports = router;
