import { SmallCard, CardByDate, CardByEvent } from '../parts/event/generateReportCard';

function GenerateReport (){
    return (
        <div className="generateReport-container p-4 d-flex justify-content-center">
            <div className="p-5 w-100" style={{ background: "#21252933" }}>
                <h2 className="text-light">Generar Reporte</h2>
                <div className="p-3">
                    <SmallCard name="EVENTOS DE APUESTAS VIGENTES"/>
                    <CardByDate name="APUESTAS FINALIZADAS"/>
                    <SmallCard name="EVENTOS CON MAYOR MONTO TOTAL RECAUDADO"/>
                    <SmallCard name="EVENTOS CON MENOR MONTO TOTAL RECAUDADO"/>
                    <CardByEvent name="MONTOS Y APOSTADORES"/>
                </div>
                <div className="p-3">
                    <button className="btn text-light" style={{ background: '#fb7b33' }}>GENERAR REPORTE</button>
                </div>
            </div>
        </div>
    );
};

export default GenerateReport;