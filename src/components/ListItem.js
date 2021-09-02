import React from 'react';

const ListItem = (props) => {
    return (
        <li key={props.id}>
            <span>{props.name}</span>
            <span>{`${props.price} zł`}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

export default ListItem