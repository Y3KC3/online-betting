import { Component } from 'react'; // Obligatorio Para Las Clases
import { Link } from 'react-router-dom'; // Gracias a esto podemos viajar en la url sin refrescar la pagina

export default class CardFromMain extends Component{ //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    render() {
        const { title, description, to, buttonName } = this.props; // el this.props estamos tomando de referencia los atributos pasados anteriormente
        return (
            <div className="mx-4">
                <div className="card p-3 bg-dark">
                    <div className="card-body text-light">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={to} className="btn text-light" style={{ background: "#fb7b33" }}>{buttonName}</Link>
                    </div>
                </div>
            </div>
        );
    };
};

// Link: esto es como una etiqueta 'a' en html solo que esta etiqueta hace que no se recargue la pagina por ende va mas rapido la pagina
// to: en lugar de href usamos 'to' para el viaje entre las paginas si utilizas 'href' te va a tirar un error