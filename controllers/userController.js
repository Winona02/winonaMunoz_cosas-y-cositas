const path = require('path');

exports.login = (req, res) => {
    res.render('users/login', { title: 'Login' });
};

exports.register = (req, res) => {
    res.render('users/register', { title: 'Register' });
}

exports.admin = (req, res) => {
    res.render('admin', { title: 'Admin' });
}