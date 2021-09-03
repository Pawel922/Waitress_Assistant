import React from 'react';

const Form = ({match}) => {
    return (
        <div>Edit item {match.params.id}</div>
    );
}

export default Form