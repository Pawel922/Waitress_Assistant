import React from 'react';
import '../styles/Table.css';

const Table = (props) => {
    return (
        <div className="table">
            <h1>{`Table ${props.id + 1}`}</h1>
            <div/>
            <button>Take order</button>
            <button>Finish order</button>
        </div>
    )
}

export default Table