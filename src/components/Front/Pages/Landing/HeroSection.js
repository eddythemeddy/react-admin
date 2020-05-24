import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
import hero_1_2 from '../../assets/img/demo/hero-1-2.png';
import axios from 'axios'

const formData = {
    email: ''
}

const validateEmail = email => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))

class HeroSection extends Component {
    state = {
        showErrors: false,
        isSubmitted: false,
        message: ''
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async values => {
        try {
            await axios.post(`/api/home`, values)
            .then( res => this.setState({ isSubmitted: true, message: res.data.message }));
        } catch (err) {
            console.log('Error in ScreeningForm onSubmit method', err)
            this.setState({ showErrors: true })
        }
    }

    render() {
        const { showErrors } = this.state;
        return (
            <header id="hero" className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-6">
                        <div className="hero-content">
                            <div className="hero-title__group">
                                <div className="hero-title">
                                    <h2>
                                        Get rid of the headache.<br/>
                                        Let Ghostly run your kitchen.
                                    </h2>
                                </div>
                                <div className="Hero--Subtitle">
                                    <p className="lead">
                                    Start boosting your kitchen with structured processes for efficient productivity and less margin for error.
                                    </p>
                                </div>
                            </div>
                            <div className="hero-cta-group">
                            {!this.state.isSubmitted ? (
                                <Form
                                    onSubmit={this.handleSubmit}
                                    initialValues={formData}
                                    validate={values => {
                                        const errors = {}
                                        const {
                                            email
                                        } = values
                                        const requiredMsg = '* required'
                                        if (email === undefined) {
                                            errors.email = {
                                                value: requiredMsg,
                                                show: true,
                                            }
                                        } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                                            errors.email = {
                                                value: 'Must be valid email',
                                                show: true
                                            }
                                        }
                                        return errors
                                    }}
                                    render={({
                                        values,
                                        submitting,
                                        validating,
                                        handleSubmit
                                    }) => (
                                        <form onSubmit={handleSubmit} className="hero-form cta__large">
                                            <div className="input-group">
                                                <label className="sr-only">Email</label>
                                                <Field name="email">
                                                    {({ input, meta }) => (
                                                        <>
                                                            <input
                                                                {...input}
                                                                type="email"
                                                                placeholder="Enter your email"
                                                                className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`}
                                                            />
                                                        </>
                                                    )}
                                                </Field>
                                                <button 
                                                    type="submit"
                                                    disabled={submitting || validating}
                                                    className="btn btn-secondary">
                                                    Get started
                                                </button>
                                            </div>
                                            <span className="assistive-text">14-day FREE trial - no credit card needed</span>
                                        </form>
                                    )}
                                />
                            ) : (
                                <h5>{this.state.message}</h5>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 ml-auto">
                        <div className="hero-figure">
                            <img src={hero_1_2} className="img-fluid w-100" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    };
}

export default HeroSection;