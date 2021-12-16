import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const regularExpressions = {
    documentType: /^[a-zA-Za]{2,16}$/,
    numberValidation: /^[0-9]{6,16}$/,
    briefDescription: /^[a-zA-Za ]{6,30}$/,
    multifunctional: /^[a-zA-Za]{4,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    password: /^.{6,30}$/
};

const fields = {
    documentType: false,
    identificationNumber: false,
    expeditionPlace: false,
    firstName: false,
    secondName: false,
    lastName: false,
    secondSurname: false,
    email: false,
    phoneNumber: false,
    password: false,
    repeatPassword: false,
    residenceAddress: false,
    municipality: false
};

const validateField = (expression,input) => {
    if (expression.test(input.value)){
        document.querySelector(`.field_${input.name}`).classList.remove('show');
        fields[input.name] = true;
    } else { 
        document.querySelector(`.field_${input.name}`).classList.add('show');
        fields[input.name] = false;
    };
};

const passwordValidation = () => {
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeatPassword');
    if (password.value !== repeatPassword.value) { 
        document.querySelector('.field_repeatPassword').classList.add('show') 
        fields.repeatPassword = false;
    } else {
        document.querySelector('.field_repeatPassword').classList.remove('show')
        fields.repeatPassword = true;
    };
}

const validation = e => {
    const targetName = e.target.name;
    const input = e.target;
    if (targetName === "documentType") { validateField(regularExpressions.documentType,input) };
    if (targetName === "identificationNumber") { validateField(regularExpressions.numberValidation,input) };
    if (targetName === "expeditionPlace") { validateField(regularExpressions.briefDescription,input) };
    if (targetName === "firstName") { validateField(regularExpressions.multifunctional,input) };
    if (targetName === "secondName") { validateField(regularExpressions.multifunctional,input) };
    if (targetName === "lastName") { validateField(regularExpressions.multifunctional,input) };
    if (targetName === "secondSurname") { validateField(regularExpressions.multifunctional,input) };
    if (targetName === "email") { validateField(regularExpressions.email,input) };
    if (targetName === "phoneNumber") { validateField(regularExpressions.numberValidation,input) };
    if (targetName === "password") { validateField(regularExpressions.password,input); passwordValidation() }
    if (targetName === "repeatPassword") { passwordValidation() };
    if (targetName === "residenceAddress") { validateField(regularExpressions.briefDescription,input) };
    if (targetName === "municipality") { validateField(regularExpressions.briefDescription,input) };
};

let state = { //creamos el objeto state para crear una api simulada de los datos a introducir
    documentType: '',
    identificationNumber: '',
    expeditionDate: '',
    expeditionPlace: '',
    firstName: '',
    secondName: '',
    lastName: '',
    secondSurname: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
    dateOfBirth: '',
    residenceAddress: '',
    municipality: '',
    sex: 'man',
    privacyPolicy: ''
};

const onValidation = (navigate,setUsers) => { //creamos la funcion para mostrar los datos por consola
    if (fields.documentType && fields.email && fields.expeditionPlace && fields.identificationNumber && fields.firstName && fields.secondName && fields.lastName && fields.secondSurname && fields.password && fields.repeatPassword && fields.municipality && fields.residenceAddress && fields.phoneNumber){
        document.querySelector('.fieldsError').classList.remove('show');
        document.getElementById('signUpForm').reset();
        axios.post('http://localhost:9000/signup', state)
        .then(res => { 
            setUsers([]);
            navigate('/signIn');
        }).catch(error => console.log(error));
    } else { document.querySelector('.fieldsError').classList.add('show') };
};

const onChange = e => { // y creamos la funcion para actualizar los campos del object 'state'
    let name = e.target.name;
    state[name] = e.target.value
};

function SignUp({ setUsers }) { //lo exportamos de una vez
    let navigate = useNavigate();
    setTimeout(() => {
        const inputs = document.querySelectorAll('#signUpForm div input');
    
        inputs.forEach(input => {
            input.addEventListener('keyup',validation);
            input.addEventListener('blur',validation);
        });
    },700);
    return (
        <div className="d-flex justify-content-center signUp-container">
            <form className="row container py-4 my-5 overflow-auto" style={{ background: "#21252933" }} id="signUpForm" onSubmit={e =>{e.preventDefault(); onValidation(navigate,setUsers)}}>
                <h1 className="title text-light mb-2">Registrate</h1>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Tipo De Documento</label>
                    <input type="text" className="form-control" name="documentType" aria-describedby="emailHelp" onChange={onChange} required/>
                    <p className="field field_documentType">El tipo de documento no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 2 caracteres ni superar los 16</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Numero De Identificacion</label>
                    <input type="number" className="form-control" name="identificationNumber" onChange={onChange} required/>
                    <p className="field field_identificationNumber">El numero de identificacion no debe tener letras ni caracteres extraños, ni espacios no debe ser menor de 6 digitos ni superar 16 digitos</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Fecha De Expedicion</label>
                    <input type="date" className="form-control" name="expeditionDate" onChange={onChange} min="2020-01-01" max="2030-01-01" required/>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Lugar De Expedicion</label>
                    <input type="text" className="form-control" name="expeditionPlace" onChange={onChange} required/>
                    <p className="field field_expeditionPlace">El lugar de expedicion no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 30</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Primer Nombre</label>
                    <input type="text" className="form-control" name="firstName" onChange={onChange} required/>
                    <p className="field field_firstName">El primer nombre no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 16</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Segundo Nombre</label>
                    <input type="text" className="form-control" name="secondName" onChange={onChange} required/>
                    <p className="field field_secondName">El segundo nombre no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 16</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Primer Apellido</label>
                    <input type="text" className="form-control" name="lastName" onChange={onChange} required/>
                    <p className="field field_lastName">El primer apellido no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 16</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Segundo Apellido</label>
                    <input type="text" className="form-control" name="secondSurname" onChange={onChange} required/>
                    <p className="field field_secondSurname">El segundo apellido no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 16</p>
               </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Correo Electronico</label>
                    <input type="email" className="form-control" name="email" onChange={onChange} required/>
                    <p className="field field_email">Escriba un formato de correo valido</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Telefono</label>
                    <input type="number" className="form-control" name="phoneNumber" onChange={onChange} required/>
                    <p className="field field_phoneNumber">El numero de telefono no debe tener letras ni caracteres extraños, ni espacios no debe ser menor de 6 digitos ni superar 16 digitos</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Contraseña</label>
                    <input type="password" id="password" className="form-control" name="password" onChange={onChange} required/>
                    <p className="field field_password">La contraseña no debe tener menos de 6 caracteres ni superar los 30 caracteres</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Repetir Contraseña</label>
                    <input type="password" id="repeatPassword" className="form-control" name="repeatPassword" onChange={onChange} required/>
                    <p className="field field_repeatPassword">Las contraseñas deben ser iguales</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Fecha De Nacimiento</label>
                    <input type="date" className="form-control" name="dateOfBirth" onChange={onChange} min="1900-01-01" max="2022-01-01" required/>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Direccion De Recidencia</label>
                    <input type="text" className="form-control" name="residenceAddress" onChange={onChange} required/>
                    <p className="field field_residenceAddress">La direccion de recidencia no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 30</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Municipio</label>
                    <input type="text" className="form-control" name="municipality" onChange={onChange} required/>
                    <p className="field field_municipality">El municipio no debe tener numeros, no se permite caracteres extraños, ni espacios, y no puede ser menor de 4 caracteres ni superar los 30</p>
                </div>
                <div className="mb-3 col-3">
                    <label className="form-label text-light">Sexo</label>
                    <select class="form-select" aria-label="Default select example" name="sex" onChange={onChange} required>
                        <option value="man" selected>Hombre</option>
                        <option value="woman">Mujer</option>
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="m-2 form-check-input" id="exampleCheck1" name="privacyPolicy" onChange={onChange} required/>
                    <label className="form-check-label text-light" for="exampleCheck1" style={{ fontSize: '18px' }}>ACEPTO TODOS LOS TERMINOS Y CONDICIONES-CONTRATO DE JUEGO, LOS CUALES PODRAN HACER CONSULTAS AQUI</label>
                </div>
                <p className="field fieldsError">!Rellene Todos Los Campos!</p>
                <button type="submit" className="btn text-light" style={{ background: "#fb7b33" }}>Enviar</button>
            </form>
        </div>
    );
};

export default SignUp;

//como nos esta mandando crear una API simulada aqui esta
//creamos un objeto que se va a llamar 'state' con los valores de todos los inputs
//creamos una funcion en la clase para que muestre los valores en la consola del navegador con el this.state tomado de referencia la clase y ingresando al objeto state
//y creamos una funcion que se llama onChange que es una funcion para cambiar los estados del 'this.state' este evento se va a captar cuando escribas en algun input
//cada vez que escribimos ejecutamos la funcion en el input que esta escribiendo por ahora esto va asi ya que es una api simulada pero esto se va a quitar es por eso que en todos los inputs tiene un atributo que se llama onChage(this.onChange)
//y paramos el comportamiento predeterminado del form haciendo que en vez de reiniciar de ejecute la funcion para mostrar los datos en consola