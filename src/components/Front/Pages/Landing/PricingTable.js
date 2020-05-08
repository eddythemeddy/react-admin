import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button, ListItem, ListItemText, ListItemButton } from "@material-ui/core";

class PricingTable extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider id="pricing" className="section-spacer pricing-section bg-very__gray">
                <Card class="container">
                    <CardContent>
                        <h2 class="section-title">pricing</h2>
                        <Typography>Everything is included, no hidden fees, no nonsense</Typography>
                    </CardContent>
                    <Card className="nav nav-pills justify-content-center js-tabs">
                        <ListItem>
                            <ListItem button className="nav-link active" href="#monthly-plan">Billed monthly</ListItem>
                            <ListItem button className="nav-link" href="#annual-plan">Billed yearly</ListItem>
                        </ListItem>
                        <Card className="tab-content">
                            <Card className="tab-pane active" id="monthly-plan" role="tabpanel" aria-labelledby="monthly-plan">
                                <Card className="row">
                                    <Card class="col-md-4">
                                        <Card class="pricing-single">
                                            <Card class="pricing-header">
                                                <h4 class="pricing-title">Starter</h4>
                                                <p>Entry you need get started without compromising</p>
                                                <Card className="pricing-value">
                                                    10
                                            <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                                <Card className="col-md-4">
                                    <Card className="pricing-single">
                                        <Card className="pricing-header">
                                            <h4 class="pricing-title">Growing Business</h4>
                                            <p>Our most popular plan for your startup +99 apps integrations</p>
                                            <Card className="pricing-price">
                                                <Card className="pricing-value">
                                                    18
                                                    <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                                <Card className="col-md-4">
                                    <Card className="pricing-single">
                                        <Card className="pricing-header">
                                            <h4 class="pricing-title">Organization</h4>
                                            <p>Create your own everything with our one way API</p>
                                            <Card className="pricing-price">
                                                <Card className="pricing-value">
                                                    40
                                            <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                            </Card>
                           
                        </Card>
                        <Card className="tab-pane active" id="monthly-plan" role="tabpanel" aria-labelledby="monthly-plan">
                                <Card className="row">
                                    <Card class="col-md-4">
                                        <Card class="pricing-single">
                                            <Card class="pricing-header">
                                                <h4 class="pricing-title">Starter</h4>
                                                <p>Entry you need get started without compromising</p>
                                                <Card className="pricing-value">
                                                    10
                                            <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                                <Card className="col-md-4">
                                    <Card className="pricing-single">
                                        <Card className="pricing-header">
                                            <h4 class="pricing-title">Growing Business</h4>
                                            <p>Our most popular plan for your startup +99 apps integrations</p>
                                            <Card className="pricing-price">
                                                <Card className="pricing-value">
                                                    18
                                                    <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                                <Card className="col-md-4">
                                    <Card className="pricing-single">
                                        <Card className="pricing-header">
                                            <h4 class="pricing-title">Organization</h4>
                                            <p>Create your own everything with our one way API</p>
                                            <Card className="pricing-price">
                                                <Card className="pricing-value">
                                                    40
                                            <sup class="pricing-currency">$</sup>
                                                </Card>
                                                <small>Per active user/monthly</small>
                                                <small class="text-warning">Save 10% on annually</small>
                                            </Card>
                                        </Card>
                                        <ListItem className="pricing-list">

                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Up to 3 projects
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free custom domain
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited SSD storage
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Marketplace access
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free builder
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                SSL Certificate
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Unlimited users
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Free analytic tools
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Group subscriptions
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                30 days backup
                                            </ListItemText>
                                            <ListItemText className="pricing-list__item" data-toggle="tooltip" data-replacement="right" title="A long description texts would goes here with A quo doloremque amet repudiandae doloribus obcaecati itaque asperiores ut, nam possimus laborum. Similique, sit esse.">
                                                Migration assistance
                                            </ListItemText>

                                        </ListItem>
                                        <Card className="pricing-footer">
                                            <a href="#" class="btn btn-primary">Start free trial</a>
                                            <span class="d-block assistive-text">14 days - no credit card</span>
                                        </Card>
                                    </Card>
                                </Card>
                            </Card>
                    </Card>
                </Card>
            </MuiThemeProvider >
        );
    };
}

export default PricingTable;