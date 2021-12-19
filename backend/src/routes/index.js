const { Router } = require('express');
const router = Router();

const user = require('../controllers/user');
const admin = require('../controllers/admin');
const event = require('../controllers/event');

module.exports = app => {
    router.post('/signup', user.signup);
    router.post('/signin', user.signin);
    router.post('/adminSignIn', admin.adminSignIn);
    router.post('/user/logOut', user.logOut);
    router.post('/user/isAuthenticated', user.userIsAuthenticated);
    router.post('/remove/user/:id', user.removeUser);
    router.post('/update/user/balance/:id', user.updateBalance);
    router.post('/update/rank/user/:id', admin.updateRank)
    router.post('/admin/userControl', admin.userControl);
    router.post('/events', event.getEvents);
    router.post('/create/event', event.createEvent);
    router.post('/remove/event/:id', event.removeEvent);
    router.post('/event/bet', event.eventBet);
    router.post('/get/user/bet', user.getBets);
    router.post('/define/winner/:id', event.defineWinner);
    router.post('/cancel/event', event.cancelEvent);
    router.post('/generate/report', event.generateReport);

    app.use(router);
};