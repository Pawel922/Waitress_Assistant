import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class AddForm extends React.Component {
    state = {
        name: "",
        price: "",
        valid: false,
        errors: {
            name: true,
            price: true,
        }
    }

    messages = {
        name_incorrect: "cannot be empty",
        price_incorrect: "cannot be empty",
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        })
    }

    validateForm = () => {
        //true means that property does not have errors
        //false means that property have errors
        let name = false;
        let price = false;
        let correct = false;

        if(this.state.name.length > 0) {
            name = true;
        }

        if(this.state.price.length > 0) {
            price = true;
        }

        if(name && price) {
            correct = true;
        }

        return {name, price, correct}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validation = this.validateForm();

        if(validation.correct) {
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
        } else {
            this.setState({
                errors: {
                    name: validation.name,
                    price: validation.price
                }
            })
        }
    
    }

    render() {
        if(this.state.valid) {
            return <Redirect to="/menu"/>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.value} 
                            onChange={this.handleInputChange}
                        />
                        {!this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
                    </label>
                    <br/>
                    <label>
                        Price:
                        <input 
                            type="number"
                            min="0.01" 
                            step="0.01" 
                            name="price" 
                            value={this.state.price} 
                            onChange={this.handleInputChange}
                        />
                        {!this.state.errors.price && <span>{this.messages.price_incorrect}</span>}
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