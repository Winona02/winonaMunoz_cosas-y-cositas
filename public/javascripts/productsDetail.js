const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    const productos = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));

    res.render('index', { productos });
});

module.exports = router;

