const express = require('express');
const config = require('./server/config');

// Inicializacion
const app = config(express());

// Database
require('./database');

// Servidor Escuchando
app.listen(app.get('port'), () => {
    console.log('Server On Port: ', app.get('port'));
});