import React from 'react';
import {Route} from 'react-router-dom';
import Tables from '../components/Tables';
import Form from '../components/Form';
import DeleteConfirm from '../components/DeleteConfirm';

const Panel = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Tables}/>
            <Route path="/edit/:id" component={Form}/>
            <Route path="/delete/:id/:name" component={DeleteConfirm}/>
        </React.Fragment>
    )
}

export default Panel