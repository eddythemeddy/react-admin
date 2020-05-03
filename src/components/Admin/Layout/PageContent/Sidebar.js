import React, { Component } from 'react';
import { Route } from 'react-router'
import Feed from '../../Pages/Feed'
import Sales from '../../Pages/Sales/Sales'
import Sale from '../../Pages/Sales/Sale'
import Clients from '../../Pages/Clients/Clients'
import Client from '../../Pages/Clients/Client'

class PageContentSidebar extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }
    
    render() { 
        return (
            <>
                <Route 
                    exact
                    path='/feed/' 
                    component={Feed}
                />
                <Route 
                    exact
                    path='/clients/' 
                    component={Clients}
                />
                <Route 
                    exact
                    path='/clients/:id' 
                    component={Client}
                />
                <Route 
                    exact
                    path='/sales/' 
                    component={Sales}
                />
                <Route 
                    exact
                    path='/sales/:id' 
                    component={Sale}
                />
            </>
        );
    }
}
 
export default PageContentSidebar;