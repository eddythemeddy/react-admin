import React from 'react'
import logo from '../../assets/img/logo.png'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    background-color: #f2f2f2;
`;
const thisYear = new Date().getFullYear()

const Footer = () =>{
    
    return (
        <Wrapper>
            <footer className="section-spacer footer-section">
                <div className="container">
                    <div className="row flex-column-reverse flex-sm-row flex-lg-row">
                        <div className="col-md-4 col-12">
                            <div className="footer-widget first-of-footer-widget">
                                <img src={logo} className="logo-sm mb-10" alt="Image" width="75"/><br/>
                                <p>Copyright &copy; {thisYear} Ghostly. <br/>All Rights Reserved.</p>
                                <a href="" className="mb-10">1-203-345-8989</a> |&nbsp;
                                <a href="mailto:info@ghostly.kitchen">info@ghostly.kitchen</a>
                                <ul className="social-list__inline mt-10">
                                    <li>
                                        <a href="">
                                            <i className="icon ion-logo-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-logo-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-logo-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-logo-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="icon ion-logo-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-10">
                            <div className="row">
                                <div className="col-md-4 col-6">
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="footer-widget">
                                        <h4 className="footer-widget__title">Company</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <a href="#overview">Overview</a>
                                            </li>
                                            {/* <li>
                                                <a href="#testimonial">testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#pricing">pricing</a>
                                            </li> */}
                                            <li>
                                                <a href="#faq">FAQs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="col-md-4 col-6">
                                    <div className="footer-widget">
                                        <h4 className="footer-widget__title">Developers</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="">Migrations</a>
                                            </li>
                                            <li>
                                                <a href="#">API</a>
                                            </li>
                                            <li>
                                                <a href="#">Integration</a>
                                            </li>
                                            <li>
                                                <a href="#">Developers Forum</a>
                                            </li>
                                            <li>
                                                <a href="#">Release Notes</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="col-md-4">
                                    <div className="footer-widget">
                                        <h4 className="footer-widget__title">Support</h4>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="">Help Center</a>
                                            </li>
                                            <li>
                                                <a href="#">Enterprises</a>
                                            </li>
                                            <li>
                                                <Link to="/privacy-policy">Privacy Poilcy</Link>
                                            </li>
                                            <li>
                                                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
}

export default Footer;