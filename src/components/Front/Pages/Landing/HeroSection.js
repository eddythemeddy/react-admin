import React, { Component } from 'react';
import hero_1_2 from '../../assets/img/demo/hero-1-2.png';

class HeroSection extends Component {
    state = {}
    render() {
        return (
            <header id="hero" class="hero">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-sm-6">
                        <div class="hero-content">
                            <div class="hero-title__group">
                                <div class="hero-title">
                                    <h2>Conduct more customer conversions with confidient in a better way.</h2>
                                </div>
                                <div class="Hero--Subtitle">
                                    <p class="lead">Start boosting your business conversion rates with curated designs SEO first development sites with zero downtime
                                    </p>
                                </div>
                            </div>
                            <div class="hero-cta-group">
                                <form action="" class="hero-form cta__large">
                                    <div class="input-group">
                                        <label for="intro-email" class="sr-only">Email</label>
                                        <input type="email" class="form-control" id="intro-email" placeholder="Enter your email"/>
                                        <button type="submit" class="btn btn-secondary">Get started</button>
                                    </div>
                                    <span class="assistive-text">14-day FREE trial - no credit card needed</span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-5 ml-auto">
                        <div class="hero-figure">
                            <img src={hero_1_2} class="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    };
}

export default HeroSection;