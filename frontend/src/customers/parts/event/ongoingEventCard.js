import { useNavigate } from "react-router-dom";
import axios from "axios";

const selected = (element,result) => {
    const buttons = document.querySelectorAll('.buttonInFinishedEvent');
    buttons.forEach(button => {
        button.classList.remove('buttonInFinishedEventSelected');
        button.setAttribute('value','');
    });
    element.classList.add('buttonInFinishedEventSelected');
    element.setAttribute('value',result);
};

const startValidation = (confirm,id, setEventsEnded,setEvents,navigate) => {
    const result = document.querySelector('.buttonInFinishedEventSelected');
    if (!result) { alert('Eliga El Ganador Del Evento') } 
    else {
        if (confirm){
            const teamPointsOne = document.getElementById('teamOne').value;
            const teamPointsTwo = document.getElementById('teamTwo').value;
            const result = `${teamPointsOne}-${teamPointsTwo}`;
            axios.post(`http://localhost:3001/define/winner/${id}`,{ winner: result.value, result })
                .then(() => {
                    setEvents([]);
                    setEventsEnded([]);
                    navigate('/results');
                }).catch(error => console.log(error));
        } else { document.getElementById('winner').style.display = 'flex' };
    };
};

const removeEvent = (id,setEvents) => {
    const confirmRemove = window.confirm('ESTAS SEGURO QUE DESEA ELIMINAR EL EVENTO');
    if (confirmRemove){
        axios.post(`http://localhost:3001/remove/event/${id}`)
            .then(() => setEvents([])).catch(error => console.log(error));
    };
};

function OnGoingEventCard ({ teams, teamOne, teamTwo, value, setEvents, setEventsEnded }){
    const navigate = useNavigate();
    return (
        <div className="mb-2 p-1 d-flex justify-content-between" style={{ border: '1px solid #fff' }}>
            <button className="btn text-light btn-danger btn-sm mx-1" value={value} onClick={e => { removeEvent(e.target.value,setEvents) }}>Borrar Evento</button>
            <h6 className="text-light">{teams}</h6>
            <div>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,teamOne)}>{teamOne}</button>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,'Empate')}>Empate</button>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,teamTwo)}>{teamTwo}</button>
            </div>
            <button className="btn text-light btn-sm" style={{ background: '#fb7b33', width: '150px' }} onClick={() => startValidation(false)}>Finalizar</button>
            <div id="winner">
                <div className="card p-2" style={{ width: '30%' }}>
                    <div className='p-4'>
                        <input id="teamOne" className="form-control my-1" type="number" placeholder={teamOne} required/>
                        <input id="teamTwo" className="form-control my-1" type="number" placeholder={teamTwo} required/>
                        <div className='p-3 row gap-2'>
                            <button className='col btn text-light' style={{ background: "#fb7b33" }} value={value} onClick={e => { startValidation(true,e.target.value,setEventsEnded,setEvents,navigate) }}>Confirmar</button>
                            <button className='col btn btn-danger' onClick={() => document.getElementById('winner').style.display = 'none'}>Cancelar</button>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default OnGoingEventCard;