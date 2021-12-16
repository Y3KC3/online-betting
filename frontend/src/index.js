import { StrictMode } from 'react'; //Para que no se escape ningun error
import ReactDOM from 'react-dom'; //Para el despliegue en el html
import App from './customers/App'; //Llamamos al archivo principal que se llama App

ReactDOM.render(<StrictMode><App/></StrictMode>,document.getElementById('root'));
//ReactDom.render es porque vamos a renderizar algo en la vista
//Metemos el App dentro de la etiqueta de StrictMode para que no se escape ningun error
//Y luego seleccionamos donde lo vamos a poner en el html en este caso seleccionamos el div del html por el id