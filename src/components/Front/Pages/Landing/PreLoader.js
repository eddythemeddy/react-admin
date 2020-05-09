import React, { Component } from 'react';

class PreLoader extends Component {
    state = {}
    render() {
        return (
            <div id="loading">
                <div class="ripple ripple1"></div>
                <div class="ripple ripple2"></div>
                <div class="ripple ripple3"></div>
                <div class="ripple ripple4"></div>
            </div>
        );
    };
}

export default PreLoader;