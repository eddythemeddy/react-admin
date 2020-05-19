import React, { Component } from 'react';
import logo from '../../assets/img/demo/logo.svg'
import feature_image_4 from '../../assets/img/demo/featured-images/feature-image-4.png';

class Header extends Component {
    state = {}

    render() {
        return (
            <main>
                <nav class="navbar navbar-expand-lg fixed-top custom-menu custom-menu__light">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <img src={logo} alt="Image" class="logo-md" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="menu-icon__circle">
                            </span>
                            <span class="menu-icon">
                                <span class="menu-icon__bar"></span>
                                <span class="menu-icon__bar"></span>
                                <span class="menu-icon__bar"></span>
                            </span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-lg-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#overview">Overview
            <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pricing">pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#testimonials">testimonials</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#faqs">FAQs</a>
                                </li>
                            </ul>
                            <div class="custom-menu__right">
                                <a href="login.html" class="btn btn-default">Login</a>
                                <a href="register.html" class="btn btn-primary btn-pills">Start 14 days free</a>
                                <p class="assistive-text d-md-none">14 days free - No credit card required</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </main>
        );
    }
}

export default Header;