
const userController = {

    login: (req, res) => {
        res.render('users/login', { title: 'Login' });
    },
    
    register: (req, res) => {
        res.render('users/register', { title: 'Register' });
    },
    
}

module.exports = userController;