import React from 'react';
import {Route} from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import Tables from '../components/Tables';
import Menu from '../layouts/Menu';
import Summary from '../layouts/Summary';


class Panel extends React.Component {
    state = {
        items : [{
            id:0,
            name: 'Zupa pomidorowa',
            price: 12,
        },
        {
            id: 1,
            name: 'Schabowy wujka',
            price: 16,
        },
        {
            id:2,
            name: 'Filet z mintaja',
            price: 12.5,
        }],
        idToDelete: null
    }

    setIdToDelete = (id) => {
        this.setState({
            idToDelete: id
        })
    }

    deleteItem = (id) => {
        const tempArray = [...this.state.items];
        const [itemToDelete] = tempArray.filter(el => el.id === id)
        tempArray.splice(tempArray.indexOf(itemToDelete),1);
        this.setState({
            idToDelete: null,
            items: tempArray
        })
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/" exact component={Tables}/>
                <Route path="/menu" exact render={() => (
                    <Menu 
                        items={this.state.items} 
                        setIdToDelete={this.setIdToDelete}
                    />)}
                />
                <Route path="/summary" component={Summary}/>
                <Route path="/menu/delete" render={() => (
                    <DeleteConfirm 
                        id={this.state.idToDelete} 
                        name={this.state.items[this.state.idToDelete].name}
                        delete={this.deleteItem}/>)}
                    />
            </React.Fragment>
        )
    }
}

export default Panel