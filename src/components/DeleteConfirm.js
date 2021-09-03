import React from 'react';
import {Link} from 'react-router-dom';

const DeleteConfirm = ({match}) => {
  
    return (
        <React.Fragment>
            <div>Are you sure want to delete {match.params.name}?</div>
            <Link to="/"><button>No</button></Link>
            <button>Yes</button>
        </React.Fragment>
        
    );
}

export default DeleteConfirm