import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Table.css';

const Table = (props) => {

    return (
        <div className="table">
            <h1>{`Table ${props.id + 1}`}</h1>
            <div/>
            <Link to="/order"><button onClick={() => props.setIdTable(props.id)}>Take order</button></Link>
            <Link to="/order/list"><button onClick={() => props.setIdTable(props.id)}>Show order</button></Link>
            <button>Finish order</button>
        </div>
    )
}

export default Table