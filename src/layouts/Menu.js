import React from 'react';
import {Link, Prompt} from 'react-router-dom';
import ListItem from '../components/ListItem';
import '../styles/Menu.css';

const Menu = (props) => {

    const listItems = props.items.map(item => 
        <ListItem 
            key={item.id}
            id={item.id} 
            name={item.name} 
            price={item.price}
            setIdToEdit={props.setIdToEdit}
            setIdToDelete={props.setIdToDelete}
        />
    )

    return (
        
        <div className="menu">
            <ul className="listItems">
                {listItems}
            </ul>
            {listItems.length === 0 
                ? <p>You do not have any menu's items. Taking order is not possible.</p> 
                : null}
            <Link to="/menu/add"><button>Add</button></Link>
            <Prompt
                when={listItems.length === 0}
                message={() => props.setOrderPossible()}
            />
        </div>

    );
}

export default Menu