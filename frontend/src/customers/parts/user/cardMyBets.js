import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cancelBet = (id_event,id_user,amount, setEventBet,navigate,setDataUser) => {
    const confirmCancel = window.confirm('Estas Seguro Que Quieres Cancelar La Apuesta');
    if (confirmCancel) {
        axios.post('http://localhost:3001/cancel/event', { id_event, id_user, amount })
            .then(() => { 
                setEventBet([]);
                axios.post('http://localhost:3001/user/isAuthenticated').then(res => { setDataUser(res.data.user) }).catch(error => console.log(error));
            }).catch(error => console.log(error));
    };
};

export function CardMyBets({ game, bets, idEvent, idUser, amount, setEventBet, setDataUser }) {
    const navigate = useNavigate();
    return (
        <div className="p-2 my-2" style={{ border: '1px solid #fff' }}>
            <h1 style={{ fontSize: '18px' }}>{game}</h1>
            <h1 style={{ fontSize: '18px' }}>{bets}</h1>
            <button className="btn btn-sm text-light" style={{ background: '#fb7b33' }} onClick={() => { cancelBet(idEvent, idUser, amount, setEventBet,navigate,setDataUser); }}>Cancelar</button>
        </div>
    );
};

export function HistorialMyBets({ game, result }) {
    return (
        <div className="p-2 my-2" style={{ border: '1px solid #fff' }}>
            <h1 style={{ fontSize: '18px' }}>{game}</h1>
            <h1 style={{ fontSize: '18px' }}>{result}</h1>
        </div>
    );
};