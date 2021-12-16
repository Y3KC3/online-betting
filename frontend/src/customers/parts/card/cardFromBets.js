import { Component } from 'react'; // Obligatorio Para Las Clases

export default class CardFromBets extends Component { //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    render() {
        const { title, teamOne, teamBetOne, teamTwo, teamBetTwo } = this.props; // el this.props estamos tomando de referencia los atributos pasados anteriormente
        return (
            <div className="col-5" style={{ border: '2px solid #fff' }}>
                <div className="p-1">
                    <p className="card-title text-light my-2">{title}</p>
                    <div className="px-3 text-light">
                        <div>
                            <div className="d-flex justify-content-between text-light">
                                <h4>{teamOne}</h4>
                                <h4>{teamBetOne}</h4>
                            </div>
                            <div className="d-flex justify-content-between text-light">
                                <h4>{teamTwo}</h4>
                                <h4>{teamBetTwo}</h4>
                            </div>
                        </div>
                        <div className="my-2 d-flex justify-content-between">
                            <button className="btn btn-outline-light btn-sm">{teamOne}</button>
                            <button className="btn btn-outline-light btn-sm">Empate</button>
                            <button className="btn btn-outline-light btn-sm">{teamTwo}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};