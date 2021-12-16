import { Component } from 'react'; // obligatorio para las clases
import Card from '../parts/card/cardFromResults'; // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

export default class Results extends Component { //lo exportamos de una vez
    render(){
        return (
            <div className="results-container p-4 d-flex justify-content-center">
                <div className="w-100 p-5">
                    <h2 className="card-title text-light my-2">Resultados</h2>
                    <div className="p-3 text-light my-3" style={{ background: "#21252933" }}>
                        <h4 className="card-title">Jueves 25 De Noviembre</h4>
                        <Card teamOne="New York Knicks" scores="97-118" teamTwo="Phoenix Suns"/>
                        <Card teamOne="Orlando Magic" scores="88-123" teamTwo="Chicago Bulls"/>
                    </div>
                    <div className="p-3 text-light my-3" style={{ background: "#21252933" }}>
                        <h4 className="card-title">Miercoles 24 De Noviembre</h4>
                        <Card teamOne="L.A. Lakers" scores="137-141" teamTwo="Sacramento Kings"/>                        
                    </div>
                </div>
            </div>
        );
    };
};

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromResults se leera en el this.props