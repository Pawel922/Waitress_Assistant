import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../styles/OrderForm.css';

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
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        {this.state.orders.map((order, index) => 
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td><button onClick={(event) => this.cancelOrder(event, index)}>Cancel</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    cancelOrder = (event, index) => {
        event.preventDefault();
        const tempArray = [...this.state.orders];
        tempArray.splice(index, 1);
        this.setState({
            orders: tempArray
        })

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
            price: this.state.selectedDish.price,
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
                <div className="orderForm">
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
                        <Link to="/"><button>Back</button></Link>
                        {this.state.orders.length === 0 ? null : <button type="submit">Done</button>}
                    </form>
                    <h1>Order:</h1>
                    {this.state.orders.length === 0 ? null : this.showOrderList()}
                </div>
            )
        }
    }
}

export default OrderForm