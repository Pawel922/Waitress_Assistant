import React from 'react';
import {Route} from 'react-router-dom';
import Tables from '../components/Tables';
import Menu from '../layouts/Menu';
import Summary from '../layouts/Summary';


const Panel = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Tables}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/summary" component={Summary}/>
        </React.Fragment>
    )
}

export default Panel