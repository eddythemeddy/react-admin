import React, { Component } from 'react';
import client_3 from '../../assets/img/demo/clients/client-3.jpg';
import slack_logo_light from '../../assets/img/demo/slack-logo-light.svg';
import client_2 from '../../assets/img/demo/clients/client-2.jpg';
import logo_5_light from '../../assets/img/demo/client-logos/logo-5-light.svg';
import client_1 from '../../assets/img/demo/clients/client-1.jpg';
import logo_7_light from '../../assets/img/demo/client-logos/logo-7-light.svg';


class Testimonials extends Component {
    state = {}
    render() {
        return (
            <section id="testimonials" className="section-spacer bg-blue testimonial-section">
                <div className="container">
                    <header className="text-center section-header">
                        <span className="text-light">Words of mouth</span>
                        <h2 className="section-title">What our customer are saying</h2>
                    </header>
                    <div className="row flex-column-reverse flex-lg-row-reverse align-items-sm-center">
                        <div className="col-md-1">
                            <ul className="dots testimonial-slider__indicators">
                                <li className="owl-dot"></li>
                                <li className="owl-dot"></li>
                                <li className="owl-dot"></li>
                            </ul>
                        </div>
                        <div className="col-md-11">
                            <div className="owl-carousel testimonial-slider">
                                <blockquote className="testimonial-item">
                                    <div className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div className="col-12 col-md-4">
                                            <div className="testimonial-item__thumb">
                                                <div className="testimonial-item__image">
                                                    <img src={client_3} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span className="u-icon u-icon__sm u-icon__circle">
                                                        <i className="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="testimonial-content">
                                                <div className="testimonial-item__context">
                                                    <img src={slack_logo_light} className="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div className="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" className="d-block text-light">@Freelance Artist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote className="testimonial-item">
                                    <div className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div className="col-12 col-md-4">
                                            <div className="testimonial-item__thumb">
                                                <div className="testimonial-item__image">
                                                    <img src={client_2} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span className="u-icon u-icon__sm u-icon__circle">
                                                        <i className="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="testimonial-content">
                                                <div className="testimonial-item__context">
                                                    <img src={logo_5_light} className="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div className="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" className="d-block text-light">@Freelance Artist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote className="testimonial-item">
                                    <div className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div className="col-12 col-md-4">
                                            <div className="testimonial-item__thumb">
                                                <div className="testimonial-item__image">
                                                    <img src={client_1} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" className="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span className="u-icon u-icon__sm u-icon__circle">
                                                        <i className="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="testimonial-content">
                                                <div className="testimonial-item__context">
                                                    <img src={logo_7_light} className="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div className="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" className="d-block text-light">@Freelance Artist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Testimonials;