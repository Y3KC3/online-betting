const User = require('../models/User');
const { Event, UserConection } = require('../models/Event');

const ctrl = {};

ctrl.createEvent = async (req,res) => {
    const newEvent = new Event(req.body);
    const result = await newEvent.save();
    res.json(result);
};

ctrl.getEvents = async (req,res) => {
    if (req.body.length === 0) {
        const events = await Event.find();
        return res.json(events);
    } else {
        const events = await Event.find(req.body);
        return res.json(events);
    };
};

ctrl.removeEvent = async (req,res) => {
    await UserConection.deleteOne({ id_event: req.params.id });
    await Event.findByIdAndDelete(req.params.id);
    res.send('Event Removed');
};

ctrl.eventBet = async (req,res) => {
    const newConectionWithEvent = new UserConection(req.body);
    const result = await newConectionWithEvent.save();
    const eventSelected = await Event.findOne({ _id: req.body.id_event });
    await Event.findByIdAndUpdate(req.body.id_event, { totalAmount: eventSelected.totalAmount + req.body.amount});
    const userSelected = await User.findOne({ _id: req.body.id_user });
    await User.findByIdAndUpdate(req.body.id_user,{ balance: userSelected.balance - req.body.amount})
    res.json(result);
};

ctrl.cancelEvent = async (req,res) => {
    const eventSelected = await Event.findOne({ _id: req.body.id_event });
    await Event.findByIdAndUpdate(req.body.id_event, { totalAmount: eventSelected.totalAmount - req.body.amount});
    const userSelected = await User.findOne({ _id: req.body.id_user });
    await User.findByIdAndUpdate(req.body.id_user,{ balance: userSelected.balance + req.body.amount});
    await UserConection.findOneAndDelete({ id_user: req.body.id_user, id_event: req.body.id_event });
    res.json('Event Canceled');
};

ctrl.defineWinner = async (req,res) => {
    const data = { finished: true, winner: req.body.winner };
    await Event.findByIdAndUpdate(req.params.id, data);
    await UserConection.updateMany({id_event: req.params.id}, data);

    const event = await Event.findOne({ _id: req.params.id });
    const bettingHouseCommission = event.amount * 0.1;
    await Event.findByIdAndUpdate(req.params.id, { amount: event.amount - bettingHouseCommission });
    
    console.log('Comision De La Casa De Apuesta: ', bettingHouseCommission);
    
    res.send('Field Updated');
};

module.exports = ctrl;