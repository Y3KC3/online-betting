function CreateEvent() {
    return (
        <div className="createEvent-container p-4 d-flex justify-content-center">
            <div className="w-100 p-4" style={{ background: "#21252933" }}>
                <h1 className="card-title text-light">Configurar Evento</h1>
                <div className="p-4">
                    <div className="p-3 form-group row">
                        <textarea className="form-control col" placeholder="Descripcion Del Evento" style={{ maxHeight: '120px', minHeight: '120px', resize: 'none' }}></textarea>
                    </div>
                    <div className="p-3 form-group row gap-2">
                        <div className="col-5">
                            <label className="form-label text-light">LIMITE DE TIEMPO PARA CANCELAR LA APUESTA</label>
                            <input type="date" className="form-control" placeholder="Fecha Limite" />                            
                        </div>
                    </div>
                    <div className="p-3 form-group my-2 row">
                        <button className="btn text-light col" style={{ background: '#fb7b33' }}>CREAR EVENTO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;