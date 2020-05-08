import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button } from "@material-ui/core";

class Testimonials extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <Fragment id="testimonials" className="section-spacer bg-blue testimonial-section">
                    <Card className="container">
                        <header class="text-center section-header">
                            <span class="text-light">Words of mouth</span>
                            <h2 class="section-title">What our customer are saying</h2>
                        </header>
                        <Card className="row flex-column-reverse flex-lg-row-reverse align-items-sm-center">
                            <Card className="col-md-1">
                                <ul class="dots testimonial-slider__indicators">
                                    <li class="owl-dot"></li>
                                    <li class="owl-dot"></li>
                                    <li class="owl-dot"></li>
                                </ul>
                            </Card>
                            <Card className="col-md-11">
                                <Card className="owl-carousel testimonial-slider">
                                    <blockquote class="testimonial-item">
                                        <Card className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                            <Card className="col-12 col-md-4">
                                                <Card className="testimonial-item__thumb">
                                                    <Card className="testimonial-item__image">
                                                        <img src="images/demo/clients/client-3.jpg" alt="Image" />
                                                    </Card>
                                                    {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                        Watch the story
                    <span class="u-icon u-icon__sm u-icon__circle">
                                                            <i class="icon ion-ios-play"></i>
                                                        </span>
                                                    </a>
                                                </Card>
                                            </Card>
                                            <Card className="col-md-8">
                                                <Card className="testimonial-content">
                                                    <Card className="testimonial-item__context">
                                                        <img src="images/demo/slack-logo-light.svg" class="logo-sm" alt="" />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                    </Card>
                                                    <Card className="testimonial-meta">
                                                        <h5>Jenny Sello</h5>
                                                        <a href="" class="d-block text-light">@Freelance Artist</a>
                                                    </Card>
                                                </Card>
                                            </Card>
                                        </Card>
                                    </blockquote>
                                    <blockquote class="testimonial-item">
                                        <Card className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                            <Card className="col-12 col-md-4">
                                                <Card className="testimonial-item__thumb">
                                                    <Card className="testimonial-item__image">
                                                        <img src="images/demo/clients/client-2.jpg" alt="Image" />
                                                    </Card>
                                                    {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                        Watch the story
                    <span class="u-icon u-icon__sm u-icon__circle">
                                                            <i class="icon ion-ios-play"></i>
                                                        </span>
                                                    </a>
                                                </Card>
                                            </Card>
                                            <Card className="col-md-8">
                                                <Card className="testimonial-content">
                                                    <Card className="testimonial-item__context">
                                                        <img src="images/demo/client-logos/logo-5-light.svg" class="logo-sm" alt="" />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                    </Card>
                                                    <Card className="testimonial-meta">
                                                        <h5>Jenny Sello</h5>
                                                        <a href="" class="d-block text-light">@Freelance Artist</a>
                                                    </Card>
                                                </Card>
                                            </Card>
                                        </Card>
                                    </blockquote>
                                    <blockquote class="testimonial-item">
                                        <Card className="row align-items-center flex-column-reverse flex-md-row justify-content-sm-center">
                                            <Card className="col-12 col-md-4">
                                                <Card className="testimonial-item__thumb">
                                                    <Card className="testimonial-item__image">
                                                        <img src="images/demo/clients/client-1.jpg" alt="Image" />
                                                    </Card>
                                                    {/* <!-- REPLACE WITH YOUR VIDEO LINK --> */}
                                                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="btn btn-has-icon btn-lg btn-light btn-pills js-video-modal-trigger">
                                                        Watch the story
                    <span class="u-icon u-icon__sm u-icon__circle">
                                                            <i class="icon ion-ios-play"></i>
                                                        </span>
                                                    </a>
                                                </Card>
                                            </Card>
                                            <Card className="col-md-8">
                                                <Card className="testimonial-content">
                                                    <Card className="testimonial-item__context">
                                                        <img src="images/demo/client-logos/logo-7-light.svg" class="logo-sm" alt="" />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationt.</p>
                                                    </Card>
                                                    <Card className="testimonial-meta">
                                                        <h5>Jenny Sello</h5>
                                                        <a href="" class="d-block text-light">@Freelance Artist</a>
                                                    </Card>
                                                </Card>
                                            </Card>
                                        </Card>
                                    </blockquote>
                                </Card>
                            </Card>
                        </Card>
                    </Card>
                </Fragment>
            </MuiThemeProvider >
        );
    };
}

export default Testimonials;