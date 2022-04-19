const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controller');

router.get('/', controller.index);

router.get('/?page=&action=', controller.index);


module.exports = router;