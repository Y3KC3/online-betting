import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const onValidation = (navigate,data,setUser,setDataUser) => {
    if (data.identificationNumber == '000000000' && data.password == 'userAdmin') return navigate('/admin/signIn');
    document.getElementById('buttonSignIn').classList.add('disabled');
    document.getElementById('error').classList.remove('show');
    axios.post('http://localhost:9000/signin', {
        identificationNumber: data.identificationNumber,
        password: data.password
    }).then(res => {
        if (res.data._id){
            setUser(true);
            setDataUser(res.data);
            navigate('/');
        } else {
            document.getElementById('buttonSignIn').classList.remove('disabled');
            document.getElementById('error').classList.add('show');
        };
    }).catch(error => console.log(error));
};

function SignIn ({ setUser, setDataUser }){
    const navigate = useNavigate();
    const [data,setData] = useState({
        identificationNumber: '',
        password: ''
    });

    return (
        <div className="signIn-container">
            <form className="p-4 signIn-card" onSubmit={e => {e.preventDefault(); onValidation(navigate,data,setUser,setDataUser)}}>
                <h1 className="title text-light mb-2 my-2">Inicia Seccion</h1>
                <div className="mb-3">
                    <label className="form-label text-light">Identificacion</label>
                    <input type="number" className="form-control" name="identificationNumber" onChange={e => setData({...data, identificationNumber: e.target.value})} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Contraseña</label>
                    <input type="password" className="form-control" name="password" onChange={e => setData({...data, password: e.target.value})} aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn w-100 my-4 text-light" id="buttonSignIn" style={{ background: "#fb7b33" }}>Enviar</button>
                <p className="my-2 text-light field" id="error">Identificacion O Contraseña Incorrecta</p>
            </form>
        </div>
    );
};

export default SignIn;