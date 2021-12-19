import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SmallCard, CardByDate, CardByEvent } from '../parts/event/generateReportCard';

const report = (setReport,options,navigate) => {
    axios.post('http://localhost:9000/generate/report',{options})
        .then(res => { 
            setReport(res.data);
            navigate('/report/pdf');
        }).catch(error => console.log(error));
};

function GenerateReport ({ setReport }){
    const navigate = useNavigate();
    const options = {
        currentBets: false,
        finalizedBets: false,
        greaterTotal: false,
        lowerTotal: false,
        amountAndBettors: false
    };
    return (
        <div>
            <div className="generateReport-container p-4 d-flex justify-content-center">
                <div className="p-5 w-100" style={{ background: "#21252933" }}>
                    <h2 className="text-light">Generar Reporte</h2>
                    <div className="p-3">
                        <SmallCard name="EVENTOS DE APUESTAS VIGENTES" options={options} option="currentBets"/>
                        <CardByDate name="APUESTAS FINALIZADAS" options={options} option="finalizedBets"/>
                        <SmallCard name="EVENTOS CON MAYOR MONTO TOTAL RECAUDADO" options={options} option="greaterTotal"/>
                        <SmallCard name="EVENTOS CON MENOR MONTO TOTAL RECAUDADO" options={options} option="lowerTotal"/>
                        <CardByEvent name="MONTOS Y APOSTADORES" options={options} option="amountAndBettors"/>
                    </div>
                    <div className="p-3">
                        <button className="btn text-light" style={{ background: '#fb7b33' }} onClick={() => report(setReport,options,navigate)}>GENERAR REPORTE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenerateReport;