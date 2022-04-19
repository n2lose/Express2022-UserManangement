const express = require('express');
const multer  = require('multer');

const router = express.Router();
const controller = require('../controllers/user.controller');
const userValidate = require('../middleware/user.validate');

var upload = multer({ dest: './public/uploads'}) 

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.getUserDetails);

router.post('/create', 
    upload.single('avatar'), 
    userValidate.postCreate, 
    controller.postCreateUser
);

module.exports = router;