const { Router } = require('express');
const router = Router();

const user = require('../controllers/user');
const admin = require('../controllers/admin');

module.exports = app => {
    router.post('/signup', user.signup);
    router.post('/signin', user.signin);
    router.post('/adminSignIn', admin.adminSignIn);
    router.post('/user/logOut', user.logOut);
    router.post('/user/isAuthenticated', user.userIsAuthenticated);
    router.post('/remove/user/:id', user.removeUser);
    router.post('/update/rank/user/:id', admin.updateRank)
    router.post('/admin/userControl', admin.userControl);

    app.use(router);
};