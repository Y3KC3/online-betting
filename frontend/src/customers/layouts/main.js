import { Component } from 'react'; //Obligatorio para las clases
import MainLink from '../parts/link'; // Aqui importamos lo que seria la estructura de formacion de los Links
import Card from '../parts/card/cardFromMain'; // Importamos lo que seria la estructura de formacion de las Cartas de esta zona de la pagina

export default class Main extends Component { //lo exportamos de una vez
    render() {
        return (
            <div>
                <div className="container-image p-3">
                    <div className="m-5">
                        <h1 className="my-5 text-light">Sigue Nuestras Redes <br/> Sociales En <span className="typed"><i className="socialNetworks">Facebook</i></span></h1>
                        <div className="social-networks-icons-container">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-telegram-plane"></i>
                        </div>
                    </div>
                    <div className="text-center text-light welcome-card" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title my-5">ABRE HOY TU CUENTA Y RECLAMA UN BONO DE BIENVENIDA</h5>
                            <a href="#" className="btn mt-4 text-light" style={{ background: "#fb7b33", fontWeight: '650' }}>!Registrate!</a>
                            <p className="card-text mt-2">Aplican Terminos Y Condiciones</p>
                        </div>
                    </div>
                    <ul className="nav justify-content-end bg-dark p-1 px-5 networks-nav">
                        <MainLink className="nav-link text-light" to="#" name="Instagram"/>
                        <MainLink className="nav-link text-light" to="#" name="Twetter"/>
                        <MainLink className="nav-link text-light" to="#" name="Facebook"/>
                    </ul>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Card title="Canales" description="Conozca los canales disponible para recargar tu cuenta" to="#" buttonName="Canales"/>
                    <Card title="Apuestas" description="Consulta los resultados de su apuesta en vivo y en directo." to="#" buttonName="Apuestas"/>
                </div>
            </div>
        );
    };
};

// La etiqueta Card le pasamos los atributos que vamos a necesitar esto en el archivo cardFromMain se leera en el this.props
// La etiqueta MainLink le pasamos los atributos que vamos a necesitar esto en el archivo link se leera en el this.props