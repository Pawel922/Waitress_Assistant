import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '../components/ListItem';

class Menu extends React.Component {
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
        }]
    }
    
    render() {
        const listItems = this.state.items.map(item => 
            <ListItem 
                id={item.id} 
                name={item.name} 
                price={item.price}
            />)
            
        return (
            <React.Fragment>
                <ul>
                    {listItems}
                </ul>
                <Link to="/"><button type="button">Add</button></Link>
            </React.Fragment>

        );
    }
}

export default Menu