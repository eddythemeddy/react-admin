import React, { Component } from 'react';
import logo from '../../../../assets/img/logo.png'

class Header extends Component {
    state = {}

    render() { 
        return (<>
            <main>
                <nav className="imkt-navbar imkt-navbar__default imkt-sticky">
                    <div className=" container-fluid imkt-navbar__main-section">
                        <div className="row">
                            <div className="column nav-comp-column">
                                <div className="imkt-navbar__title-wrapper">
                                    <a className="imkt-navbar__title-link" href="/software/jira">
                                        <img alt="Jira Software" className="lozad imkt-navbar__title-logo" height="33px" src={logo}/>
                                    </a>
                                    <button className="aui-icon aui-icon-small aui-iconfont-arrow-down" id="jsToggleNavbarMenu">Open and close the navigation menu</button>
                                </div>
                                <ul className="imkt-navbar__link-list">
                                    <li>
                                        <a className="imkt-navbar__link-list-link" href="/software/jira/features">Features</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__link-list-link" href="/software/jira/guides">Product guide</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__link-list-link" href="/software/jira/enterprise">Enterprise</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__link-list-link" href="/software/jira/pricing">Pricing</a>
                                    </li>
                                </ul>
                                <div className="imkt-navbar__right-nav">
                                    <a className="component__link button button--one button--small button--secondary button--primary__on-stuck" href="/software/jira/free">Try it free</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid imkt-navbar__collapsed-section">
                        <div className="row">
                            <div className="column">
                                <ul className="imkt-navbar__collapsed-link-list">
                                    <li>
                                        <a className="imkt-navbar__collapsed-link-list-link" href="/software/jira/features">Features</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__collapsed-link-list-link" href="/software/jira/guides">Product guide</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__collapsed-link-list-link" href="/software/jira/enterprise">Enterprise</a>
                                    </li>
                                    <li>
                                        <a className="imkt-navbar__collapsed-link-list-link" href="/software/jira/pricing">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </main>
        </>);
    }
}
 
export default Header;