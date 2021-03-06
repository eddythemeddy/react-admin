import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

const formData = {
    email: ''
}

const validateEmail = email => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))

class CallToAction extends Component {

    onSubmit = async values => {
        console.log(values)
        // format data coming from form to match the structure accepted bu backend API
        // const formData = formatFormData(values)
    }

    render() {
        return (
            <section id="try" className="section-spacer text-left pb-60 pt-50">
                <div className="container">
                    <div className="callout">
                        <div className="callout-content">
                            <div className="Callout--Header">
                                <h2>Start your free trial</h2>
                                <p className="lead">Start your free trial today to get working!</p>
                            </div>
                        </div>
                        <div className="ml-lg-auto" style={{ flex: '0.5 1 12%', paddingTop: '20px'}}>
                            <Form
                                onSubmit={this.onSubmit}
                                initialValues={formData}
                                validate={values => {
                                    const errors = {}
                                    const { email } = values
                                    const requiredMsg = '* required'
                                    if (email === undefined) {
                                        errors.email = {
                                            value: requiredMsg,
                                            show: true,
                                        }
                                    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
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
                                    mutators,
                                    onSubmit
                                }) => (
                                        <form action="">
                                            <div className="">
                                                <Field name="email">
                                                    {({ input, meta }) => (
                                                        <>
                                                            <input
                                                                {...input}
                                                                type="email"
                                                                placeholder="Your email"
                                                                className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`}
                                                            />
                                                        </>
                                                    )}
                                                </Field>
                                                <Field name="company">
                                                    {({ input, meta }) => (
                                                        <>
                                                            <input
                                                                {...input}
                                                                type="email"
                                                                placeholder="Kitchen"
                                                                className={`form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`}
                                                            />
                                                        </>
                                                    )}
                                                </Field>
                                                <button
                                                    style={{float: 'right'}}
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        this.onSubmit(
                                                            values
                                                        )
                                                    }}
                                                    disabled={submitting || validating}
                                                >Sign up!</button>
                                            </div>
                                        </form>
                                    )}
                            />
                            {/* <p className="d-block text-sm">14 days free - no credit card required</p> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default CallToAction;