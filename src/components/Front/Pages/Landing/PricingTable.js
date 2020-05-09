import React, { Component } from 'react';

class PricingTable extends Component {
    state = {}
    render() {
        return (
            <section id="pricing" class="section-spacer pricing-section bg-very__gray">
        <div class="container">
            <header class="section-header text-center">
                <h2 class="section-title">pricing</h2>
                <p class="section-subtitle">Everything is included, no hidden fees, no nonsense</p>
            </header>
            <div class="pricing-type-switch">
                <ul class="nav nav-pills justify-content-center js-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#monthly-plan">Billed monthly</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#annual-plan">Billed yearly</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div class="tab-pane active" id="monthly-plan" role="tabpanel" aria-labelledby="monthly-plan">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Starter</h4>
                                    <p>Entry you need get started without compromising</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            10
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small class="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Growing Business</h4>
                                    <p>Our most popular plan for your startup +99 apps integrations</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            18
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small class="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Organization</h4>
                                    <p>Create your own everything with our one way API</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            40
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                        <small class="text-warning">Save 10% on annually</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="annual-plan" role="tabpanel" aria-labelledby="annual-plan">
                    {/* <!-- ANNUAL PLAN --> */}
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Starter</h4>
                                    <p>Entry you need get started without compromising</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            9
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Growing Business</h4>
                                    <p>Our most popular plan for your startup +99 apps integrations</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            17
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item disabled" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pricing-single">
                                <div class="pricing-header">
                                    <h4 class="pricing-title">Organizations</h4>
                                    <p>Create your own everything with our one way API</p>
                                    <div class="pricing-price">
                                        <div class="pricing-value">
                                            39
                                            <sup class="pricing-currency">$</sup>
                                        </div>
                                        <small>Per active user/monthly</small>
                                    </div>
                                </div>
                                <ul class="pricing-list">
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Up to 3 projects
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free custom domain
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited SSD storage
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Marketplace access
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free builder
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        SSL Certificate
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Unlimited users
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Free analytic tools
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Group subscriptions
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        30 days backup
                                    </li>
                                    <li class="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                        Migration assistance
                                    </li>
                                </ul>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-primary">Start free trial</a>
                                    <span class="d-block assistive-text">14 days - no credit card</span>
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