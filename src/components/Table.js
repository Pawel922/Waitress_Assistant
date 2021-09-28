import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Table.css';

const Table = (props) => {

    return (
        <div className={`table ${!props.ordersExists ? 'free': 'taken'}`}>
            <h1>{`Table ${props.id}`}</h1>
            <div className="picture"/>
            <Link to="/order">
                <button 
                    onClick={() => props.setIdTable(props.id)} 
                    disabled={props.ordersExists || !props.orderPossible}
                >
                    Take order
                </button>
            </Link>
            <Link to="/order/list">
                <button disabled={!props.ordersExists} onClick={() => props.setIdTable(props.id)}>Show order</button>
            </Link>
            <Link to="/">
                <button disabled={!props.ordersExists} onClick={() => props.completeOrders(props.id)}>Finish order</button>
            </Link>
        </div>
    )
}

export default Table