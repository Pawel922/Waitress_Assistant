import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Table.css';

const Table = (props) => {

    return (
        <div className="table">
            <h1>{`Table ${props.id + 1}`}</h1>
            <div/>
            <Link to="/order"><button onClick={() => props.setIdTable(props.id)}>Take order</button></Link>
            <button>Show order</button>
            <button>Finish order</button>
        </div>
    )
}

export default Table