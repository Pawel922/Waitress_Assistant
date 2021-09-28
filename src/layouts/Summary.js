import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Summary.css';

class Summary extends React.Component {

    state={
        sortBy: "quantity"
    };

    handleClick = () => {
        const prevState = this.state.sortBy;
        this.setState({
            sortBy: prevState === "quantity" ? "income" : "quantity"
        })
    }

    prepareData = (type) => {
        const idList = [];
        const aggregateList = [];
        let resultList = [];
        this.props.items.forEach(item => {
            if(!idList.includes(item.id)) {
                idList.push(item.id);
            }
        });
        
       idList.forEach(id => {
           aggregateList.push(this.props.items.filter(item => item.id === id));
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

       if(type === "quantity") {
           resultList = resultList.sort((a,b) => {return (b.totalQuantity - a.totalQuantity)})
       } else if (type === "income") {
           resultList = resultList.sort((a,b) => {return (b.income - a.income)})
       }
       return resultList;
    }

    showIncomes = () => {
        const list = this.prepareData(this.state.sortBy);
        return (
            <div>
                <h1>Summary</h1>
                <div className="selection">
                    <p>sort by:</p> 
                    <button onClick={this.handleClick} disabled={this.state.sortBy === "quantity"}>quantity</button>
                    <button onClick={this.handleClick} disabled={this.state.sortBy === "income"}>income</button>
                </div>
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
                        </tr>
                    ))}
                </table>
                <Link to="/"><button>Back</button></Link>
            </div>   
        )
    }

    render() {
        return (
            <div>{this.showIncomes()}</div>
        )
    }
}

export default Summary