import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const adminValidation = (data, setUser, setDataUser, navigate) => {
    axios.post('http://localhost:3001/adminSignIn',{
        adminName: data.name,
        keyPassword: data.keyPassword,
        password: data.password
    }).then(res => {
        setUser(true);
        setDataUser(res.data);
        navigate('/');
    }).catch(error => console.log(error));
};

function AdminSignIn ({ setUser, setDataUser }){
    const navigate = useNavigate();
    const [data,setData] = useState({
        name: '',
        keyPassword: '',
        password: ''
    });

    return (
        <div className="adminSignIn-container">
            <form className="p-4 signIn-card" onSubmit={e => {e.preventDefault(); adminValidation(data,setUser,setDataUser,navigate)}}>
                <h1 className="title text-light mb-2 my-2">Admin</h1>
                <div className="mb-3">
                    <label className="form-label text-light">Nombre</label>
                    <input type="text" className="form-control" name="name" onChange={e => setData({...data, name: e.target.value})} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light">Palabra Clave</label>
                    <input type="text" className="form-control" name="keyword" onChange={e => setData({...data, keyPassword: e.target.value})} aria-describedby="emailHelp" />
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

export default AdminSignIn;