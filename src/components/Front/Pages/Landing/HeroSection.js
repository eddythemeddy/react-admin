import React, { Component } from 'react';
import hero_1_2 from '../../assets/img/demo/hero-1-2.png';

class HeroSection extends Component {
    state = {}
    render() {
        return (
            <header id="hero" className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-6">
                        <div className="hero-content">
                            <div className="hero-title__group">
                                <div className="hero-title">
                                    <h2>Conduct more customer conversions with confidient in a better way.</h2>
                                </div>
                                <div className="Hero--Subtitle">
                                    <p className="lead">Start boosting your business conversion rates with curated designs SEO first development sites with zero downtime
                                    </p>
                                </div>
                            </div>
                            <div className="hero-cta-group">
                                <form action="" className="hero-form cta__large">
                                    <div className="input-group">
                                        <label for="intro-email" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="intro-email" placeholder="Enter your email"/>
                                        <button type="submit" className="btn btn-secondary">Get started</button>
                                    </div>
                                    <span className="assistive-text">14-day FREE trial - no credit card needed</span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 ml-auto">
                        <div className="hero-figure">
                            <img src={hero_1_2} className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    };
}

export default HeroSection;