import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class OrderForm extends React.Component {
    state ={
        orders: [],
        selectedDish: this.props.items[0],
        typedQuantity: 1,
        orderFinished: false,
    }

    showMenu = () => {
        return (
            <select onChange={this.handleSelectChange}>
                {this.props.items.map(item => (<option key={item.id} value={item.id}>{item.name}</option>))}
            </select>
        ) 
    }

    showOrderList = () => {
        return (
            <div className="orderList">
                <h1>Order:</h1>
                {this.state.orders.map((order, index) => <p key={index}><span>{order.name}</span><span>{order.quantity}</span></p>)}
            </div>
        )
    }

    handleSelectChange = (event) => {
        const id = parseInt(event.target.value);
        this.setState({
            selectedDish: this.props.items.filter(item => item.id === id)[0],
        })
    }

    handleInputChange = (event) => {
        const quantity = parseInt(event.target.value);
        this.setState({
            typedQuantity: quantity,
        })
    }

    addDishToOrder = (event) => {
        event.preventDefault();
        const dishToAdd = {
            id: this.state.selectedDish.id,
            name: this.state.selectedDish.name,
            quantity: this.state.typedQuantity,
            idTable: this.props.idTable,
        }
        const tempArray = this.state.orders;
        const index = tempArray.findIndex((elem) => elem.id === dishToAdd.id);
        if(index !== -1) {
            tempArray[index].quantity += dishToAdd.quantity;
        } else {
            tempArray.push(dishToAdd);
        }
        this.setState({
            orders: tempArray,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addOrders(this.state.orders);
        this.setState({
            orderFinished: true
        })
    }

    render() {
        if(this.state.orderFinished) {
            return <Redirect to="/"/>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Dish:
                        {this.showMenu()}
                    </label>
                    <label>
                        Quantity: 
                        <input type="number" value={`${this.state.typedQuantity}`} min="1" step="1" onChange={this.handleInputChange}/>
                    </label>
                    <button onClick={this.addDishToOrder}>Add</button>
                    <br/>
                    {this.state.orders.length === 0 ? null : this.showOrderList()}
                    <Link to="/"><button>Back</button></Link>
                    {this.state.orders.length === 0 ? null : <button type="submit">Done</button>}
                </form>
            )
        }
    }
}

export default OrderForm