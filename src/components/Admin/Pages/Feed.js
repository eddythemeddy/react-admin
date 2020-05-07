import React, { Component } from 'react';
import axios from 'axios'

class Feed extends Component {
    
    state = {  }

    componentDidMount() {

        axios({
            method: 'post',
            url: 'http://localhost/login',
            data: {
              firstName: 'Finn',
              lastName: 'Williams'
            }
        });
    }

    render() { 
        return (
            <>
                <h1>Feed</h1>
            </>
        );
    }
}
 
export default Feed;