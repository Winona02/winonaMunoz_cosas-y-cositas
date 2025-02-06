const products = require('../data/products.json');

const adminController = {
    add: (req, res) => {
        res.render('admin/productAdd', { title: 'Añadir Productos' });
    },

    edit: (req, res) => {
        const productId = parseInt(req.params.id);
        const product = products.find(p => p.id === productId);
        res.render('admin/productEdit', { 
            product,
            title: 'Editar Productos' });
    }
}

module.exports = adminController;