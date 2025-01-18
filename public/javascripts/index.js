const express = require('express');
const fs = require('fs');
const path = require('path');

app.get('/products', (req, res) => {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer el archivo de productos');
            return;
        }

        const products = JSON.parse(data);
        res.render('index', { products });
    });
});
