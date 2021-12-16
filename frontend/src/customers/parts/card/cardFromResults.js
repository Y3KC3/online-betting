import { Component } from 'react'; // Obligatorio Para Las Clases

export default class CardFromBets extends Component { //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    render() {
        const { teamOne, scores, teamTwo } = this.props; // el this.props estamos tomando de referencia los atributos pasados anteriormente
        return (
            <div className="px-3 d-flex justify-content-evenly text-light" style={{ fontSize: '20px' }}>
                <p>{teamOne}</p>
                <p>{scores}</p>
                <p>{teamTwo}</p>
            </div>
        );
    };
};