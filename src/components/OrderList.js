import React from 'react';
import {Link} from 'react-router-dom';

const OrderList = (props) => {

    const createOrderList = () => {
        return props.items
            .filter(item => item.idTable === props.idTable)
            .map((item,index) => <p key={index}><span>{item.name}</span><span>{item.quantity}</span></p>)
    }

    return (
        <div className="orderList">
            <h1>Order for table {props.idTable}</h1>
            {createOrderList()}
            <Link to="/"><button>Back</button></Link>
        </div>
    )

}

export default OrderList