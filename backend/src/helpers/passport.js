const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const hash = require('./hash');

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'identificationNumber'
}, async (identificationNumber,password,done) => {
    const user = await User.findOne({ identificationNumber });
    if (!user) { done(null,false) } 
    else {
        const match = await hash.matchPassword(password,user.password);
        if (match) { done(null,user) } 
        else { done(null,false) };
    };
}));

passport.serializeUser((user,done) => {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    console.log(id);
    console.log('!!!!!!!!AQUI TA!!!!!!!!')
    User.findById(id, (err, user) => {
        done(err,user);
    });
});