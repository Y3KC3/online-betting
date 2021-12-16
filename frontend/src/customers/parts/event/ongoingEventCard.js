function OnGoingEventCard ({ teams, teamOne, teamTwo }){
    return (
        <div className="mb-2 p-2 d-flex justify-content-between" style={{ border: '1px solid #fff' }}>
            <h5 className="text-light">{teams}</h5>
            <div>
                <button className="btn text-light btn-sm mx-2" style={{ background: '#fb7b33' }}>Equipo {teamOne}</button>
                <button className="btn text-light btn-danger btn-sm mx-2">Empate</button>
                <button className="btn text-light btn-sm mx-2" style={{ background: '#fb7b33' }}>Equipo {teamTwo}</button>
            </div>
            <button className="btn text-light btn-sm" style={{ background: '#fb7b33', width: '150px' }}>Finalizar</button>
        </div>
    );
};

export default OnGoingEventCard;