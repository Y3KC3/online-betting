import OnGoingEventCard from "../parts/event/ongoingEventCard";

function FinishEvent({ events, setEvents }) {
    return (
        <div className="finishEvent-container p-5 d-flex justify-content-center">
            <div className="p-4 w-100" style={{ background: "#21252933" }}>
                <h2 className="text-light">Eventos En Curso</h2>
                <div className="p-4 overflow-auto" style={{ maxHeight: '80%' }}>
                    {events.map(event => (event.finished !== true) ? <OnGoingEventCard teams={event.teamOne + ' VS '+ event.teamTwo} teamOne={event.teamOne} teamTwo={event.teamTwo} value={event._id} setEvents={setEvents}/> : '')}
                </div>
            </div>
        </div>
    );
};

export default FinishEvent;