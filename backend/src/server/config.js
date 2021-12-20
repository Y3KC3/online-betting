const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const routes = require('../routes/');

module.exports = app => {
    // Inicializacion
    require('../helpers/passport');
    
    // Configuracion
    app.set('port', process.env.PORT || 3001);

    // Middlewares

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors({origin: 'http://localhost:3000'}));
    app.use(session({
        secret: 'onlinebetting',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // Variables Globales
    app.use((req,res,next)=>{
        app.locals.user;
        next();
    });

    // Rutas
    routes(app);

    return app;
};