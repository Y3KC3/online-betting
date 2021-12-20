const { Schema, model } = require('mongoose');

const DashboardSchema = new Schema({
    idDashboard: { type: Number, default: 1 },
    totalAmount: { type: Number, default: 0 },
    organizers: { type: Number, default: 0 },
    totalWon: { type: Array, default: [] }
});

module.exports = model('dashboard',DashboardSchema);