import { CardMyBets, HistorialMyBets } from "../parts/user/cardMyBets";

function MyBets({ eventBet, setEventBet, setDataUser }) {
    return (
        <div className="myBets-container p-3">
            <div>
                <h1 className="card-title text-light my-3">Mis Apuestas</h1>
                <div className="px-5 row gap-3" style={{ height: '480px' }}>
                    <div className="col-5 text-light p-4 h-100" style={{ background: '#21252933' }}>
                        <div className="overflow-auto" style={{ maxHeight: '100%' }}>
                            <h2>ACTIVAS</h2>
                            {(eventBet.length !== 0) ?
                                (eventBet[0].error)
                                    ? <div className="text-center">
                                        <h4 className="my-4 p-3" style={{ border: '1px solid #fff' }}>No Has Hecho Ninguna Apuesta</h4>
                                    </div>
                                    : eventBet.map(event => (event.finished !== true) ? <CardMyBets game={event.game} bets={`${(event.bet == 'Empate') ? event.bet : "Gana " + event.bet} ${event.amount}$`} idEvent={event.id_event} idUser={event.id_user} amount={event.amount} setEventBet={setEventBet} setDataUser={setDataUser} /> : '')
                                : <h4>Cargando..</h4>}
                        </div>
                    </div>
                    <div className="col text-light p-4 h-100" style={{ background: '#21252933' }}>
                        <div className="overflow-auto" style={{ maxHeight: '100%' }}>
                            <h2>HISTORIAL</h2>
                            {eventBet.map(event => (event.finished === true) ? <HistorialMyBets game={event.game} result={(event.bet === event.winner) ? "Ganaste La Apuesta" : "Perdiste La Apuesta"} /> : '')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBets;