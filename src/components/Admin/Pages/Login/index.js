import React from 'react';
import logo from '../../../../assets/img/logo.png'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear();

const Login = () => {
    
    return (
        <>
            <div className="login-wrapper ">
                <div className="bg-pic">
                    <div className="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20">
                    <h1 className="semi-bold text-white">
                        Meet pages - The simplest and fastest way to build web UI for your dashboard or app.</h1>
                    <p className="small">
                        Our beautifully-designed UI Framework come with hundreds of customizable features. Every Layout is just a starting point. ©2019-2020 All Rights Reserved. Pages® is a registered trademark of Revox Ltd.
                    </p>
                    </div>
                </div>
                <div className="login-container bg-white">
                    <div className="p-l-50 p-r-50 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
                        <Link to="/">
                            <img src={logo} alt="logo" data-src={logo} data-src-retina={logo} height="35"/>
                        </Link>
                        <h6>Get Started with your Dashboard</h6>
                        <p className="mw-80 m-t-5">Sign in to your account</p>
                        <LoginForm/>
                        <div className="pull-bottom sm-pull-bottom">
                            <div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                                <div className="col-sm-9 no-padding m-t-10">
                                    <p className="small-text normal hint-text">
                                    ©{year} All Rights Reserved. Ghostly® is a registered trademark of Ghostly Ltd. 
                                        <Link to="/privacy-policy">Privacy</Link> and <Link to="/terms-and-conditions">Terms</Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Login;