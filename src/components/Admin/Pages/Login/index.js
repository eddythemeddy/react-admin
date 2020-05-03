import React, { Component } from 'react';
import logo from '../../../../assets/img/logo.png'

class Login extends Component {
    
    constructor(props) {
        super(props);
    }

    render() { 
        return (
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
                            <img src={logo} alt="logo" data-src={logo} data-src-retina={logo} height="48"/>
                            <h5>Get Started with your Dashboard</h5>
                            <p className="mw-80 m-t-5">Sign in to your account</p>
                            <form id="form-login" className="p-t-15" role="form" action="index.html" novalidate="novalidate">
                                <div className="form-group form-group-default has-error">
                                <label>Login</label>
                                <div className="controls">
                                    <input type="text" name="username" placeholder="User Name" className="form-control error" required="" aria-required="true" aria-invalid="true"/>
                                </div>
                                </div><label id="username-error" className="error" for="username">This field is required.</label>
                                <div className="form-group form-group-default has-error">
                                <label>Password</label>
                                <div className="controls">
                                    <input type="password" className="form-control error" name="password" placeholder="Credentials" required="" aria-required="true" aria-invalid="true"/>
                                </div>
                                </div><label id="password-error" className="error" for="password">This field is required.</label>
                                <div className="row">
                                    <div className="col-md-6 no-padding sm-p-l-10">
                                        <div className="form-check">
                                            <input type="checkbox" value="1" id="checkbox1"/>
                                            <label for="checkbox1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                                        <button aria-label="" className="btn btn-primary btn-lg m-t-10" type="submit">Sign in</button>
                                    </div>
                                </div>
                                <div className="m-b-5 m-t-30">
                                    <a href="#" className="normal">Lost your password?</a>
                                </div>
                                <div>
                                    <a href="#" className="normal">Not a member yet? Signup now.</a>
                                </div>
                            </form>
                            <div className="pull-bottom sm-pull-bottom">
                                <div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                                    <div className="col-sm-9 no-padding m-t-10">
                                        <p className="small-text normal hint-text">
                                        ©2019-2020 All Rights Reserved. Pages® is a registered trademark of Revox Ltd. <a href="">Cookie Policy</a>, <a href=""> Privacy and Terms</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default Login;