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

const startValidation = (id) => {
    const result = document.querySelector('.buttonInFinishedEventSelected');
    if (!result) { alert('Eliga El Ganador Del Evento') } 
    else {
        axios.post(`http://localhost:3001/define/winner/${id}`,{ winner: result.value})
            .then(res => console.log(res.data)).catch(error => console.log(error));
    };
};

const removeEvent = (id,setEvents) => {
    const confirmRemove = window.confirm('ESTAS SEGURO QUE DESEA ELIMINAR EL EVENTO');
    if (confirmRemove){
        axios.post(`http://localhost:3001/remove/event/${id}`)
            .then(() => setEvents([])).catch(error => console.log(error));
    };
};

function OnGoingEventCard ({ teams, teamOne, teamTwo, value, setEvents }){
    return (
        <div className="mb-2 p-1 d-flex justify-content-between" style={{ border: '1px solid #fff' }}>
            <button className="btn text-light btn-danger btn-sm mx-1" value={value} onClick={e => { removeEvent(e.target.value,setEvents) }}>Borrar Evento</button>
            <h6 className="text-light">{teams}</h6>
            <div>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,teamOne)}>{teamOne}</button>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,'Empate')}>Empate</button>
                <button className="btn-sm mx-2 buttonInFinishedEvent" onClick={e => selected(e.target,teamTwo)}>{teamTwo}</button>
            </div>
            <button className="btn text-light btn-sm" style={{ background: '#fb7b33', width: '150px' }} value={value} onClick={e => startValidation(e.target.value)}>Finalizar</button>
        </div>
    );
};

export default OnGoingEventCard;