import React from 'react';

class OrderForm extends React.Component {
    state ={}

    showMenu = () => {
        return this.props.items.map(item => 
            <option value="item.id">{item.name}</option>
        )
    }

    render() {
        
        return (
            <form>
                <label>
                    Dish:
                    <select>
                        {this.showMenu()}
                    </select>
                </label>
                <label>
                    Quantity: 
                    <input type="number" min="1" step="1"/>
                </label>
                <button>Add</button>
                <br/>
                <button>Back</button>
                <button>Done</button>

            </form>
        )
    }

}

export default OrderForm