import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //instalamos un modulo de react para el viaje de las barras de navegacion que se llama react-router-dom
import axios from 'axios';

// De aqui hasta abajo llamamos todos los elementos que ya creamos
// En esta parte llamamos a los parciales que serian la barra de navegacion y el footer que siempre estaran en toda la aplicacion
import Nav from './partials/nav';
import Footer from './partials/footer';
//-------------//
// En esta parte vamos a llamar el disenio osea el contenido que va a tener nuestra aplicacion
import Main from './layouts/main';
import SignUp from './layouts/signUp';
import SignIn from './layouts/signIn';
import Bets from './layouts/bets';
import Results from './layouts/results';
import News from './layouts/news';
//-----------User------------//
import Balance from './user/balance';
import MyBets from './user/myBets';
import Construction from './layouts/construction';
//-----------Admin----------//
import AdminSignIn from './admin/adminSignIn';
import UserControl from './admin/userControl';
//----------Event-----------//
import Event from './event/event';
import CreateEvent from './event/createEvent';
import FinishEvent from './event/finishEvent';
import GenerateReport from './event/generateReport';
//-------------------//
//------------------------//

const auth = (setUser, setDataUser) => {
  axios.post('http://localhost:9000/user/isAuthenticated')
    .then(res => {
      const auth = res.data.authentication;
      setUser(auth);
      if (auth) return setDataUser(res.data.user);
      else return setDataUser(null);
    }).catch(error => console.log(error));
};

const setAllUsers = (setUsers) => {
  axios.post('http://localhost:9000/admin/userControl')
    .then(res => { 
        const users = res.data;
        setUsers(users);
    }).catch(error => console.log(error));
};

function App() { //creamos la clase para utilizarlo como componente principal y vamos a extender (extends) los valores de Component (para que no haya ningun problema en el despliegue)
  const [dataUser, setDataUser] = useState(null);
  const [user, setUser] = useState(false);
  const [users,setUsers] = useState([]);
  useEffect(() => { 
    if (!user) return auth(setUser, setDataUser) 
    if (users.length === 0) { setAllUsers(setUsers) };
  });

  return ( // aqui lo retornamos y va a ir la sintaxis de JSX que es un parecido a html (no lo confundas no es html es un parecido)
    <div>
      <Router>
        <Nav auth={user} dataUser={dataUser} setUser={setUser} setDataUser={setDataUser}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signUp" element={<SignUp setUsers={setUsers}/>} />
          <Route path="/signIn" element={<SignIn setUser={setUser} setDataUser={setDataUser} />} />
          <Route path="/admin/signIn" element={<AdminSignIn setUser={setUser} setDataUser={setDataUser} />} />
          <Route path="/bets" element={<Bets />} />
          <Route path="/results" element={<Results />} />
          <Route path="/news" element={<News />} />
          
          <Route path="/user/balance" element={<Balance dataUser={dataUser}/>} />
          <Route path="/user/myBets" element={<MyBets />} />
          <Route path="/user/statistics" element={<Construction />} />
          <Route path="/user/setting" element={<Construction />} />

          <Route path="/event" element={<Event />} />
          <Route path="/create/event" element={<CreateEvent />} />
          <Route path="/finish/event" element={<FinishEvent />} />
          <Route path="/generate/report" element={<GenerateReport />} />

          <Route path="/admin/dashboard" element={<Construction />}/>
          <Route path="/admin/userControl" element={<UserControl users={users} setUsers={setUsers}/>}/> 
          <Route path="/admin/setting" element={<Construction />} />
          <Route path="*" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

// Nota: todo el contenido ajuro debe ir dentro de una etiqueta (te va a dar un error si lo colocas multiple)
// Router: esto lo que hace es funcionar toda la navegacion de la aplicacion todos los que contengan un (Link) debe ir dentro de esta etiqueta
// Routes: Esto funciona para el renderizado de la navegacion a juro las etiquetas Route deben estar dentro de esta
// Route: Aqui lo que hacemos es ya poner lo que va a pasar cuando pase la ruta indicada (existen muchas funcionalidades en la etiqueta Router) Se podria escribir <Route></Route> pero para evitar espacion lo escribimos asi <Route/> ya que JSX lo ve que la etiqueta ya cerro
// path: esto va dentro de Route lo que hace es validar, si el usuario visita esta url hacer.......
// element: esto es lo que va hacer el Route si comprueba que es verdad, por ejemplo aqui esta renderizando una vista, pero como dije Route tiene muchas funciones no solo para esto sirve
// PD: todas las etiquetas ajuro deben cerrarse asi sea que lo cierre en la misma etiqueta ejemplo <input/> si lo llegase a dejar asi <input> te va a dar un error

export default App; //aqui exportams la clase