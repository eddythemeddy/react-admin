import React, { Component } from 'react';
import feature_image_3 from '../../assets/img/demo/featured-images/feature-image-3.png';
import feature_image_4 from '../../assets/img/demo/featured-images/feature-image-4.png';


class Features extends Component {
    state = {}
    render() {
        return (
            <div>

                <section id="hiw" className="section-spacer bg-very__gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="feature-list-image">
                                    <img src={feature_image_4} className="img-fluid" alt="Image" />
                                </div>
                            </div>
                            <div className="col-sm-5 ml-auto">
                                <div className="feature-list-wrapper">
                                    <div className="content-header">
                                        <h2 className="content-title">Intuitive Interface</h2>
                                        <p>Dignissimos maiores, laudantium consequatur nam, officiis repellendus voluptate laboriosam. Efficiis repellendus voluptate
                                </p>
                                    </div>
                                    <ul className="list list-unstyled list-circle">
                                        <li>
                                            <span>Fully responsive</span>
                                        </li>
                                        <li>
                                            <span>24/7 Supports</span>
                                        </li>
                                        <li>
                                            <span>Single API</span>
                                        </li>
                                        <li>
                                            <span>Weekly Reports</span>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-link btn-link--secondary">
                                        Explore our products
                <i className="icon ion-ios-arrow-round-forward"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-spacer">
                    <div className="container">
                        <div className="row flex-column-reverse flex-sm-row align-items-center">
                            <div className="col-sm-5 mr-auto">
                                <div className="feature-list-wrapper">
                                    <div className="content-header">
                                        <h2 className="content-title">Even more features</h2>
                                        <p>Dignissimos maiores, laudantium consequatur nam, officiis repellendus voluptate laboriosam. Efficiis repellendus voluptate
                                </p>
                                    </div>
                                    <ul className="list list-circle">
                                        <li>
                                            <span>Well Documented</span>
                                        </li>
                                        <li>
                                            <span>Clean Codes</span>
                                        </li>
                                        <li>
                                            <span>Unique Design</span>
                                        </li>
                                        <li>
                                            <span>Fair price</span>
                                        </li>
                                    </ul>

                                    <a href="#" className="btn btn-link btn-link--secondary">
                                        Explore our products
                <i className="icon ion-ios-arrow-round-forward"></i>
                                    </a>

                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-list-image">
                                    <img src={feature_image_3} className="img-fluid" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}

export default Features;