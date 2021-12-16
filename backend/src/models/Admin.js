const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    adminName: { type: String, required: true, default: 'admin' },
    keyPassword: { type: String, required: true, default: 'password' },
    password: { type: String, required: true, default: '' },
    userType: { type: String, required: true, default: 'admin' }
});

module.exports = model('admin',AdminSchema);