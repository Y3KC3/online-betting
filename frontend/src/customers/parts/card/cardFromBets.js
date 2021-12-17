import axios from 'axios';

const bets = (id, bets) => {
    document.getElementById('moneyToBet').style.display = 'flex';
    document.getElementById('betTitle').textContent = (bets == 'Empate') ? 'Empate' : `Gana ${bets}`;
    document.getElementById('moneyToBet').setAttribute('value', id);
    document.getElementById('confirmButtonToBet').setAttribute('value', bets);
};

const betEvent = (user, bet, teamOne, teamTwo) => {
    const amount = document.getElementById('inputMoneyToBet').value;
    if (amount <= user.balance) {
        const confirmBet = window.confirm(`Esta Seguro Que Desea Apostar: ${amount}$ A: ${bet}`);
        if (confirmBet) {
            document.getElementById('moneyToBet').style.display = 'none';
            const idEvent = document.getElementById('moneyToBet').getAttribute('value');
            axios.post('http://localhost:9000/event/bet', {
                id_event: idEvent,
                id_user: user._id,
                amount,
                bet,
                game: `${teamOne} Vs ${teamTwo}`
            }).then(() => { window.location.reload(); }).catch(error => console.log(error));
        };
    } else {
        document.getElementById('doesNotHaveMoney').style.display = 'block';
        setTimeout(() => { document.getElementById('doesNotHaveMoney').style.display = 'none' }, 1000);
    };
};

function CardFromBets({ title, teamOne, teamBetOne, teamTwo, teamBetTwo, id, dataUser, betValidation }) { //En vez de escribir muchas veces esta etiqueta lo ponemos aqui solo para requerirlo y ponerlo una vez
    return (
        <div className="col-5" style={{ border: '2px solid #fff' }}>
            <div className="p-1">
                <p className="card-title text-light my-2">{title}</p>
                <div className="px-3 text-light">
                    <div>
                        <div className="d-flex justify-content-between text-light">
                            <h4>{teamOne}</h4>
                            <h4>{teamBetOne}</h4>
                        </div>
                        <div className="d-flex justify-content-between text-light">
                            <h4>{teamTwo}</h4>
                            <h4>{teamBetTwo}</h4>
                        </div>
                    </div>
                    <div>
                        {(betValidation) 
                            ?   <div className="my-2 d-flex justify-content-between">
                                    <button className="btn btn-outline-light btn-sm" value={teamOne} onClick={e => { bets(id, e.target.value) }}>{teamOne}</button>
                                    <button className="btn btn-outline-light btn-sm" value="Empate" onClick={e => { bets(id, e.target.value) }}>Empate</button>
                                    <button className="btn btn-outline-light btn-sm" value={teamTwo} onClick={e => { bets(id, e.target.value) }}>{teamTwo}</button>
                                </div>
                            :   <p className="px-1">Ya ha apostado en este juego</p>}
                    </div>
                </div>
            </div>
            <div id="moneyToBet">
                <div className="card p-2" style={{ width: '35%' }}>
                    <div className='p-4'>
                        <h4 id="betTitle" className='title'></h4>
                        <input id="inputMoneyToBet" type="number" className="form-control" placeholder="Digite La Cantidad A Apostar" />
                        <div className='p-3 row gap-2'>
                            <button id="confirmButtonToBet" className='col btn text-light' style={{ background: "#fb7b33" }} onClick={e => betEvent(dataUser, e.target.value,teamOne,teamTwo)}>Confirmar</button>
                            <button className='col btn btn-danger' onClick={() => document.getElementById('moneyToBet').style.display = 'none'}>Cancelar</button>
                        </div>
                        <p id="doesNotHaveMoney" className="my-1 text-center" style={{ display: 'none' }}>NO EXISTE CANTIDAD EN SU CUENTA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFromBets;