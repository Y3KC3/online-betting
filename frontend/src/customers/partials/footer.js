import { Component } from 'react'; //Componente necesario para las clases
import FooterLink from '../parts/link' // Aqui importamos lo que seria la estructura de formacion de los Links

export default class Footer extends Component { //aqui lo exportamos de una vez
    render() {
        return (
            <div>
                <footer className="text-center text-white bg-dark mt-5">
                    <section className="d-flex justify-content-evenly align-items-center p-2" style={{ background: '#fb7b33' }}>
                        <img className="img-fluid" src="./img/patrocinador1.png" atl="patrocinador" />
                        <div className="d-flex">
                            <img className="img-fluid mx-2" src="./img/Libertadores.png" atl="Libertadores" style={{ width: '180px' }} />
                            <img className="img-fluid mx-2" src="./img/Sudamericana.png" atl="Sudamericana" style={{ width: '200px' }} />
                        </div>
                    </section>
                    <div className="container">
                        <section className="mt-5 p-3">
                            <ul className="nav justify-content-center">
                                <FooterLink className="nav-link text-light" to="#" name="Sobre Nosotros"/>
                                <FooterLink className="nav-link text-light" to="#" name="Ayuda Al Cliente"/>
                                <FooterLink className="nav-link text-light" to="#" name="Politica"/>
                                <FooterLink className="nav-link text-light" to="#" name="Juego Responsable"/>
                                <FooterLink className="nav-link text-light" to="#" name="Eliminatoria QATAR 2022"/>
                            </ul>
                        </section>
                        <section className="d-flex justify-content-center align-items-center">
                            <img src="./img/adult.png" class="img-fluid" style={{ width: '3rem' }} />
                            <p className="mx-2 pt-3" style={{ fontSize: '18px' }}>Por favor juega de forma responsable</p>
                            <button className="btn btn-sm btn-outline-light">Mas informacion</button>
                        </section>
                    </div>
                    <hr />
                    <section className="d-flex justify-content-between mt-4 px-4">
                        <p className="mx-3">EL JUEGO ES ENTRETENIMIENTO, JUGAR SIN CONTROL ES ADICCION, JUEGA CON MODERACION.</p>
                        <p className="mx-3">POR FAVOR JUEGA CON PRUDENCIA Y RESPONSABILIDAD RESPETANDO LAS POLITICAS DE PRIVACIDAD.</p>
                    </section>
                    <section className="d-flex justify-content-center pt-3 mt-2" style={{ background: '#fb7b33' }}>
                        <p className="mx-2">Todos Los Derechos Reservados</p>
                        <p className="mx-2"> Copyright © 2021</p>
                    </section>
                </footer>
            </div>
        );
    };
};

// La etiqueta FooterLink le pasamos los atributos que vamos a necesitar esto en el archivo link se leera en el this.props
// los estilos en las etiquetas JSX se utilizan con esta sintaxi style={{ aqui adentro van los estilos }}
// por ahora no esta la etiqueta 'Link' ya que todavia no existe la vista para las rutas a viajar
// los advertencia que te tira en la consola es producto a los href de las etiquetas a, no te preocupes