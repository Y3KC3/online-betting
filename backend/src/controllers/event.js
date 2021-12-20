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
        const events = await Event.find().sort({ paymentDate: 1 });
        return res.json(events);
    } else {
        const events = await Event.find(req.body);
        return res.json(events);
    };
};

ctrl.eventsEnded = async (req,res) => {
     const eventsEnded = await Event.find({ finished: true }).sort({ finishDate: -1 });
     res.send(eventsEnded);
};

ctrl.removeEvent = async (req,res) => {
    await UserConection.deleteOne({ id_event: req.params.id });
    await Event.findByIdAndDelete(req.params.id);
    res.send('Event Removed');
};

ctrl.eventBet = async (req,res) => {
    const newConectionWithEvent = new UserConection(req.body); // creamo una conexion con un usuario
    const result = await newConectionWithEvent.save(); // guardamos la conexion del evento con el usuario
    const eventSelected = await Event.findOne({ _id: req.body.id_event }); // selecionamos el evento por el id mandado del frontend
    await Event.findByIdAndUpdate(req.body.id_event, { totalAmount: eventSelected.totalAmount + parseInt(req.body.amount)}); // actualizamos la cantidad ingresada enviada del frotend
    const userSelected = await User.findOne({ _id: req.body.id_user }); // seleccionamos el usuario el cual se hizo la conexion
    await User.findByIdAndUpdate(req.body.id_user,{ balance: userSelected.balance - parseInt(req.body.amount)}) // le quitamos el monto que apostado en el evento

    res.json(result); // le enviamos el resultado de la conexion del evento y el usuario
};

ctrl.cancelEvent = async (req,res) => {
    const eventSelected = await Event.findOne({ _id: req.body.id_event }); // seleccionamos el evento que quiere cancelar desde el frontend
    await Event.findByIdAndUpdate(req.body.id_event, { totalAmount: eventSelected.totalAmount - parseInt(req.body.amount)}); // buscamos el evento por su id y actualizamos los datos gracias al evento seleccionado en este caso le quitamos la cantidad que el usuario aposto y se lo devolvemos
    const userSelected = await User.findOne({ _id: req.body.id_user }); // seleccionamos el usuario que quiere cancelar la apuesta
    await User.findByIdAndUpdate(req.body.id_user,{ balance: userSelected.balance + parseInt(req.body.amount)}); // rembolsamos la cantidad que aposto a su saldo
    await UserConection.findOneAndDelete({ id_user: req.body.id_user, id_event: req.body.id_event }); // buscamos el evento que relaciona el usuario con la apuesta y eliminamos la conexion
    res.json('Event Canceled'); //enviamos que se ha eliminado la conexion
};

ctrl.defineWinner = async (req,res) => {
    const date = new Date();
    const data = { finished: true, winner: req.body.winner, finishDate: date }; // los datos que vamos a colocar para que la base de datos sepa que ya hemos terminado el evento
    await Event.findByIdAndUpdate(req.params.id, data); // actualizamos los datos del evento para decirle que ya finalizamos
    await UserConection.updateMany({id_event: req.params.id}, data); // igualmente lo hacemos con la apuesta que hizo el usuario para que pase al historial

    const eventTotalAmount = await Event.findOne({ _id: req.params.id }); // buscamos el evento el cual finalizo la apuesta
    const bettingHouseCommission = eventTotalAmount.totalAmount * 0.1; // luego cobramos el 10% de comision total de lo que se aposto para el evento
    
    // Falta crear una base de datos para guardar la cantidad de dinero en comision //
    console.log('Monto Total Sin Comision: ',eventTotalAmount.totalAmount) // Monto total sin comision
    console.log('Comision De La Casa De Apuesta: ', bettingHouseCommission); // Por ahora solo mostramos la comision pedida
    await Event.findByIdAndUpdate(req.params.id, { totalAmount: eventTotalAmount.totalAmount - bettingHouseCommission }); // le quitamos el dinero de comision al total de dinero del evento
    const event = await Event.findOne({ _id: req.params.id }); // Para Actualizar El Dinero Restante
    console.log('Monto Restante: ', event.totalAmount);
    
    let winnersMoney = 0; // agarramos el monto total de los ganadores
    const winningUsers = await UserConection.find({ id_event: req.params.id, bet: req.body.winner }); // buscamos a todos los ganadores de la apuesta
    winningUsers.map(winningUser => winnersMoney += winningUser.amount); // sumamos el dinero de todos los ganadores
    const profitFactor = event.totalAmount / winnersMoney; // creamos el factor ganacia de cada persona
    winningUsers.map(async winningUser => {
        const user = await User.findOne({ _id: winningUser.id_user }); // buscamos el usuario ganador para depositarle la apuesta ganada
        const balance = user.balance + (profitFactor * winningUser.amount) // incremetamos su saldo actual por la apuesta ganada
        await User.findByIdAndUpdate(winningUser.id_user, { balance }) // actualizamos el saldo actual de la persona
    });

    res.send('Field Updated');
};

ctrl.generateReport = async (req,res) => {
    const report = {};
    const options = req.body.options;
    if (options.currentBets) {
        const currentEvents = await Event.find({ finished: false });
        report.currentEvents = currentEvents;
    } else { report.currentEvents = { error: null } };
    if (options.finalizedBets) {
        const eventsEnded = await Event.find({ finished: true });
        report.eventsEnded = eventsEnded;
    } else { report.eventsEnded = { error: null } };
    if (options.greaterTotal) {
        const eventWithGreaterTotal = await Event.find({ finished: true }).limit(5).sort({ totalAmount: -1 });
        report.eventWithGreaterTotal = eventWithGreaterTotal;
    } else { report.eventWithGreaterTotal = { error: null }} ;
    if (options.lowerTotal) {
        const eventWithLowerTotal = await Event.find({ finished: true }).limit(5).sort({ totalAmount: 1 });
        report.eventWithLowerTotal = eventWithLowerTotal;
    } else { report.eventWithLowerTotal = { error: null }};
    if (options.amountAndBettors) {
        const amountAndBettors = await User.find().limit(5).sort({ balance: 1 });
        report.amountAndBettors = amountAndBettors;
    } else { report.amountAndBettors = { error: null } };
    res.json(report);
};

module.exports = ctrl;