import React from 'react';
import {Link} from 'react-router-dom';

const Summary = (props) => {

    const prepareData = () => {
        const idList = [];
        const aggregateList = [];
        const resultList = [];
        props.items.forEach(item => {
            if(!idList.includes(item.id)) {
                idList.push(item.id);
            }
        });
        
       idList.forEach(id => {
           aggregateList.push(props.items.filter(item => item.id === id));
       })

       aggregateList.forEach(elem => {
           let totalQuantity = 0;
           if(elem.length > 1) {
               elem.forEach(el => {
                   totalQuantity += el.quantity
               })
           } else {
               totalQuantity = elem[0].quantity;
           }
           resultList.push({
               name: elem[0].name,
               totalQuantity: totalQuantity,
               income: elem[0].price * totalQuantity,
           })
       })
       return resultList;
    }

    const showIncomes = () => {
        const list = prepareData();
        return (
            <div>
            <h1>Summary</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Income [$]</th>
                </tr>
                {list.map(elem => (
                    <tr>
                        <td>{elem.name} </td>
                        <td>{elem.totalQuantity}</td>
                        <td>{elem.income}</td>
                    </tr>))}
            </table>
            <Link to="/"><button>Back</button></Link>
        </div>   
        )
    }

    return (
        <div>{showIncomes()}</div>
    )
}

export default Summary