import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li>
            <span>{props.name}</span>
            <span>{`${props.price} zł`}</span>
            <Link to={`/edit/${props.id}`}><button>Edit</button></Link>
            <Link to={`/menu/delete`}><button onClick={() => props.setIdToDelete(props.id)}>Delete</button></Link>
        </li>
    );
}

export default ListItem