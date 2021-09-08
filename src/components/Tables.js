import React from 'react';
import Table from '../components/Table';
import '../styles/Tables.css';

const Tables = () => {

    const numOfTables = 8;
    const createTableList = () => {
        const tables = [];
        for(let i = 0; i < numOfTables; i++) {
            tables.push(<Table key={i} id={i}/>)
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