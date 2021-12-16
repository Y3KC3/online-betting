import { Component } from 'react'; // Obligatorio Para Las Clases
import { Link } from 'react-router-dom'; // Gracias a esto podemos viajar en la url sin refrescar la pagina

export default class CardFromBets extends Component { //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    render() {
        const { title, description, to, buttonName } = this.props; // el this.props estamos tomando de referencia los atributos pasados anteriormente
        return (
            <div class="col">
                <div className="p-2" style={{ background: "#21252955" }}>
                    <div className="card-body text-light">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text">{description}</p>
                        <Link to={to} className="btn text-light" style={{ background: "#fb7b33" }}>{buttonName}</Link>
                    </div>
                </div>
            </div>
        );
    };
};