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
            <section id="testimonials" class="section-spacer bg-blue testimonial-section">
                <div class="container">
                    <header class="text-center section-header">
                        <span class="text-light">Words of mouth</span>
                        <h2 class="section-title">What our customer are saying</h2>
                    </header>
                    <div class="row flex-column-reverse flex-lg-row-reverse align-items-sm-center">
                        <div class="col-md-1">
                            <ul class="dots testimonial-slider__indicators">
                                <li class="owl-dot"></li>
                                <li class="owl-dot"></li>
                                <li class="owl-dot"></li>
                            </ul>
                        </div>
                        <div class="col-md-11">
                            <div class="owl-carousel testimonial-slider">
                                <blockquote class="testimonial-item">
                                    <div class="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div class="col-12 col-md-4">
                                            <div class="testimonial-item__thumb">
                                                <div class="testimonial-item__image">
                                                    <img src={client_3} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span class="u-icon u-icon__sm u-icon__circle">
                                                        <i class="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="testimonial-content">
                                                <div class="testimonial-item__context">
                                                    <img src={slack_logo_light} class="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div class="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" class="d-block text-light">@Freelance Artist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote class="testimonial-item">
                                    <div class="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div class="col-12 col-md-4">
                                            <div class="testimonial-item__thumb">
                                                <div class="testimonial-item__image">
                                                    <img src={client_2} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span class="u-icon u-icon__sm u-icon__circle">
                                                        <i class="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="testimonial-content">
                                                <div class="testimonial-item__context">
                                                    <img src={logo_5_light} class="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div class="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" class="d-block text-light">@Freelance Artist</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <blockquote class="testimonial-item">
                                    <div class="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                        <div class="col-12 col-md-4">
                                            <div class="testimonial-item__thumb">
                                                <div class="testimonial-item__image">
                                                    <img src={client_1} alt="Image" />
                                                </div>
                                                {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                    Watch the story
                        <span class="u-icon u-icon__sm u-icon__circle">
                                                        <i class="icon ion-ios-play"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="testimonial-content">
                                                <div class="testimonial-item__context">
                                                    <img src={logo_7_light} class="logo-sm" alt="" />
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                </div>
                                                <div class="testimonial-meta">
                                                    <h5>Jenny Sello</h5>
                                                    <a href="" class="d-block text-light">@Freelance Artist</a>
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