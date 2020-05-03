import React, { Component } from 'react';
import { Switch, BrowserRouter, withRouter } from 'react-router-dom'
import { Route } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions'
import Front from './Front'
import Error from './Front/Error'
import AdminPageSidebar from './Admin/Layout/AdminPageSidebar';
import AdminPageFullPage from './Admin/Layout/AdminPageFullPage';

class Main extends Component {

    render() {
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
                            path='/login' 
                            component={AdminPageFullPage}
                        />
                        <Route 
                            exact
                            path='/clients' 
                            component={AdminPageSidebar}
                        />
                        <Route 
                            exact
                            path='/clients/:id' 
                            component={AdminPageSidebar}
                        />
                        <Route 
                            path='/feed' 
                            component={AdminPageSidebar}
                        />
                        <Route 
                            path='/sales' 
                            component={AdminPageSidebar}
                        />
                        <Route
                            component={Error}
                            pageComponent='Error'
                        />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

Main.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   posts: state.posts.items,
   newPost: state.posts.item
});

export default withRouter(connect(mapStateToProps, { fetchPosts })(Main))