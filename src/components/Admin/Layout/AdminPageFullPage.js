import React from 'react';
import { Route } from 'react-router'
import Login from '../Pages/Login/index'

const AdminPageFullPage = () => {
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
 
export default AdminPageFullPage;