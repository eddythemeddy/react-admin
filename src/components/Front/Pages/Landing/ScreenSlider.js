import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import image_1 from '../../assets/img/demo/screens/1.jpg';
import image_2 from '../../assets/img/demo/screens/2.png';
import image_3 from '../../assets/img/demo/screens/3.jpg';
import image_4 from '../../assets/img/demo/screens/4.jpg';

const images = [
    image_1,
    image_2,
    image_3,
    image_4
];

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
}

const ScreenSlider = () => {
    return (
        <section id="overview" className="section-spacer">
            <div className="container">
                <div className="section-screens__inner">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <header className="section-header pt-100 text-center">
                                <h2 className="section-title">Single platform, Deep insights</h2>
                                <p className="lead">Gain deep insights and understandings of your kitchen.</p>
                                {/* <a href="https://www.youtube.com/watch?v=_zjQ0_v8JtY" className="btn btn-has-icon icon-on__left text-uppercase btn-link--secondary js-video-modal-trigger">
                                    <span className="u-icon u-icon__sm u-icon__circle u-icon__outline">
                                        <i className="icon ion-ios-play"></i>
                                    </span>
                                    Watch the video
                                </a> */}
                            </header>
                        </div>
                    </div>
                    <div className="swiper-container screen-slider">
                        <div className="screen-slider-wrapper swiper-wrapper ">
                            <Fade {...fadeProperties}>
                                {images.map((e,i) => 
                                <div key={i} className="screen-slider__item swiper-slide">
                                    <img src={e} alt="Image" />
                                </div>
                                )}
                            </Fade>
                        </div>
                        {/* <!-- If we need navigation buttons or just delete them--> */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="feature-card">
                            <div className="u-icon u-icon__circle u-icon__lg bg-dimped__primary">
                                <i className="icon ion-ios-keypad"></i>
                            </div>
                            <div className="feature-card__body">
                                <h4 className="feature-title">Relentless Features</h4>
                                <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug
                            </p>
                                <a href="#" className="btn btn-link btn-link--secondary">Learn more
                <i className="icon ion-ios-arrow-forward"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="feature-card">
                            <div className="u-icon u-icon__circle u-icon__lg bg-dimped__purple">
                                <i className="icon ion-ios-apps"></i>
                            </div>
                            <div className="feature-card__body">
                                <h4 className="feature-title">Easy Integration</h4>
                                <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug</p>

                                <a href="#" className="btn btn-link btn-link--secondary">Learn more
                <i className="icon ion-ios-arrow-forward"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="feature-card m-0">
                            <div className="u-icon u-icon__circle u-icon__lg bg-dimped__cyan">
                                <i className="icon ion-ios-bug"></i>
                            </div>
                            <div className="feature-card__body">
                                <h4 className="feature-title">AI bugs report</h4>
                                <p>Aesthetic jean shorts glossier lo-fi DIY thundercats fashion axe echo park copper mug</p>

                                <a href="#" className="btn btn-link btn-link--secondary">Learn more
                <i className="icon ion-ios-arrow-forward"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default ScreenSlider;