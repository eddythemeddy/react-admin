import React, { Component } from 'react';
import { Route } from 'react-router'
import Home from './Pages/Landing'

class Front extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        require('./assets/css/style.css')
        return (
            <>
                <Route 
                    exact
                    path={['/','/home']}
                    component={Home}
                />
            </>
        );
    }
}
 
export default Front;