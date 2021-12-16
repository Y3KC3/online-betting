const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/onlineBetting';

mongoose.connect(uri)
    .then(() => console.log('Database conected successfully to:', uri))
    .catch(error => console.log(error));