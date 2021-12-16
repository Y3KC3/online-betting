import { Link } from 'react-router-dom';

function Event (){
    return (
        <div className="event-container p-5 d-flex justify-content-center align-items-center">
            <div className="row p-4 gap-3 d-flex flex-column align-items-center" style={{ background: "#21252933", width: '60%' }}>
                <Link className="btn text-light my-2 w-50" style={{ height: '40px', background: '#fb7b33' }} to="/create/event">Crear Evento</Link>
                <Link className="btn text-light my-2 w-50" style={{ height: '40px', background: '#fb7b33' }} to="/finish/event">Eventos En Curso</Link>
            </div>
        </div>
    );
};

export default Event;