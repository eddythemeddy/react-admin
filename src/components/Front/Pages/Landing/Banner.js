import React, { Component } from 'react'

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="container-fluid xs-none-bottom wcf-201–control">
                    <div className="row flex-container">
                        <div className="column column-md-5 column-lg-4 column-lg-offset-1 vertical-middle">
                            <div className="component component--heading">
                                <h1 className="heading">The #1 software development tool used by agile teams</h1>
                            </div>
                            <div className="component component--block xs-compact-top">
                                <div className="component component--link-button">
                                    <a className="component__link button button--one button--regular button--primary" href="/software/jira/free">Try it free</a>
                                </div>
                            </div>
                        </div>
                        <div className="column column-md-7 xs-none-bottom vertical-bottom">
                            <div className="component component--image" style={{transformOrigin:'top'}}>
                                <img alt="Illustration" className="lozad component__image" id="f3877e6f" src="https://wac-cdn.atlassian.com/dam/jcr:b86a32cb-0aa8-4783-aa81-9592d4fbf829/jsw-header-illustrations---v3.png?cdnVersion=949"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Banner;