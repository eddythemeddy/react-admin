import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import Home from './Pages/Landing'
import TOC from './Pages/Terms'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Header from './Header';
import Footer from './Footer';
import Error from './Pages/404';

class Front extends Component {

    render() {
        require('./assets/css/style.css')
        return (
            <>
                <Header/>
                    <Switch>
                        <Route 
                            exact
                            path={['/','/home']}
                            component={Home}
                        />
                        <Route 
                            exact
                            path={['/privacy-policy']}
                            component={PrivacyPolicy}
                        />
                        <Route 
                            exact
                            path={['/terms-and-conditions']}
                            component={TOC}
                        />
                        <Route
                            path="/*"
                            component={Error}
                        />
                    </Switch>
                <Footer/>
            </>
        );
    }
}
 
export default Front;