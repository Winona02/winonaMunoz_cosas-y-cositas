const path = require('path');
const product = require('../data/products.json');

exports.index = (req, res) => {
    res.render('index', {
        product,
        title: `Cosas y Cositas`
    })
}