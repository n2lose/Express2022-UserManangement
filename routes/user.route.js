const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const userValidate = require('../middleware/user.validate');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getUserDetails);

router.post('/create', userValidate.postCreate, controller.postCreateUser);

module.exports = router;