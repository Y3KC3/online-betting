import axios from 'axios';

const removeUser = (id,setUsers) => {
    const verification = window.confirm('ESTAS SEGURO QUE DESEA ELIMINAR EL USUARIO ',id);
    if (verification) {
        axios.post(`http://localhost:9000/remove/user/${id}`)
            .then(() => { setUsers([]) }).catch(error => console.log(error));
    };
};

const showRankUpgradeCard = (id,userType) => {
    document.getElementById('changeRank').style.display = 'flex';
    document.getElementById('changeConfirmButton').setAttribute('value',id);
    document.getElementById('exchangeUserType').value = userType;
};

const updateRank = (id,userType,setUsers) => {
    const confirmUpdating = window.confirm(`¿Esta Seguro Que Quiere Cambiar El Rango Del Usuario?`);
    if(confirmUpdating) {
        document.getElementById('changeRank').style.display = 'none';
        axios.post(`http://localhost:9000/update/rank/user/${id}`, { userType })
            .then(() => { setUsers([]) }).catch(error => console.log(error));
    };
};

function userControl ({ users, setUsers }) {
    return (
        <div className="userControl-container p-4 mx-auto">
            {users.map(user => 
                <div className="my-2 bg-dark p-3 text-light d-flex justify-content-between" key={user._id}>
                    <p className="px-1">ID: {user.identificationNumber}</p>
                    <p className="px-1">{user.userType}</p>
                    <div className="d-flex">
                        <p className="mx-1">{user.firstName}</p>
                        <p className="mx-1">{user.secondName}</p>
                        <p className="mx-1">{user.lastName}</p>
                        <p className="mx-1">{user.secondSurname}</p>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-danger mx-1" value={user._id} onClick={e => { removeUser(e.target.value,setUsers) }}>Eliminar Usuario</button>
                        <button className="btn btn-sm text-light mx-1" style={{ background: '#fb7b33' }}>Bloquear Temporalmente</button>
                        <button className="btn btn-sm btn-light mx-1" value={user} onClick={() => { showRankUpgradeCard(user._id,user.userType) }}>Actualizar Rango</button>
                    </div>
                </div>)}
            <div id="changeRank">
                <div className="exchangeCard card p-2" style={{ width: '30%' }}>
                    <div className='p-4'>
                        <select id="exchangeUserType" className='form-control'>
                            <option value="user">Usario</option>
                            <option value="organizer">Organizador</option>
                        </select>
                        <div className='p-3 row gap-2'>
                            <button id="changeConfirmButton" className='col btn text-light' style={{ background: "#fb7b33" }} onClick={e => updateRank(e.target.value,document.getElementById('exchangeUserType').value,setUsers)}>Confirmar</button>
                            <button className='col btn btn-danger' onClick={() => document.getElementById('changeRank').style.display = 'none'}>Cancelar</button>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default userControl;