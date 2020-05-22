import React, { Component } from 'react';
import { Route } from 'react-router'
import Home from './Pages/Landing'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import TOC from './Pages/Terms/TOC'
import PrivacyPolicy from './Pages/Terms/PrivacyPolicy'

class Front extends Component {

    render() {
        require('./assets/css/style.css')

        return (
            <>
                <Header />
                <Route
                    exact
                    path={['/', '/home']}
                    component={Home}
                />
                <Route
                    exact
                    path={['/toc']}
                    component={TOC}
                />
                <Route
                    exact
                    path={['/privacyPolicy']}
                    component={PrivacyPolicy}
                />
                <Footer />
            </>
        );
    }
}

export default Front;