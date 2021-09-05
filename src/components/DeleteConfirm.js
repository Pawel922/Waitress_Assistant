import React from 'react';
import {Link} from 'react-router-dom';

const DeleteConfirm = (props) => {
    return (
        <React.Fragment>
            <div>Are you sure want to delete {props.name} ?</div>
            <Link to="/menu"><button>No</button></Link>
            <Link to="/menu"><button onClick={() => props.delete(props.id)}>Yes</button></Link>
        </React.Fragment>
    );
}

export default DeleteConfirm