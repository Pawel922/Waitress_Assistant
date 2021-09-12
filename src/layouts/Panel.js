import React from 'react';
import {Route} from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import Tables from '../components/Tables';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';
import Menu from '../layouts/Menu';
import Form from "../components/Form";
import Summary from '../layouts/Summary';


class Panel extends React.Component {
    state = {
        items : [{
            id:0,
            name: 'Tomato soup',
            price: 12,
        },
        {
            id:1,
            name: 'Pork schnitzel',
            price: 16,
        },
        {
            id:2,
            name: 'Fish and chips',
            price: 12.5,
        }],
        activeOrders: [],
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
        const curentMenu = [...this.state.items];
        const itemToEdit = [...curentMenu.filter(elem => elem.id === this.state.idToEdit)][0];
        const index = curentMenu.indexOf(itemToEdit);
        curentMenu[index] = {
            id: this.state.idToEdit,
            name: item.name,
            price: item.price,
        }

        const currentOrders = [...this.state.activeOrders];
        currentOrders.forEach((elem, index, array) => {
            if(elem.id === this.state.idToEdit) {
                return array[index] = {
                    id: this.state.idToEdit,
                    name: item.name,
                    price: item.price,
                    quantity: elem.quantity,
                    idTable: elem.idTable,
                }
            }
        })
        this.setState({
            items: curentMenu,
            activeOrders: currentOrders,
        })
    }

    addOrders = (orders) => {
        const currentOrders = [...this.state.activeOrders];
        const newOrders = [...currentOrders, ...orders];
        this.setState({
            activeOrders: newOrders
        })
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/" exact render={() => (
                    <Tables
                        activeOrders={this.state.activeOrders}
                        setIdTable={this.setIdTable}
                    />)}
                />
                <Route path="/order" exact render={() => (
                    <OrderForm
                        idTable={this.state.idTable}
                        items={this.state.items}
                        addOrders={this.addOrders}
                    />)}
                />
                <Route path="/order/list" render={() => (
                    <OrderList
                        idTable={this.state.idTable}
                        items={this.state.activeOrders}
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