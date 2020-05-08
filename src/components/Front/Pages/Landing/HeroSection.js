import React, { Component } from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography, TextField, Button, FormControl, FormControlLabel } from "@material-ui/core";


class HeroSection extends Component {
    state = {}
    render() {
        return (
            <MuiThemeProvider>
                <Card class="container">
                    <Card className="row align-items-center">
                        <Card className="col-12 col-sm-6">
                            <Card className="hero-content">
                                <Card className="hero-title__group">


                                    <Card class="hero-title">
                                        <CardContent className="hero-title">
                                            <h1 className="hero-customer-header">Conduct more customer conversions with confidient in a better way.</h1>
                                        </CardContent>
                                        <CardContent className="Hero--Subtitle">
                                            <Typography className="hero-customer-typoggraphy">Start boosting your business conversion rates with curated designs SEO first development sites with zero downtime</Typography>
                                        </CardContent>
                                    </Card>
                                </Card>

                                <Card className="hero-cta-group">
                                    <FormControl component="fieldset" className="hero-form cta__large">
                                        <Card className="input-group">
                                            {/* <FormControlLabel 
                                            labelPlacement="end"
                                            label={"Email"}/> */}
                                            <TextField
                                                placeholder="Enter your email"
                                                className="form-control"
                                                id="intro-email"
                                            />
                                            <Button className="btn btn-primary">Get started</Button>
                                        </Card>
                                        <Typography className="assistive-text">14-day FREE trial - no credit card needed</Typography>
                                    </FormControl>
                                </Card>
                            </Card>
                        </Card>

                        <Card className="col-12 col-sm-5 ml-auto">
                            <Card className="hero-figure">
                                <img src="https://cdn.clipart.email/0d18decfd10b6a2eb15762a507e09dd3_kitchen-icon-restaurant-cutlery-circular-symbol-of-a-spoon-and-a-_900-900.png" className="img-fluid w-100" alt="" />
                            </Card>
                        </Card>
                    </Card>
                </Card>
            </MuiThemeProvider>
        );
    };
}

export default HeroSection;