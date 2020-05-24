import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Header = props => {

    const [navBarOpen, setNavBarState] = useState(false)
    const [navBarClass, setNavBarClass] = useState("collapse")
    const [navBarIsSticky, setNavBarSticky] = useState("");

    useEffect(() => {
        // Update the document title using the browser API
        abc();
    });

    const abc = () => {
        window.addEventListener('resize', () => {
            setNavBarClass("collapse")
        }, false);

        window.addEventListener('scroll', () => {
            window.scrollY > 100 
            ?
            setNavBarSticky("navbar-is-sticky") :
            setNavBarSticky("")
        }, false)
    }
    
    return (
        <nav className={`navbar navbar-expand-lg fixed-top custom-menu custom-menu__light ${navBarIsSticky}`}>
            <div className="container">
                <Link 
                    className="navbar-brand" 
                    to="/">
                    <img src={logo} alt="Image" className="logo-md" width="110" />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setNavBarState(!navBarOpen)}
                    >
                    <span className="menu-icon__circle">
                    </span>
                    <span className="menu-icon">
                        <span className="menu-icon__bar"></span>
                        <span className="menu-icon__bar"></span>
                        <span className="menu-icon__bar"></span>
                    </span>
                </button>
                <div className={`${!navBarOpen && navBarClass} navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-lg-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#overview">Overview
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Features</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#testimonials">testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqs">FAQs</a>
                        </li> */}
                    </ul>
                    <div className="custom-menu__right">
                        <a href="http://64.225.35.167/login" className="btn btn-default" target="_blank">Login</a>
                        <a href="#try" className="btn btn-primary btn-pills">Request Information</a>
                        <p className="assistive-text d-md-none">14 days free - No credit card required</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;