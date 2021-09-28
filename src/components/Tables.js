import React from 'react';
import Table from '../components/Table';
import '../styles/Tables.css';

const Tables = (props) => {

    const numOfTables = 10; 

    const activeOrdersExists = (orders,id) => {
        return orders.findIndex(order => order.idTable === id) > -1 ? true : false;
    }

    const createTableList = () => {
        const tables = [];
        for(let i = 1; i <= numOfTables; i++) {
            tables.push(
            <Table 
                key={i} 
                id={i} 
                setIdTable={props.setIdTable} 
                ordersExists={activeOrdersExists(props.activeOrders, i)}
                completeOrders={props.completeOrders}
                orderPossible={props.orderPossible}
            />)
        }
        return tables;
    }

    return (
        <div className="tables">
            {createTableList()}
        </div>
    );
}

export default Tables