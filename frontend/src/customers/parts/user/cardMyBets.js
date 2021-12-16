export function CardMyBets({ game, bets }) {
    return (
        <div className="p-2 my-2" style={{ border: '1px solid #fff' }}>
            <h1 style={{ fontSize: '18px' }}>{game}</h1>
            <h1 style={{ fontSize: '18px' }}>{bets}</h1>
            <button className="btn btn-sm text-light" style={{ background: '#fb7b33' }}>Cancelar</button>
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