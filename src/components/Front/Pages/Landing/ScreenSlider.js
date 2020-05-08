import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button } from "@material-ui/core";

class ScreenSlider extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <Fragment>

                <section id="overview" class="section-spacer">
        <div class="container">
            <div class="section-screens__inner">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <header class="section-header pt-100 text-center">
                            <h2 class="section-title">Single platform, Deep insights</h2>
                            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aut reiciendis praesentium.
                            </p>
                            <a href="https://www.youtube.com/watch?v=_zjQ0_v8JtY" class="btn btn-has-icon icon-on__left text-uppercase btn-link--secondary js-video-modal-trigger">
            <span class="u-icon u-icon__sm u-icon__circle u-icon__outline">
              <i class="icon ion-ios-play"></i>
            </span>
              Watch the video
            </a>
                        </header>
                    </div>
                </div>

                <div class="swiper-container screen-slider">
                    <div class="screen-slider-wrapper swiper-wrapper ">
                        <div class="screen-slider__item swiper-slide">
                            <img src="images/demo/screens/2.png" alt="Image"/>
                        </div>
                        <div class="screen-slider__item swiper-slide">
                            <img src="images/demo/screens/1.jpg" alt="Image"/>
                        </div>
                        <div class="screen-slider__item swiper-slide">
                            <img src="images/demo/screens/3.jpg" alt="Image"/>
                        </div>
                        <div class="screen-slider__item swiper-slide">
                            <img src="images/demo/screens/4.jpg" alt="Image"/>
                        </div>
                    </div>
                    {/* <!-- If we need navigation buttons or just delete them--> */}
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="feature-card">
                        <div class="u-icon u-icon__circle u-icon__lg bg-dimped__primary">
                            <i class="icon ion-ios-keypad"></i>
                        </div>
                        <div class="feature-card__body">
                            <h4 class="feature-title">Relentless Features</h4>
                            <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug
                            </p>
                            <a href="#" class="btn btn-link btn-link--secondary">Learn more
              <i class="icon ion-ios-arrow-forward"></i>
            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="feature-card">
                        <div class="u-icon u-icon__circle u-icon__lg bg-dimped__purple">
                            <i class="icon ion-ios-apps"></i>
                        </div>
                        <div class="feature-card__body">
                            <h4 class="feature-title">Easy Integration</h4>
                            <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug</p>

                            <a href="#" class="btn btn-link btn-link--secondary">Learn more
              <i class="icon ion-ios-arrow-forward"></i>
            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="feature-card m-0">
                        <div class="u-icon u-icon__circle u-icon__lg bg-dimped__cyan">
                            <i class="icon ion-ios-bug"></i>
                        </div>
                        <div class="feature-card__body">
                            <h4 class="feature-title">AI bugs report</h4>
                            <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug</p>

                            <a href="#" class="btn btn-link btn-link--secondary">Learn more
              <i class="icon ion-ios-arrow-forward"></i>
            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>

                </Fragment>
            </MuiThemeProvider >
        );
    };
}

export default ScreenSlider;