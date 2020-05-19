import React, { Component } from 'react';

class PreLoader extends Component {
    state = {}
    render() {
        return (
            <div id="loading">
                <div className="ripple ripple1"></div>
                <div className="ripple ripple2"></div>
                <div className="ripple ripple3"></div>
                <div className="ripple ripple4"></div>
            </div>
        );
    };
}

export default PreLoader;