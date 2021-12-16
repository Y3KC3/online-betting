function Balance ({ dataUser }){
    return (
        <div className="balance-container p-3 d-flex justify-content-center align-items-center">
            <div className="p-5 text-light w-50 text-center" style={{ background: '#21252933' }}>
                <h3 className="pb-2" style={{ borderBottom: '1px solid #fff' }}>SALDO ACTUAL</h3>
                <h1 style={{ border: '1px solid #fff' }}>{dataUser.balance}$</h1>
                <button className="btn text-light d-block w-100 mt-2" style={{ background: '#fb7b33' }}>Recargar</button>
            </div>
        </div>
    );
};

export default Balance;