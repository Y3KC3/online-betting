import { CardMyBets, HistorialMyBets } from "../parts/user/cardMyBets";

function MyBets (){
    return(
        <div className="myBets-container p-3">
            <div>
                <h1 className="card-title text-light my-3">Mis Apuestas</h1>
                <div className="px-5 row gap-3" style={{ height: '480px' }}>
                    <div className="col-5 text-light p-4 h-100" style={{ background: '#21252933' }}>
                        <div className="overflow-auto" style={{ maxHeight: '100%' }}>
                            <h2>ACTIVAS</h2>
                            <CardMyBets game="Olimpia Milan VS Olypiacos" bets="Gana Olypiacos 20.000$"/>
                            <CardMyBets game="Utah Jazz VS New Orleans Pelicans" bets="Gana Utah Jazz 50.000$"/>
                        </div>
                    </div>
                    <div className="col text-light p-4 h-100" style={{ background: '#21252933' }}>
                        <div className="overflow-auto" style={{ maxHeight: '100%' }}>
                            <h2>HISTORIAL</h2>
                            <HistorialMyBets game="Estrella Roja VS Unics Kazan" result="Ganaste La Apuesta"/>
                            <HistorialMyBets game="Georgia VS Ucrania" result="Perdiste La Apuesta"/>
                            <HistorialMyBets game="Indiana Pacers VS Toronto Raptors" result="Perdiste La Apuesta"/>
                            <HistorialMyBets game="Orlando Magic VS Chicago Bulls" result="Ganaste La Apuesta"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBets;