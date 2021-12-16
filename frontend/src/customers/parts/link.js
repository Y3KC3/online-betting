import { Component } from 'react'; //Necesario para todas las clases
import { Link } from 'react-router-dom'; // Gracias a esto podemos viajar en la url sin refrescar la pagina

const link = { // Creamos unos estilos para varias etiquetas lo ponemos aqui para ahorrar lineas de codigo
    fontSize: "19px",
    fontWeight: "620"
}; //todos los estilos en javascript si tienen comillas no se les ponen si no que se utiliza el Camel Case

export default class LinkStructure extends Component { //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    render(){
        const { className, to, name, onClick } = this.props; // el this.props estamos tomando de referencia los atributos pasados anteriormente
        return(
            <li className="nav-item">
                <Link className={className} to={to} style={link} onClick={onClick}>{name}</Link>
            </li>
        );
    };
};

// los estilos en las etiquetas JSX se utilizan con esta sintaxi style={{ aqui adentro van los estilos }}