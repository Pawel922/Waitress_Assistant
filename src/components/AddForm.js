import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class AddForm extends React.Component {
    state ={
        name: "",
        price: "",
        valid: false,
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, price} = this.state;
        this.newItem = {
            id: null,
            name: name,
            price: price
        }
        this.props.add(this.newItem)
        this.setState({
            valid: true
        })
    }

    render() {
        if(this.state.valid) {
            return <Redirect to="/menu"/>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Price:
                        <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <Link to="/menu"><button>Back</button></Link>
                    <button type="submit">Add</button>
                </form>
            )
        }
    }
}

export default AddForm