import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const createEvent = (navigate,setEvents) => {
    const description = document.getElementById('eventDescription').value;
    const paymentDate = document.getElementById('paymentDate').value;
    const league = document.getElementById('league').value;
    const teamOne = document.getElementById('teamOne').value;
    const teamTwo = document.getElementById('teamTwo').value;
    axios.post('http://localhost:9000/create/event',{ description, paymentDate, league, teamOne, teamTwo })
        .then(() => { 
            setEvents([]);
            navigate('/finish/event');
        }).catch(error => console.log(error));
};

function CreateEvent({ setEvents }) {
    const navigate = useNavigate();
    return (
        <div className="createEvent-container p-4 d-flex justify-content-center">
            <div className="w-100 p-4" style={{ background: "#21252933" }}>
                <h1 className="card-title text-light">Configurar Evento</h1>
                <form className="form-control p-4" style={{ background: "transparent"}} onSubmit={e => { e.preventDefault(); createEvent(navigate,setEvents) }}>
                    <div className="p-3 form-group row">
                        <textarea id="eventDescription" className="form-control col" placeholder="Descripcion Del Evento" style={{ maxHeight: '60px', minHeight: '60px', resize: 'none' }} required></textarea>
                    </div>
                    <div className="p-3 form-group row gap-2">
                        <div className="col">
                            <label className="form-label text-light">LIMITE DE TIEMPO PARA CANCELAR LA APUESTA</label>
                            <input id="paymentDate" type="date" className="form-control" placeholder="Fecha Limite" min="2021-01-01" max="2030-01-01" required/>
                        </div>
                        <div className="col">
                            <label className="form-label text-light">A QUE LIGA PERTENECE</label>
                            <select id="league" className="form-control">
                                <option>Alemania</option>
                                <option>Argentina</option>
                                <option>Euroliga</option>
                                <option>FIBA WCQ - Africa</option>
                                <option>FIBA WCQ - Americas</option>
                                <option>FIBA WCQ - Asia</option>
                                <option>FIBA WCQ - Europa</option>
                                <option>Francia</option>
                                <option>Inglaterra</option>
                                <option>Japon</option>
                                <option>NBA</option>
                                <option>NCAAB</option>
                                <option>Portugal</option>
                            </select>
                        </div>
                    </div>
                    <div className='p-3 form-group row gap-2'>
                        <input id="teamOne" type="text" className="form-control col" placeholder="Equipo #1" required maxLength="20"/>
                        <input id="teamTwo" type="text" className="form-control col" placeholder="Equipo #2" required maxLength="20"/>
                    </div>
                    <div className="p-3 form-group my-2 row">
                        <button type="submit" className="btn text-light col" style={{ background: '#fb7b33' }}>CREAR EVENTO</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;