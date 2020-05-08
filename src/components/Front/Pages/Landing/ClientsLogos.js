import React, { Component, Fragment } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button } from "@material-ui/core";

class ClientLogos extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <Fragment className="section-spacer pb-0 section--clients">
                    <Card className="container">
                        <CardContent className="hero-title">
                            <h2 className="section-title">Trusted by most fast-forwarding brands</h2>
                        </CardContent>
                        <Card className="row">
                            <Card className="col-12 mx-auto">
                                <Card className="client-logo__wrapper">
                                    <a href="" className="client-logo">
                                        <img class="client-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF95NianFdQY9K-wzK6imFQhzbVXIJ3QXT0tZ_NU6Dng08o_LB&usqp=CAU" alt="Image" />
                                    </a>
                                    <a href="" className="client-logo">
                                        <img class="client-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF95NianFdQY9K-wzK6imFQhzbVXIJ3QXT0tZ_NU6Dng08o_LB&usqp=CAU" alt="Image" />
                                    </a>
                                    <a href="" class="client-logo">
                                        <img class="client-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF95NianFdQY9K-wzK6imFQhzbVXIJ3QXT0tZ_NU6Dng08o_LB&usqp=CAU" alt="Image" />
                                    </a>
                                    <a href="" class="client-logo">
                                        <img class="client-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF95NianFdQY9K-wzK6imFQhzbVXIJ3QXT0tZ_NU6Dng08o_LB&usqp=CAU" alt="Image" />
                                    </a>
                                    <a href="" className="client-logo">
                                        <img class="client-logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF95NianFdQY9K-wzK6imFQhzbVXIJ3QXT0tZ_NU6Dng08o_LB&usqp=CAU" alt="Image" />
                                    </a>
                                </Card>
                            </Card>
                        </Card>
                    </Card>
                </Fragment>
            </MuiThemeProvider >
        );
    };
}

export default ClientLogos;