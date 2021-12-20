import axios from 'axios';
import Card from '../parts/card/cardFromBets'; // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

const getLeagueEvents = (league, setLeagueEvents, setEvents) => {
    axios.post('http://localhost:3001/events', { league })
        .then(res => {
            setLeagueEvents(res.data);
            setEvents([]);
        }).catch(error => console.log(error));
};

function Bets({ leagueEvents, setLeagueEvents, events, setEvents, dataUser, bets }) { // lo exportamos de una vez
    return (
        <div className="bets-container py-4 d-flex justify-content-center">
            <div className="container row gap-4">
                <div className="col-4 p-4 row gap-1" style={{ background: "#21252955" }}>
                    <h1 className="title text-light">Ligas</h1>
                    <button className="btn btn-outline-light btn-sm" value="Alemania" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Alemania</button>
                    <button className="btn btn-outline-light btn-sm" value="Argentina" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Argentina</button>
                    <button className="btn btn-outline-light btn-sm" value="Euroliga" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Euroliga</button>
                    <button className="btn btn-outline-light btn-sm" value="FIBA WCQ - Africa" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>FIBA WCQ - Africa</button>
                    <button className="btn btn-outline-light btn-sm" value="FIBA WCQ - Americas" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>FIBA WCQ - Americas</button>
                    <button className="btn btn-outline-light btn-sm" value="FIBA WCQ - Asia" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>FIBA WCQ - Asia</button>
                    <button className="btn btn-outline-light btn-sm" value="FIBA WCQ - Europa" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>FIBA WCQ - Europa</button>
                    <button className="btn btn-outline-light btn-sm" value="Francia" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Francia</button>
                    <button className="btn btn-outline-light btn-sm" value="Inglaterra" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Inglaterra</button>
                    <button className="btn btn-outline-light btn-sm" value="Japon" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Japon</button>
                    <button className="btn btn-outline-light btn-sm" value="NBA" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>NBA</button>
                    <button className="btn btn-outline-light btn-sm" value="NCAAB" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>NCAAB</button>
                    <button className="btn btn-outline-light btn-sm" value="Portugal" onClick={e => getLeagueEvents(e.target.value, setLeagueEvents, setEvents)}>Portugal</button>
                </div>
                <div className="col-8 p-4" style={{ background: "#21252955" }}>
                    <h3 className="title live text-light">!EN VIVO!</h3>
                    <div className="row my-4 gap-2 d-flex justify-content-center overflow-auto" style={{ maxHeight: '420px' }}>
                        {(events.error !== true)
                            ? (leagueEvents.length === 0)
                                ? events.map(event =>
                                    <Card
                                        title={event.league}
                                        teamOne={event.teamOne}
                                        teamBetOne={(bets.indexOf(event.teamOne) != -1 || bets.indexOf(event._id) != -1) ? "1" : "0"}
                                        teamTwo={event.teamTwo}
                                        teamBetTwo={(bets.indexOf(event.teamTwo) != -1 || bets.indexOf(event._id) != -1) ? "1" : "0"}
                                        id={event._id}
                                        dataUser={dataUser}
                                        betValidation={(bets.indexOf(event.teamTwo) != -1 || bets.indexOf(event._id) != -1 || bets.indexOf(event.teamOne) != -1 || bets.indexOf(event._id) != -1) ? false : true} />)
                                : leagueEvents.map(event =>
                                    <Card
                                        title={event.league}
                                        teamOne={event.teamOne}
                                        teamBetOne={(bets.indexOf(event.teamOne) != -1 || bets.indexOf(event._id) != -1) ? "1" : "0"}
                                        teamTwo={event.teamTwo}
                                        teamBetTwo={(bets.indexOf(event.teamTwo) != -1 || bets.indexOf(event._id) != -1) ? "1" : "0"}
                                        id={event._id}
                                        dataUser={dataUser}
                                        betValidation={(bets.indexOf(event.teamTwo) != -1 || bets.indexOf(event._id) != -1 || bets.indexOf(event.teamOne) != -1 || bets.indexOf(event._id) != -1) ? false : true} />)
                            : <h3 className="text-center text-light">No Hay Eventos Disponibles</h3>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bets;

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromBets se leera en el this.props