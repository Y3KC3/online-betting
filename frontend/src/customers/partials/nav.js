import { Link, useNavigate } from 'react-router-dom'; // Gracias a esto podemos viajar en la url sin refrescar la pagina
import NavLink from '../parts/link'; // Aqui importamos lo que seria la estructura de formacion de los Links
import axios from 'axios';

const logOut = (setUser, setDataUser, navigate) => {
    axios.post('http://localhost:9000/user/logOut')
        .then(() => {
            navigate('/');
            setUser(false);
            setDataUser(null);
        }).catch(error => console.log(error));
};

function Nav({ auth, dataUser, setUser, setDataUser }) { //aqui lo exportamos de una vez //normalmente los nombre de las clases la primera letra se le pone en mayuscula no hay problema con que no se ponga es cuestion de gustos
    const navigate = useNavigate();
    const onClickToExit = () => { document.querySelector('.sidebar').style.transform = 'translateX(400px)' }
    return (
        <div>
            <nav className="navbar navbar-light bg-dark px-5" >
                <div>
                    <a className="navbar-brand mx-3" style={{ fontSize: "38px", color: "#fb7b33" }}>BETFAIR</a>
                </div>
                <div>
                    {!auth ?
                        <div className="container mx-3 row">
                            <Link className="d-block p-2 btn btn-light my-1" to="/signIn">Ingresar</Link>
                            <Link className="p-2 btn text-light d-block my-1" style={{ background: "#fb7b33" }} to="/signUp">Registrarte</Link>
                        </div>
                        : <div className="container mx-3 my-3 row">
                            <button className="btn d-block p-2 my-1" onClick={() => document.querySelector('.sidebar').style.transform = 'translateX(0)'}><i className="fas fa-user-circle text-light" style={{ fontSize: '41px', cursor: 'pointer' }}></i></button>
                        </div>}
                </div>
            </nav>
            <div className="nav justify-content-center p-1" style={{ background: "#fb7b33" }}>
                <NavLink className="nav-link text-light" to="/" name="Inicio" onClick={onClickToExit} />
                <NavLink className="nav-link text-light" to="/bets" name="Apuestas" onClick={onClickToExit} />
                <NavLink className="nav-link text-light" to="/results" name="Resultados" onClick={onClickToExit} />
                <NavLink className="nav-link text-light" to="/news" name="Noticias" onClick={onClickToExit} />
            </div>
            <div className="sidebar">
                <div className='bg-dark text-light p-4 container py-5 h-100'>
                    <div>
                        <button className='btn text-light' onClick={onClickToExit} style={{ fontSize: '28px', position: 'absolute' }}>X</button>
                        <h1 className='text-center' style={{ color: '#fb7b33' }}>Perfil</h1>
                    </div>
                    <div className='p-2 w-100 d-flex justify-content-center align-items-center' style={{ height: '70%' }}>
                        <div>
                            {(dataUser !== null)
                                ? (dataUser.userType == 'user')
                                    ?   <div className='d-flex text-justify flex-column'>
                                            <Link className="link-sidebar" to="/user/myBets" onClick={onClickToExit}><i className="fas fa-money-bill mx-2"></i>Mis Apuestas</Link>
                                            <Link className="link-sidebar" to="/user/balance" onClick={onClickToExit}><i className="fas fa-university mx-2"></i>Mi Saldo</Link>
                                            <Link className="link-sidebar" to="/user/statistics" onClick={onClickToExit}><i className="fas fa-chart-bar mx-2"></i>Estadisticas</Link>
                                            <Link className="link-sidebar" to="/user/setting" onClick={onClickToExit}><i className="fas fa-cog mx-2"></i>Configuracion</Link>
                                        </div>
                                    : (dataUser.userType == 'organizer')
                                        ?   <div className='d-flex text-justify flex-column'>
                                                <Link className="link-sidebar" to="/create/event" onClick={onClickToExit}><i className="fas fa-calendar-alt mx-2"></i>Crear Evento</Link>
                                                <Link className="link-sidebar" to="/finish/event" onClick={onClickToExit}><i className="fas fa-calendar-alt mx-2"></i>Finalizar Evento</Link>
                                                <Link className="link-sidebar" to="/generate/report" onClick={onClickToExit}><i className="fas fa-sticky-note mx-2"></i>Generar Reporte</Link>
                                                <Link className="link-sidebar" to="/admin/setting" onClick={onClickToExit}><i className="fas fa-cog mx-2"></i>Configuracion</Link>
                                            </div>
                                        : (dataUser.userType == 'admin')
                                            ?   <div className='d-flex text-justify flex-column'>
                                                    <Link className="link-sidebar" to="/admin/dashboard" onClick={onClickToExit}><i className="fas fa-chart-line mx-2"></i>Dashboard</Link>
                                                    <Link className="link-sidebar" to="/admin/userControl" onClick={onClickToExit}><i className="fas fa-users mx-2"></i>Control De Usuario</Link>
                                                    <Link className="link-sidebar" to="/event" onClick={onClickToExit}><i className="fas fa-calendar-alt mx-2"></i>Eventos</Link>
                                                    <Link className="link-sidebar" to="/generate/report" onClick={onClickToExit}><i className="fas fa-sticky-note mx-2"></i>Generar Reporte</Link>
                                                    <Link className="link-sidebar" to="/admin/setting" onClick={onClickToExit}><i className="fas fa-cog mx-2"></i>Configuracion</Link>
                                                </div>
                                            : <div></div>
                                : <div></div>}
                        </div>
                    </div>
                    <div className='p-2 w-100 mt-4 d-flex justify-content-center'>
                        <button className="d-block btn text-center nav-link text-light" onClick={() => { onClickToExit(); logOut(setUser, setDataUser, navigate) }} style={{ background: '#fb7b33' }}>Cerrar Seccion</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav

// La etiqueta NavLink le pasamos los atributos que vamos a necesitar esto en el archivo link se leera en el this.props
// Link: esto es como una etiqueta 'a' en html solo que esta etiqueta hace que no se recargue la pagina por ende va mas rapido la pagina
// to: en lugar de href usamos 'to' para el viaje entre las paginas si utilizas 'href' te va a tirar un error