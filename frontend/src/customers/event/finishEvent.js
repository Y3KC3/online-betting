import OnGoingEventCard from "../parts/event/ongoingEventCard";

function FinishEvent() {
    return (
        <div className="finishEvent-container p-5 d-flex justify-content-center">
            <div className="p-4 w-100" style={{ background: "#21252933" }}>
                <h2 className="text-light">Eventos En Curso</h2>
                <div className="p-4 overflow-auto" style={{ maxHeight: '80%' }}>
                    <OnGoingEventCard teams="Estrella Roja Vs Unics Kazan" teamOne="Estrella R." teamTwo="Unics K." />
                    <OnGoingEventCard teams="Georgia Vs Ucrania" teamOne="Georgia" teamTwo="Ucrania" />
                </div>
            </div>
        </div>
    );
};

export default FinishEvent;