import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import axios from 'axios'
    
class LoginForm extends Component {
    state = {
        showErrors: false
    }
    onSubmit = async values => {
        console.log(values)
        // format data coming from form to match the structure accepted bu backend API
        // const formData = formatFormData(values)
        // try {
        //     await axios.post(`/api/`, values)
        //     // .then( res => localStorage.setItem('jwt', res.data));
        //     // this.props.history.goBack()
        // } catch (err) {
        //     console.log('Error in ScreeningForm onSubmit method', err)
        //     this.setState({ showErrors: true })
        // }
    }
    render() {
        const { showErrors } = this.state;
        return (
            <>
                <Form
                    onSubmit={this.onSubmit}
                    // initialValues={formData}
                    validate={values => {
                        const errors = {}
                        const {
                            username,
                            password
                        } = values
                        const requiredMsg = '* required'
                        console.log(values)
                        if (username === undefined) {
                            errors.username = {
                                value: requiredMsg,
                                show: true,
                            }
                        }
                        if (password === undefined) {
                            errors.password = {
                                value: requiredMsg,
                                show: true,
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
                            <form onSubmit={onSubmit}>
                                <div className="form-group form-group-default">
                                    <label>Login</label>
                                    <div className="controls">
                                        <Field name="username">
                                            {({ input, meta }) => (
                                                <>
                                                    <input
                                                        {...input}
                                                        type="text"
                                                        placeholder="User Name"
                                                        className={`form-control ${meta.error && meta.touched ? 'error' : ''}`}
                                                    />
                                                    {meta.error && meta.touched ? (
                                                        <label className="error">{meta.error.value}</label>
                                                    ) : null}
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="form-group form-group-default">
                                    <label>Password</label>
                                    <div className="controls">
                                        <Field name="password">
                                            {({ input, meta }) => (
                                                <>
                                                    <input
                                                        {...input}
                                                        type="password"
                                                        className={`form-control ${meta.error && meta.touched ? 'error' : ''}`}
                                                        placeholder="Credentials"
                                                    />
                                                    {meta.error && meta.touched ? (
                                                        <label className="error">{meta.error.value}</label>
                                                    ) : null}
                                                </>
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 no-padding sm-p-l-10">
                                        <div className="form-check">
                                            <input type="checkbox" value="1" id="checkbox1" />
                                            <label htmlFor="checkbox1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                                        <button
                                            onClick={e => {
                                                e.preventDefault()
                                                this.onSubmit(
                                                    values
                                                )
                                            }}
                                            className="btn btn-primary btn-lg m-t-10"
                                            type="submit"
                                            disabled={submitting || validating}>Sign in
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="m-b-5 m-t-30">
                                <a href="#" className="normal">Lost your password?</a>
                            </div>
                            <div>
                                <a href="#" className="normal">Not a member yet? Signup now.</a>
                            </div> */}
                            </form>
                        )}
                />
            </>
        );
    }
}
export default LoginForm;