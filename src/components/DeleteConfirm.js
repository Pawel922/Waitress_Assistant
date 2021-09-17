import React from 'react';
import {Link} from 'react-router-dom';

const DeleteConfirm = (props) => {
    return (
        <div>
            <div>Are you sure want to delete <strong>{props.item.name} </strong>?</div>
            <Link to="/menu"><button>No</button></Link>
            <Link to="/menu"><button onClick={() => props.delete(props.id)}>Yes</button></Link>
        </div>
    );
}

export default DeleteConfirm