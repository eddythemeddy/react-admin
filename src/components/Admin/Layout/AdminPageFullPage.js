import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Login from '../Pages/Login/index'

class AdminPageFullPage extends Component {
    state = {  }
    render() {
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