import React, { Component } from 'react';
import logo from '../../../../assets/img/logo.png'


class Header extends Component {
    state = {}

    render() {
        return (
            // <main>
            <nav className="navbar navbar-expand-lg fixed-top custom-menu custom-menu__light">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="Image" className="logo-md" width="120" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu-icon__circle">
                        </span>
                        <span className="menu-icon">
                            <span className="menu-icon__bar"></span>
                            <span className="menu-icon__bar"></span>
                            <span className="menu-icon__bar"></span>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#overview">Overview
            <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonials">testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faqs">FAQs</a>
                            </li>
                        </ul>
                        <div className="custom-menu__right">
                            <a href="login.html" className="btn btn-default">Login</a>
                            <a href="register.html" className="btn btn-primary btn-pills">Start 14 days free</a>
                            <p className="assistive-text d-md-none">14 days free - No credit card required</p>
                        </div>
                    </div>
                </div>
            </nav>
            // </main>
        );
    }
}

export default Header;