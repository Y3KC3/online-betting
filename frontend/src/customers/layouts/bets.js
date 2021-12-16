import { Component } from 'react'; //obligatorio para las rutas
import Card from '../parts/card/cardFromBets'; // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

export default class Bets extends Component { // lo exportamos de una vez
    render(){
        return (
            <div className="bets-container py-4 d-flex justify-content-center">
                <div className="container row gap-4">
                    <div className="col-4 p-4 row gap-1" style={{ background: "#21252955" }}>
                        <h1 className="title text-light">Ligas</h1>
                        <button className="btn btn-outline-light btn-sm">Alemania</button>
                        <button className="btn btn-outline-light btn-sm">Argentina</button>
                        <button className="btn btn-outline-light btn-sm">Euroliga</button>
                        <button className="btn btn-outline-light btn-sm">FIBA WCQ - Africa</button>
                        <button className="btn btn-outline-light btn-sm">FIBA WCQ - Americas</button>
                        <button className="btn btn-outline-light btn-sm">FIBA WCQ - Asia</button>
                        <button className="btn btn-outline-light btn-sm">FIBA WCQ - Europa</button>
                        <button className="btn btn-outline-light btn-sm">Francia</button>
                        <button className="btn btn-outline-light btn-sm">Inglaterra</button>
                        <button className="btn btn-outline-light btn-sm">Japon</button>
                        <button className="btn btn-outline-light btn-sm">NBA</button>
                        <button className="btn btn-outline-light btn-sm">NCAAB</button>
                        <button className="btn btn-outline-light btn-sm">Portugal</button>
                    </div>
                    <div className="col-8 p-4" style={{ background: "#21252955" }}>
                        <h3 className="title live text-light">!EN VIVO!</h3>
                        <div className="row my-4 gap-2 d-flex justify-content-center">
                            <Card title="FIBA WCQ - Asia" teamOne="Libano" teamBetOne="0" teamTwo="Indonesia" teamBetTwo="1"/>
                            <Card title="FIBA WCQ - Africa" teamOne="Costa M." teamBetOne="0" teamTwo="Uganda" teamBetTwo="1"/>
                            <Card title="NBA" teamOne="Golden" teamBetOne="0" teamTwo="Portland" teamBetTwo="1"/>
                            <Card title="NBA" teamOne="Angeles" teamBetOne="0" teamTwo="Sacramento" teamBetTwo="1"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromBets se leera en el this.props