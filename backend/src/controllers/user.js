const passport = require('passport');
const hash = require('../helpers/hash');
const User = require('../models/User');
const Admin = require('../models/Admin');
const { UserConection } = require('../models/Event');

const ctrl = {};

ctrl.signup = async (req,res) => {
    const newUser = new User(req.body);
    newUser.password = await hash.scryptPassword(newUser.password);
    newUser.privacyPolicy = (newUser.privacyPolicy == 'on') ? true : false;
    const result = await newUser.save();
	res.send(result);
};

ctrl.signin = (req,res,next) => {
    passport.authenticate('local', (err, user) => {
        if (err) { return next(err); }
        if (!user) { return res.json(user) }
        req.logIn(user, err => {
            if (err) { return next(err); }
            req.app.locals.user = req.user;
            return res.send(user);
        });
    })(req,res,next);
};

ctrl.userIsAuthenticated = async (req,res) => {
    const auth = (req.app.locals.user !== undefined && req.app.locals.user !== null) ? true : false;
    if (auth) res.json({authentication: auth, user: req.app.locals.user});
    else res.json({authentication: auth});
    
    const admin = await Admin.find();
    if (admin.length == 0) {
        const createAdmin = new Admin({ password: '123456' });
        createAdmin.password = await hash.scryptPassword(createAdmin.password);
        await createAdmin.save();
    };
};

ctrl.logOut = (req,res) => { 
    req.app.locals.user = null;
    res.send('Uer has logged out');
};

ctrl.removeUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('USER REMOVED');
};

ctrl.updateBalance = async (req,res) => {
    await User.findByIdAndUpdate(req.params.id,req.body);
    const updatedUser = await User.findOne({ _id: req.params.id });
    res.json(updatedUser);
};

ctrl.getBets = async (req,res) => {
    if (req.app.locals.user !== undefined && req.app.locals.user !== null) {
        const bets = await UserConection.find({ id_user: req.app.locals.user._id });
        res.send(bets);
    };
};

module.exports = ctrl;