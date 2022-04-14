const express = require('express');
const router = express.Router();
const db = require('../db');
const controller = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const userValidate = require('../middleware/user.validate');

router.get('/', auth.requiredAuthenticate, controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getUserDetails);

router.post('/create', userValidate.postCreate, controller.postCreateUser);

module.exports = router;