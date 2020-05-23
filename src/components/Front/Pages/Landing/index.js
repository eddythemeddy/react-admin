import React, { Component } from 'react'

import HeroSection from './HeroSection'
import ClientLogos from './ClientsLogos'
import ScreenSlider from './ScreenSlider'
import Features from './Features';
import CallToAction from './CallToAction';

class Home extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="x-hidden has-sticky-header">
                    <HeroSection />
                    <ClientLogos />
                    <ScreenSlider />
                    
                    <Features />
                    {/* <PricingTable /> */}
                    {/* <Testimonials /> */}
                    {/* <Faqs /> */}
                    <CallToAction />
                </div>
            </>);

    }
}

export default Home;