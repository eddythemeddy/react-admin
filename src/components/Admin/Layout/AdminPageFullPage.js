import React, { Component } from 'react';
import { Route } from 'react-router'
import Login from '../Pages/Login/index'

class AdminPageFullPage extends Component {
    state = {  }
    render() {
        // require('bootstrap/scss/bootstrap.scss');
        // require('../../../pages/scss/pages.scss');
        return (
            <>
                <Route 
                    exact
                    path='/login' 
                    component={Login}
                />
            </>
        );
    }
}
 
export default AdminPageFullPage;