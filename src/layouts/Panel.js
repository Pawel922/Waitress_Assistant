import React from 'react';
import {Route} from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import Tables from '../components/Tables';
import OrderForm from '../components/OrderForm';
import Menu from '../layouts/Menu';
import Form from "../components/Form";
import Summary from '../layouts/Summary';


class Panel extends React.Component {
    state = {
        items : [{
            id:0,
            name: 'Zupa pomidorowa',
            price: 12,
        },
        {
            id:1,
            name: 'Schabowy wujka',
            price: 16,
        },
        {
            id:2,
            name: 'Filet z mintaja',
            price: 12.5,
        }],
        nextAvailableId : 3,
        idToEdit: null,
        idToDelete: null,
        idTable:null,
    }

    setIdToEdit = (id) => {
        this.setState({
            idToEdit: id
        })
    }

    setIdToDelete = (id) => {
        this.setState({
            idToDelete: id
        })
    }

    setIdTable = (id) => {
        this.setState({
            idTable: id
        })
    }



    deleteItem = (id) => {
        const tempArray = [...this.state.items];
        const [itemToDelete] = tempArray.filter(el => el.id === id);
        tempArray.splice(tempArray.indexOf(itemToDelete),1);
        this.setState({
            idToDelete: null,
            items: tempArray
        })
    }

    addItem = (item) => {
        const tempArray = [...this.state.items];
        const availableId = this.state.nextAvailableId;
        item.id = availableId;
        tempArray.push(item);
        this.setState({
            items: tempArray,
            nextAvailableId: availableId + 1
        })
    }

    editItem = (item) => {
        const tempArray = [...this.state.items];
        const itemToEdit = [...tempArray.filter(elem => elem.id === this.state.idToEdit)][0];
        const index = tempArray.indexOf(itemToEdit);
        tempArray[index] = {
            id: this.state.idToEdit,
            name: item.name,
            price: item.price,
        }
        this.setState({
            items: tempArray,
        })
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/" exact render={() => (
                    <Tables
                        setIdTable={this.setIdTable}
                    />)}
                />
                <Route path="/order" render={() => (
                    <OrderForm
                        id={this.state.idTable}
                        items={this.state.items}
                    />)}
                />
                <Route path="/menu" exact render={() => (
                    <Menu 
                        items={this.state.items}
                        setIdToEdit={this.setIdToEdit}
                        setIdToDelete={this.setIdToDelete}
                    />)}
                />
                <Route path="/summary" component={Summary}/>
                <Route path="/menu/delete" render={() => (
                    <DeleteConfirm 
                        id={this.state.idToDelete} 
                        item={[...[...this.state.items].filter(item => item.id === this.state.idToDelete)][0]}
                        delete={this.deleteItem}
                    />)}
                />
                <Route path="/menu/add" render={() => (
                    <Form
                        type="add"
                        add={this.addItem}
                    />
                )}/>
                <Route path="/menu/edit" render={() => (
                    <Form
                        type="edit"
                        item={[...[...this.state.items].filter(item => item.id === this.state.idToEdit)][0]}
                        edit={this.editItem}
                    />
                )}/>
            </React.Fragment>
        )
    }
}

export default Panel