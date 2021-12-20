const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    description: { type: String },
    paymentDate: { type: Date, required: true },
    league: { type: String, required: true },
    teamOne: { type: String, required: true },
    teamTwo: { type: String, required: true },
    totalAmount: { type: Number, default: 0 },
    finished: { type: Boolean, default: false },
    winner: { type: String, default: null },
    creationDate: { type: Date, default: Date.now  },
    finishDate: { type: Date, default: null },
    result: { type: String, default: null }
});

const UserConectionWithEvent = new Schema({
    id_event: { type: String, required: true },
    id_user: { type: String, required: true},
    amount: { type: Number, required: true },
    bet: { type: String, required: true },
    game: { type: String, required: true },
    finished: { type: Boolean, default: false },
    winner: { type: String, default: null }
});

module.exports.Event = model('event',EventSchema);
module.exports.UserConection = model('userConection',UserConectionWithEvent);