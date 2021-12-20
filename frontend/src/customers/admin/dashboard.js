import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from 'chart.js';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

function Dashboard({ events, users, dashboard }) {
    const data = {
        labels: ['Lunes', 'Mates', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            label: '# of Votes',
            data: dashboard.totalWon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    return (
        <div>
            <div className="d-flex" id="content-wrapper">
                <div id="sidebar-container" className="p-4" style={{ background: '#fb7b33' }}>
                    <div className="logo">
                        <h4 className="text-light font-weight-bold mb-0 text-center">BETFAIR</h4>
                    </div>
                    <div className="menu">
                        <a href="#" class="d-block p-3 border-0 nav-link text-light text-center"><i class="icon ion-md-apps lead mr-2"></i>
                            Tablero</a>
                    </div>
                </div>

                <div id="content" class="bg-grey w-100">

                    <section class="bg-light py-3">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-8">
                                    <h1 class="font-weight-bold mb-0">Bienvenido Osvaldo</h1>
                                    <p class="lead text-muted">Revisa la última información</p>
                                </div>
                                <div class="col-lg-3 col-md-4 d-flex">
                                    <button class="btn w-100 align-self-center text-light" style={{ background: '#fb7b33' }}>Descargar reporte</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-mix py-3">
                        <div class="container">
                            <div class="card rounded-0">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                                            <div class="mx-auto">
                                                <h6 class="text-muted">Monto Total</h6>
                                                <h3 class="font-weight-bold">${dashboard.totalAmount}</h3>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                                            <div class="mx-auto">
                                                <h6 class="text-muted">Eventos Activos</h6>
                                                <h3 class="font-weight-bold">{(events.error !== true || events.length == 0) ? events.length : '0'}</h3>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                                            <div class="mx-auto">
                                                <h6 class="text-muted">No. de Organizadores</h6>
                                                <h3 class="font-weight-bold">{dashboard.organizers}</h3>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-6 d-flex stat my-3">
                                            <div class="mx-auto">
                                                <h6 class="text-muted">No. de usuarios</h6>
                                                <h3 class="font-weight-bold">{users.length}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 my-3">
                                    <div class="card rounded-0">
                                        <div class="card-header bg-light">
                                            <h6 class="font-weight-bold mb-0">Dinero Manejado En Los Eventos</h6>
                                        </div>
                                        <div class="card-body">
                                            <Line data={data}
                                                width={300}
                                                height={150}
                                                option={{
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        y: {
                                                            beginAtZero: true
                                                        }
                                                    }
                                                }} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 my-3">
                                    <div class="card rounded-0">
                                        <div class="card-header bg-light">
                                            <h6 class="font-weight-bold mb-0">Eventos Recientes</h6>
                                        </div>
                                        {(events.error !== true && events.length !== 0)
                                            ? events.map(event => <div class="card-body pt-2">
                                                <div class="d-flex border-bottom py-2">
                                                    <div class="d-flex mr-3">
                                                        <h2 class="align-self-center mb-0"><i class="icon ion-md-pricetag"></i></h2>
                                                    </div>
                                                    <div class="align-self-center">
                                                        <h6 class="d-inline-block mb-0">Fondo Total: <span className="text-success">${event.totalAmount}</span></h6>
                                                        <small class="d-block text-muted">{event.teamOne + ' VS ' + event.teamTwo}</small>
                                                    </div>
                                                </div>
                                            </div>)
                                            : <div class="card-body pt-2">
                                                <div class="d-flex border-bottom py-2">
                                                    <div class="align-self-center">
                                                        <h6 class="d-inline-block mb-0">No Hay Eventos Recientes</h6>
                                                    </div>
                                                </div>
                                            </div>}
                                        <button class="btn w-100 text-light" style={{ background: '#fb7b33' }}>Ver todas</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;