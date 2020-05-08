import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button, ListItem, ListItemText } from "@material-ui/core";

class Features extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <Fragment id="hiw" className="section-spacer bg-very__gray">
                    <Card className="container">
                        <Card className="row align-items-center">
                            <Card className="col-sm-6">
                                <Card className="feature-list-image">
                                    <img src="images/demo/featured-images/feature-image-4.png" class="img-fluid" alt="Image" />
                                </Card>
                            </Card>
                            <Card className="col-sm-5 ml-auto">
                                <Card className="feature-list-wrapper">
                                    <Card className="content-header">
                                        <h2 class="content-title">Intuitive Interface</h2>
                                        <Typography>Dignissimos maiores, laudantium consequatur nam, officiis repellendus voluptate laboriosam. Efficiis repellendus voluptate
                                            </Typography>
                                    </Card>
                                    <ListItem>
                                        <ListItemText>Fully responsive</ListItemText>
                                        <ListItemText>24/7 Supports</ListItemText>
                                        <ListItemText>Single API</ListItemText>
                                        <ListItemText>Weekly Reports</ListItemText>
                                    </ListItem>
                                    <a href="#" class="btn btn-link btn-link--secondary">
                                        Explore our products
            <i class="icon ion-ios-arrow-round-forward"></i>
                                    </a>
                                </Card>
                            </Card>
                        </Card>
                    </Card>
                    </Fragment>

                    <Fragment className="section-spacer">
                        <Card className="container">
                            <Card className="row flex-column-reverse flex-sm-row align-items-center">
                                <Card className="col-sm-5 ml-auto">
                                    <Card className="feature-list-wrapper">
                                        <Card className="content-header">
                                            <h2 class="content-title">Even more features</h2>
                                            <Typography>Dignissimos maiores, laudantium consequatur nam, officiis repellendus voluptate laboriosam. Efficiis repellendus voluptate
                                    </Typography>
                                        </Card>
                                        <ListItem>
                                            <ListItemText>Fully responsive</ListItemText>
                                            <ListItemText>24/7 Supports</ListItemText>
                                            <ListItemText>Single API</ListItemText>
                                            <ListItemText>Weekly Reports</ListItemText>
                                        </ListItem>
                                        <a href="#" class="btn btn-link btn-link--secondary">
                                            Explore our products
                                        <i class="icon ion-ios-arrow-round-forward"></i>
                                        </a>
                                    </Card>
                                </Card>
                                <Card className="col-sm-6">
                                    <Card className="feature-list-image">
                                        <img src="images/demo/featured-images/feature-image-3.png" class="img-fluid" alt="Image" />
                                    </Card>
                                </Card>
                            </Card>
                        </Card>
                    </Fragment>

            </MuiThemeProvider >
        );
    };
}

export default Features;