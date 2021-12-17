import axios from 'axios';

const activeAmount = (balance) => {
    document.getElementById('amount').style.display = 'flex';
    document.getElementById('inputAmount').value = balance;
};

const updateBalance = (id,newBalance,setDataUser) => {
    const confirmBalance = window.confirm(`¿Esta Seguro Que Quieres Actualizar Tu Saldo Actual A ${newBalance}$?`);
    if(confirmBalance) {
        document.getElementById('amount').style.display = 'none';
        axios.post(`http://localhost:9000/update/user/balance/${id}`, { balance: newBalance })
            .then(res => setDataUser(res.data)).catch(error => console.log(error));
    };
};

function Balance ({ dataUser, setDataUser }){
    return (
        <div className="balance-container p-3 d-flex justify-content-center align-items-center">
            <div className="p-5 text-light w-50 text-center" style={{ background: '#21252933' }}>
                <h3 className="pb-2" style={{ borderBottom: '1px solid #fff' }}>SALDO ACTUAL</h3>
                <h1 style={{ border: '1px solid #fff' }}>{dataUser.balance}$</h1>
                <button className="btn text-light d-block w-100 mt-2" style={{ background: '#fb7b33' }} onClick={() => { activeAmount(dataUser.balance) }}>Recargar</button>
            </div>
            <div id="amount">
                <div className="card p-2" style={{ width: '35%' }}>
                    <div className='p-4'>
                        <input id="inputAmount" type="number" className="form-control" placeholder="Digite La Cantidad A Ingresar"/>
                        <div className='p-3 row gap-2'>
                            <button className='col btn text-light' style={{ background: "#fb7b33" }} value={dataUser._id} onClick={e => updateBalance(e.target.value,document.getElementById('inputAmount').value,setDataUser)}>Confirmar</button>
                            <button className='col btn btn-danger' onClick={() => document.getElementById('amount').style.display = 'none'}>Cancelar</button>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default Balance;