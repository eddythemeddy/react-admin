import React, { Component } from 'react';

class PricingTable extends Component {
    state = {}
    render() {
        return (
            <section id="pricing" className="section-spacer pricing-section bg-very__gray">
        <div className="container">
            <header className="section-header text-center">
                <h2 className="section-title">pricing</h2>
                <p className="section-subtitle">Everything is included, no hidden fees, no nonsense</p>
            </header>
            <div className="pricing-type-switch">
                <ul className="nav nav-pills justify-content-center js-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#monthly-plan">Billed monthly</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#annual-plan">Billed yearly</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane active" id="monthly-plan" role="tabpanel" aria-labelledby="monthly-plan">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Starter</h4>
                                    <p>Entry you need get started without compromising</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            10
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small className="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Growing Business</h4>
                                    <p>Our most popular plan for your startup +99 apps integrations</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            18
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small className="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Organization</h4>
                                    <p>Create your own everything with our one way API</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            40
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small className="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="annual-plan" role="tabpanel" aria-labelledby="annual-plan">
                    {/* <!-- ANNUAL PLAN --> */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Starter</h4>
                                    <p>Entry you need get started without compromising</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            9
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Growing Business</h4>
                                    <p>Our most popular plan for your startup +99 apps integrations</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            17
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-single">
                                <div className="pricing-header">
                                    <h4 className="pricing-title">Organizations</h4>
                                    <p>Create your own everything with our one way API</p>
                                    <div className="pricing-price">
                                        <div className="pricing-value">
                                            39
                                            <sup className="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul className="pricing-list">
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div className="pricing-footer">
                                    <a href="#" className="btn btn-primary">Start free trial</a>
                                    <span className="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    };
}

export default PricingTable;