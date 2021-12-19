const toggle = (e,options,option) => {
    const element = e.target;
    element.classList.toggle('reportButtonActive');
    if (options[option]) { options[option] = false }
    else { options[option] = true }
};

export function SmallCard({ name, options, option }) {
    return (
        <div className="d-flex my-2">
            <button className="reportButton mx-2" onClick={e => toggle(e,options,option)}></button>
            <label className="form-label text-light mx-2">{name}</label>
        </div>
    );
};

export function CardByDate({ name, options, option }) {
    return (
        <div className="d-flex my-2">
            <button className="reportButton mx-2" onClick={e => toggle(e,options, option)}></button>
            <label className="form-label text-light mx-2">{name}</label>
            <div className="d-flex">
                <div className="d-flex mx-2">
                    <label className="text-light mx-2">Desde: </label>
                    <input type="date" className="form-control" style={{ height: '30px' }} />
                </div>
                <div className="d-flex mx-2">
                    <label className="text-light mx-2">Hasta: </label>
                    <input type="date" className="form-control" style={{ height: '30px' }} />
                </div>
            </div>
        </div>
    )
};

export function CardByEvent({ name, options, option }) {
    return (
        <div className="d-flex my-2">
            <button className="reportButton mx-2" onClick={e => toggle(e,options, option)}></button>
            <label className="form-label text-light mx-2">{name}</label>
            <div className="d-flex mx-2">
                <label className="text-light mx-2">EVENTO: </label>
                <input type="text" className="form-control" style={{ height: '30px' }} />
            </div>
        </div>
    )
};