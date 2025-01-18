const path = require('path');
const products = require('../data/products.json');

// const products = [
//     { "id": 1, "image": "/images/producto-mochila.jpg", "name": "Mochila Everlast1", "price": "$20.000", "description": "Mochila resistente con varios compartimentos.", "category": "mochilas", "brand": "Everlast", "thumbnails": ["/images/thumb1.jpg", "/images/thumb2.jpg", "/images/thumb3.jpg"] },
//     { "id": 2, "image": "/images/producto-mochila2.jpg", "name": "Mochila Everlast2", "price": "$20.000", "description": "Mochila ideal para el uso diario.", "category": "mochilas", "brand": "Everlast", "thumbnails": [] },
//     { "id": 3, "image": "/images/producto-mochila3.jpg", "name": "Mochila Everlast3", "price": "$20.000", "description": "Mochila compacta y ligera.", "category": "mochilas", "brand": "Everlast", "thumbnails": [] },
//     { "id": 4, "image": "/images/producto-mochila4.jpg", "name": "Mochila Everlast4", "price": "$20.000", "description": "Mochila resistente al agua.", "category": "mochilas", "brand": "Everlast", "thumbnails": [] }
// ];

const productsController = {
    
    detail: (req, res) => {
        const productId = parseInt(req.params.id);
        const product = products.find(p => p.id === productId);
        
        if (product) {
            res.render('products/productDetail', {
                product,
                title: `Detalle del producto ${product.name}`
            });
        } else {
            res.status(404).send('Producto no encontrado');
        }
    },
    cart: (req, res) => {
        res.render('products/productCartl', {
            title: 'Carrito de compras'
        });
    },
};

module.exports = productsController;