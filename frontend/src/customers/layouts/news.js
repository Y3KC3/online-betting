import { Component } from 'react'; //obligatorio para las clases
import Card from '../parts/card/cardFromNews' // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

export default class News extends Component { // lo exportamos de una vez
    render(){
        return(
            <div className="news-container p-4 d-flex justify-content-center align-items-center">
                <div className="row p-4 gap-2">
                    <Card title="Conoce A Los Jugadores Mas Destacados De La Temporada" description="Si quieres conocer a los mejores jugadores de la temporada, tienes la informacion en tus manos, para apostar a la mejor seleccion posible, todo al alcance de tus manos." to="#" buttonName="Jugadores"/>
                    <Card title="Los Equipos Mas Destacados De La Temporada" description="Si no te basta conocer a los mejores jugadores, puedes optar por conocer a los mejores equipo contando en si con la puntuacion ganada en toda la temporada." to="#" buttonName="Equipos"/>                
                </div>
            </div>
        );
    };
};

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromNews se leera en el this.props