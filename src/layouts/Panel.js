import React from 'react';
import {Route} from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import Tables from '../components/Tables';
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

    editItem = () => {
        console.log("EDIT")
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/" exact component={Tables}/>
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