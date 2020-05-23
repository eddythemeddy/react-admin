import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkLoginStatus } from '../store/actions/userActions'
import PrivateRoute from './PrivateRoute'
import Front from './Front'
import AdminPageSidebar from './Admin/Layout/AdminPageSidebar';
import AdminPageFullPage from './Admin/Layout/AdminPageFullPage';

class Main extends Component {

    componentDidMount() {
        const { checkLoginStatus } = this.props
        checkLoginStatus()
    }

    render() {
        const { user } = this.props
        const isLogged = user === null ? true : false

        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route 
                            exact
                            path='/'
                            component={Front}
                        />
                        <Route
                            exact
                            path='/home'
                            component={Front}
                        />
                        <Route
                            exact
                            path='/terms-and-conditions'
                            component={Front}
                        />
                        <Route
                            exact
                            path='/privacy-policy'
                            component={Front}
                        />
                        <Route
                            exact
                            path='/login'
                            component={AdminPageFullPage}
                        />
                        <PrivateRoute
                            exact
                            path='/clients'
                            isAllowed={isLogged}
                            component={AdminPageSidebar}
                        />
                        <PrivateRoute
                            exact
                            path='/clients/:id'
                            isAllowed={isLogged}
                            component={AdminPageSidebar}
                        />
                        <PrivateRoute  
                            exact
                            path='/feed'
                            isAllowed={isLogged}
                            component={AdminPageSidebar}
                        />
                        <PrivateRoute  
                            exact
                            path='/sales'
                            isAllowed={isLogged} 
                            component={AdminPageSidebar}
                        />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

Main.propTypes = {
    checkLoginStatus: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


const mapDispatchToProps = dispatch => ({
    checkLoginStatus: () => dispatch(checkLoginStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)