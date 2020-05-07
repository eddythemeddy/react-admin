import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
                <Header/>
                <Banner/>
                <Footer/>
            </>);
    }
}
 
export default Home;