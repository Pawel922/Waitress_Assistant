import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li key={props.id}>
            <span>{props.name}</span>
            <span>{`${props.price} zł`}</span>
            <Link to={`/edit/${props.id}`}><button type="button">Edit</button></Link>
            <Link to={`/delete/${props.id}/${props.name}`}><button type="button">Delete</button></Link>
        </li>
    );
}

export default ListItem