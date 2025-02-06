const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/add', adminController.add);

router.get('/edit/:id', adminController.edit);

module.exports = router;
