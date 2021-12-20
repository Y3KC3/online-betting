import Card from '../parts/card/cardFromResults'; // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

const getDate = (totalDate) => {
    const date = new Date(totalDate);
    const day = date.getDate();
    const weekDay = date.getDay();
    const month = date.getMonth();
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${days[weekDay]} ${day} De ${months[month]} A Las ${hours}:${minutes}`;
};

function Results({ eventsEnded }) { //lo exportamos de una vez
    return (
        <div className="results-container p-4 d-flex justify-content-center">
            <div className="w-100 p-5 overflow-auto" style={{ maxHeight: '550px' }}>
                <h2 className="card-title text-light my-2">Resultados</h2>
                {(eventsEnded.error == true)
                    ?   <div className="p-3 text-light my-3" style={{ background: "#21252933" }}>
                            <h4 className="card-title text-center">NO HAY RESULTADOS</h4>
                        </div>
                    :   eventsEnded.map(event => 
                            <div className="p-3 text-light my-3" id="divContainer" style={{ background: "#21252933" }}>
                                <h4 className="card-title">{getDate(event.finishDate)}</h4>
                                <Card teamOne={event.teamOne} scores={event.result} teamTwo={event.teamTwo} />
                            </div>
                    )}
            </div>
        </div>
    );
};

export default Results;

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromResults se leera en el this.props