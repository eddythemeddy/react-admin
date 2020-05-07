import React from 'react';
import { render } from 'node-sass';

const Input = () => {

    return(
        <input 
            {...input}
            type="text"
            placeholder="User Name"
            className={`form-control ${meta.error && meta.touched ? 'error' : ''}`}
        />
        {meta.error && meta.touched ? (
            <label className="error">{meta.error.value}</label>
        ) : null}
    )
}

export default Input