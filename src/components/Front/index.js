import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router'
import Home from './Pages/Landing'
import TOC from './Pages/Terms'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Header from './Header';
import Footer from './Footer';
import Error from './Pages/404';
import 'bootstrap/scss/bootstrap.scss';
import './../../pages/scss/pages.scss';

const Front = () => {

    useEffect(() => {
        document.body.className = 'home-page';
        return () => { document.body.className = ''; }
    });
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
                        component={Error}
                    />
                </Switch>
            <Footer/>
        </>
    );
}
 
export default Front;