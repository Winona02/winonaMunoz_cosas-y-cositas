const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/productCartl', productsController.cart);

router.get('/:id', productsController.detail);

module.exports = router;