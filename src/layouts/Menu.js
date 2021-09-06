import React from 'react';
import {Link } from 'react-router-dom';
import ListItem from '../components/ListItem';
import '../styles/Menu.css';

const Menu = (props) => {

    const listItems = props.items.map(item => 
        <ListItem 
            key={item.id}
            id={item.id} 
            name={item.name} 
            price={item.price}
            setIdToDelete={props.setIdToDelete}
        />)

    return (
        
        <React.Fragment>
            <ul className="listItems">
                {listItems}
            </ul>
            <Link to="/menu/add"><button>Add</button></Link>
        </React.Fragment>

    );
}

export default Menu