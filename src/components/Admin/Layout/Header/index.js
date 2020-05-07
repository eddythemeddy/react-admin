import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { toggleMenu } from '../../../../store/actions/generalActions'
import logo from '../../../../assets/img/logo.png'
import profileImg from '../../../../assets/img/profiles/avatar.jpg'

class Header extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false,
            showDropdown: false
        }
        this.showMenuMobile = this.showMenuMobile.bind(this)
        this.toggleDD = this.toggleDD.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    toggleDD() {
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    }

    showMenuMobile() {
        let menuVisible = !this.state.menuVisible;
        this.setState({ menuVisible })
        this.props.toggleMenu(menuVisible);
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }
    
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);
    
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                showDropdown: false
            });
        }
    }

    render() {
        return (
            <>
                <a href="#" className="btn-link toggle-sidebar d-lg-none pg-icon btn-icon-link" 
                    data-toggle="sidebar" 
                    onClick={this.showMenuMobile}>menu</a>
                <div>
                    <div className="brand inline">
                        <img 
                            alt="logo" 
                            data-src={logo} 
                            data-src-retina="assets/img/logo_2x.png" 
                            height="22" 
                            src={logo} 
                            width="78"/>
                    </div>
                    <a className="btn btn-link text-primary m-l-20 d-none d-lg-inline-flex d-xl-inline-flex" href="#">Add New Item</a> <a className="search-link d-none d-lg-inline-block d-xl-inline-block" data-toggle="search" href="#"><i className="pg-icon">search</i>Type anywhere to <span className="bold">search</span></a>
                </div>
                <div className="d-flex align-items-center">
                    <ul className="d-lg-inline-block d-none notification-list no-margin d-lg-inline-block b-grey b-l b-r no-style p-l-20 p-r-20">
                        <li className="p-r-10 inline">
                            <div className="dropdown">
                                <a className="header-icon btn-icon-link" data-toggle="dropdown" onClick={() =>{ alert()}} id="notification-center"><i className="pg-icon">world</i> <span className="bubble"></span></a>
                                <div aria-labelledby="notification-center" className="dropdown-menu notification-toggle" role="menu">
                                    
                                </div>
                            </div>
                        </li>
                        <li className="p-r-10 inline">
                            <a className="header-icon btn-icon-link" href="#">
                                <i className="pg-icon">link_alt</i>
                            </a>
                        </li>
                        <li className="p-r-10 inline">
                            <a className="header-icon btn-icon-link" href="#">
                                <i className="pg-icon">grid_alt</i>
                            </a>
                        </li>
                    </ul>
                    <div className="pull-left p-r-10 fs-14 d-lg-inline-block d-none m-l-20">
                        <span className="semi-bold">Anubir</span>
                        <span className="text-color">Singh</span>
                    </div>
                    <div className="dropdown pull-right d-lg-block d-none">
                        <button onClick={this.toggleDD} className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="profile dropdown">
                            <span className="thumbnail-wrapper d32 circular inline">
                                <img src={profileImg} alt="" data-src={profileImg} width="32" height="32"/>
                            </span>
                        </button>
                        <div className={`dropdown-menu dropdown-menu-right profile-dropdown ${this.state.showDropdown ? 'block' : ''}`} role="menu">
                        <a className="dropdown-item">
                            <span>Signed in as <br/>
                                <b>David Aunsberg</b>
                            </span>
                        </a>
                        <div className="dropdown-divider"></div>
                        {/* <a className="dropdown-item">Your Profile</a>
                        <a className="dropdown-item">Your Activity</a>
                        <a className="dropdown-item">Your Archive</a>
                        <div className="dropdown-divider"></div> */}
                        <a className="dropdown-item">Features</a>
                        <a className="dropdown-item">Help</a>
                        <a className="dropdown-item">Settings</a>
                        <a href="/" className="dropdown-item">Logout</a>
                        {/* <div className="dropdown-divider"></div>
                        <span className="dropdown-item fs-12 hint-text">Last edited by David<br/>on Friday at 5:27PM</span> */}
                        </div>
                    </div>
                    <a className="header-icon btn-icon-link m-l-10 sm-no-margin d-inline-block" 
                        data-toggle="quickview"
                        data-toggle-element="#quickview"
                        href="#">
                        <i className="pg-icon">menu_add</i>
                    </a>
                </div>
            </>
        );
    }
}

Header.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
    generals: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   generals: state.generals
});

export default connect(mapStateToProps, { toggleMenu })(Header);