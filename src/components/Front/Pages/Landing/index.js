import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'

import HeroSection from './HeroSection'
import ClientLogos from './ClientsLogos'
import ScreenSlider from './ScreenSlider'
import Features from './Features';
import PricingTable from './PricingTable';
import Testimonials from './Tesimonials';
import Faqs from './Faqs';
import CallToAction from './CallToAction';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header/>
                <Banner/>
                <HeroSection/>
                <ClientLogos/>
                <ScreenSlider/>
                <Features/>
                <PricingTable/>
                <Testimonials/>
                <Faqs/>
                <CallToAction/>
                <Footer/>
         
            </>);

    }
}
 
export default Home;