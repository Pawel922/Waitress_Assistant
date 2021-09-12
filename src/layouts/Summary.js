import React from 'react';

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
            list.map((elem,index) => (
                <p key={index}><span>{elem.name} </span><span>{elem.totalQuantity} </span><span>{elem.income}</span></p>
            ))
        )
    }

    return (
        <div>{showIncomes()}</div>
    )
}

export default Summary