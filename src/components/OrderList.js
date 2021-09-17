import React from 'react';
import {Link} from 'react-router-dom';

const OrderList = (props) => {

    const createOrderList = () => {
        return props.items
            .filter(item => item.idTable === props.idTable)
            .map((item,index) => <tr key={index}><td>{item.name}</td><td>{item.quantity}</td></tr>)
    }

    return (
        <div>
            <h1>Order for Table {props.idTable}</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                 </tr>
                {createOrderList()}
            </table>
            <Link to="/"><button>Back</button></Link>
        </div>
    )

}

export default OrderList