const express = require('express');
const router = express.Router();
const db = require('../db');
const controller = require('../controllers/user.controller');

const listUsers = db.get('users').value();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getUserDetails);

router.post('/create', controller.postCreateUser);

module.exports = router;